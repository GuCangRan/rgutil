const children = [
    {
        base: {
            name: "base64Encode",
            title: "base64编码",
            desc: "base64编码",
            parmInfo: "(string)"
        },
        demo: ["Hello Moon"]
    },
    {
        base: {
            name: "base64Decode",
            title: "base64解码",
            desc: "base64解码",
            parmInfo: "(string)"
        },
        demo: ["SGVsbG8gTW9vbg=="]
    },
    {
        base: {
            name: "md5",
            title: "md5加密",
            desc: "md5加密",
            parmInfo: "(string)"
        },
        demo: ["qwer123"]
    }
]

const docData = {
    title: {
        label: "加密",
        value: "encryption",
        expand: true,
        testValue: "",
        testResult: "",
        children: []
    },
    children: children
}

export default docData;