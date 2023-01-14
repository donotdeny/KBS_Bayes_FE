export const ruleKBS = {
    Status: {
        "TT-01": "Máy bị treo",
        "TT-02": "Máy chạy chậm, lag",
        "TT-03": "Máy tính quá nóng",
        "TT-04": "Lỗi ổ cứng",
        "TT-05": "Không khởi động được",
        "TT-06": "Không boot được Windows",
        "TT-07": "Máy tự restart",
        "TT-08": "Lỗi màn hình xanh",
        "TT-09": "Máy tiếng phát ra tiếng kêu bíp bíp",
    }
} 

export const signalKBS = {
    Cooler: {
        name: "Quạt tản nhiệt",
        idName: "Cooler",
        list: [
            {
                describe: "Hoạt động bình thường",
                id: "TN-01"
            },
            {
                describe: "Không hoạt động",
                id: "TN-02"
            },
            {
                describe: "Kêu rất to",
                id: "TN-03"
            },
        ]
    },
    Action: {
        name: "Hoạt động của người dùng",
        idName: "Action",
        list: [
            {
                describe: "Bình thường",
                id: "HD-01"
            },
            {
                describe: "Cài đặt phần mềm chứa virus",
                id: "HD-02"
            },
            {
                describe: "Cập nhật hệ thống",
                id: "HD-03"
            },
            {
                describe: "Khôi phục phiên bản cũ",
                id: "HD-04"
            },
            {
                describe: "Cài đặt phần mềm anti-malware",
                id: "HD-05"
            },
        ]
    },
    UsageCpu: {
        name: "Mức sử dụng CPU",
        idName: "UsageCpu",
        list: [
            {
                describe: "Thấp",
                id: "US-01"
            },
            {
                describe: "Trung bình",
                id: "US-02"
            },
            {
                describe: "Cao",
                id: "US-03"
            },
        ]
    },
    StatusMonitor: {
        name: "Trạng thái màn hình",
        idName: "StatusMonitor",
        list: [
            {
                describe: "Hoạt động bình thường",
                id: "MH-01"
            },
            {
                describe: "Không hoạt động",
                id: "MH-02"
            },
            {
                describe: "No signal",
                id: "MH-03"
            },
            {
                describe: 'Thông báo "Hard disk Corrupted"',
                id: "MH-04"
            },
            {
                describe: 'Màn hình xanh "Critical Process Died"',
                id: "MH-05"
            },
            {
                describe: 'Màn hình xanh "BAD POOL HEADER"',
                id: "MH-06"
            },
            {
                describe: 'Màn hình xanh "IRQL NOT LESS OR EQUAL"',
                id: "MH-07"
            },
        ]
    },
    LastClean: {
        name: "Khoảng thời gian vệ sinh gần nhất",
        idName: "LastClean",
        list: [
            {
                describe: "Gần đây có vệ sinh máy",
                id: "TG-01"
            },
            {
                describe: "Đã lâu không vệ sinh máy",
                id: "TG-02"
            }
        ]
    },
    SignalData: {
        name: "Tình trạng nguồn",
        idName: "SignalData",
        list: [
            {
                describe: "Bình thường",
                id: "SA-01"
            },
            {
                describe: "Không hoạt động",
                id: "SA-02"
            },
            {
                describe: "Hoạt động rồi tắt",
                id: "SA-03"
            },
        ]
    },
    Bios: {
        name: "Hãng sản xuất BIOS",
        idName: "Bios",
        list: [
            {
                describe: "Dell",
                id: "HA-01"
            },
            {
                describe: "Asus",
                id: "HA-02"
            },
            {
                describe: "Gigabyte",
                id: "HA-03"
            },
        ]
    },
    BuildPc: {
        name: "Cấu hình máy tính",
        idName: "BuildPc",
        list: [
            {
                describe: "Đáp ứng nhu cầu sử dụng",
                id: "CH-01"
            },
            {
                describe: "Đã lỗi thời",
                id: "CH-02"
            },
        ]
    },
    Sound: {
        name: "Âm thanh phát ra",
        idName: "Sound",
        list: [
            {
                describe: "Không phát ra âm thanh lạ",
                id: "AT-01"
            },
            {
                describe: "Ổ cứng phát ra âm thanh lạ",
                id: "AT-02"
            },
            {
                describe: "1 tiếng beep",
                id: "AT-03"
            },
            {
                describe: "2 tiếng beep",
                id: "AT-04"
            },
            {
                describe: "3 tiếng beep",
                id: "AT-05"
            },
            {
                describe: "4 tiếng beep",
                id: "AT-06"
            },
            {
                describe: "5 tiếng beep",
                id: "AT-07"
            },
            {
                describe: "6 tiếng beep",
                id: "AT-08"
            },
            {
                describe: "7 tiếng beep",
                id: "AT-09"
            },
            {
                describe: "8 tiếng beep",
                id: "AT-10"
            },
            {
                describe: "Không có tiếng beep nhưng đèn nguồn sáng",
                id: "AT-11"
            },
            {
                describe: "1 beep dài + 1 beep ngắn",
                id: "AT-12"
            },
            {
                describe: "1 beep dài + 2 beep ngắn",
                id: "AT-13"
            },
            {
                describe: "1 beep dài + 3 beep ngắn",
                id: "AT-14"
            },
            {
                describe: "1 beep dài + 4 beep ngắn",
                id: "AT-15"
            },
            {
                describe: "2 beep ngắn",
                id: "AT-16"
            },
            {
                describe: "1 beep dài + 9 beep ngắn",
                id: "AT-17"
            },
            {
                describe: "Beep dài liên tục",
                id: "AT-18"
            },
            {
                describe: "Beep ngắn liên tục",
                id: "AT-19"
            },
        ]
    }
}