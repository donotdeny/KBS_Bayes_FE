import request from '@/utils/request'

export function getInfoKBS(property) {
    return request({
        url: `/KBS/getInfo?status=${property}`,
        method: 'post'
    });
}

export function getAdvisory(status) {
    return request({
        url: '/KBS/getAdvisory',
        method: 'post',
        data: status,
    });
}
