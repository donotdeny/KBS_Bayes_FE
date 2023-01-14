<template>
  <div class="container">
    <div class="chatbox">
        <div class="chatbox__support" :class="{ 'chatbox_active': isShow }">
            <div class="chatbox__header">
                <div class="chatbox__image--header">
                    <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image">
                </div>
                <div class="chatbox__content--header">
                    <h4 class="chatbox__heading--header flex">Chat support<p>&#128153;</p></h4>
                    <p class="chatbox__description--header">Chúng tôi có thể tư vấn bảo dưỡng, sửa chữa máy tính.&#128516;</p>
                </div>
            </div>
            <div class="chatbox__messages" id="chatbox__messages">
              <div 
                v-for="item in items" 
                :key="item.message" 
                :class="{ 'messages__item--visitor': item.visitor, 'messages__item--operator': !item.visitor }" 
                class="messages__item">
                {{ item.message }}
                <div  
                  class="option__kbs"
                  v-for="i in item.list" 
                  :key="i.id" 
                  >
                  <input type="radio" :id="i.id" :value="i.id"/>
                  <label :for="i.id" @click="handleClick(item, i)">{{ i.describe }}</label>
                </div>
              </div>
            </div>
            <div class="chatbox__footer">
                <input type="text" placeholder="Write a message..." @keyup.enter="submit" v-model="text">
                <button class="chatbox__send--footer send__button" @click="submit"><font-awesome-icon icon="fa-brands fa-telegram" /></button>
            </div>
        </div>
        <div class="chatbox__button">
            <button style="font-size: 1.8rem; color: #2a85fc;" @click="toggleChatBot">
              <font-awesome-icon icon="fa-brands fa-facebook-messenger" />
            </button>
        </div>
    </div>
</div>
</template>

<script>
import { ruleKBS, signalKBS } from '@/assets/ruleKBS';
import { getInfoKBS, getAdvisory } from '@/api/appAPI'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      isShow: false,
      kbs: {},
      items: [
        { message: "Tình trạng bạn đang gặp phải là gì?", visitor: true },
        { message: "Xin chào!", visitor: true }
      ],
      text: "",
      isStart: true,
      lengthSignal: 0
    }
  },
  methods: {
    toggleChatBot() {
      this.isShow = !this.isShow;
    },
    async submit() {
      if(this.isStart) {
        let object = ruleKBS.Status;
        if(this.text !== "") this.items.unshift({message: this.text, visitor: false});
        let flag = false;
        for (const property in object) {
          // console.log(`${property}: ${object[property]}`);
          if(this.text !== "" && object[property].includes(this.text)){
            this.kbs.Status = property;
            flag = true;
            this.items.unshift(
                {
                  message: `Để tìm giải pháp cho tình trạng "${object[property]}", vui lòng lựa chọn các tiêu chí sau:`, 
                  visitor: true
                });
            await getInfoKBS(property).then((res) => {
                this.isStart = false;
                this.infoStatus = res.data;
                this.lengthSignal = res.data.length;
                res.data.map(i => this.items.unshift({message: signalKBS[i].name, visitor: true, list: signalKBS[i].list, idName: signalKBS[i].idName}));
            })
            .catch((res) => console.log(res))
            break;
          }
        }
        if(this.text !== "" && flag === false) {
          this.items.unshift(
            {
              message: `Xin lỗi, tôi không hiểu ý bạn :(`, 
              visitor: true
            });
        }
      }
      else {
        this.items.unshift({message: this.text, visitor: false});
      }
      this.text = "";
    },
    async handleClick(item, option) {
      debugger
      this.kbs[item.idName] = option.id;
      if(Object.keys(this.kbs).length - 1 === this.lengthSignal) {
      await getAdvisory(this.kbs).then((res) => {
          if(res.data) this.items.unshift({message: `Giải pháp: ${res.data.name}`, visitor: true});
          else this.items.unshift({message: 'Hiện chưa tìm ra giải pháp', visitor: true});
          this.isStart = true;
          this.kbs = {};
        })
        .catch((res) => console.log(res))
      }
    }
  }
}
</script>

<style>
@import url(@/style/style.css);
</style>
