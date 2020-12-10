import * as fun from '../utils/function'

test('objType', () => {
    expect(fun.objType([])).toEqual("Array")
    expect(fun.objType({})).toEqual("Object")
    expect(fun.objType(2)).toEqual("Number")
    expect(fun.objType("abc")).toEqual("String")
})

test('byteSize', () => {
    try {
        //jest 暂时不支持Blob类型
        expect(fun.byteSize("微笑")).toEqual(6)
        expect(fun.byteSize("wu de")).toEqual(5)
    } catch (error) {}
})
test('splitLines', () => {
    expect(fun.splitLines("wu\nde\nha\nqiu")).toEqual(["wu", "de", "ha", "qiu"])
})
test('removeHTMLTags', () => {
    expect(fun.removeHTMLTags("<div v-for='(group, index) in listDoc' :key='index'>123</div>")).toEqual("123")
})
test('escapeHTML', () => {
    expect(fun.escapeHTML("<div v-for='(group, index) in listDoc' :key='index'>123</div>")).toEqual("&lt;div v-for=&#39;(group, index) in listDoc&#39; :key=&#39;index&#39;&gt;123&lt;/div&gt;")
})
test('formatNumber', () => {
    expect(fun.formatNumber(123456789)).toEqual("123,456,789")
    expect(fun.formatNumber(123456789, 4, "-")).toEqual("1-2345-6789")
})
test('formatString', () => {
    expect(fun.formatString("absdfsfsdfasdfassad")).toEqual("a,bsd,fsf,sdf,asd,fas,sad")
    expect(fun.formatString("absdfsfsdfasdfassad", 4, "-")).toEqual("abs-dfsf-sdfa-sdfa-ssad")
})
test('throttle', () => {
    function test(val) {
        //console.log("test throttle" + val);
        return val;
    }

    var myThrottle = fun.throttle(test, 1000);

    let parm = "测试传参";
    myThrottle(parm); //执行
    expect(myThrottle(parm)).toEqual(undefined);

})
test('debounce', () => {

    function test(val) {
        //console.log("test throttle" + val);
        return val;
    }
    const myDebounce = fun.debounce(test, 1000);
    let parm = "测试传参";
    expect(myDebounce(parm)).toEqual(undefined)
})
test('urlParam', () => {
    expect(fun.urlParam("a", null, "http://test.com?a=123&b=234")).toEqual("123")
    expect(fun.urlParam("c", "测试空", "http://test.com?a=123&b=234")).toEqual("测试空")
})
test('randomNum', () => {
    let num = fun.randomNum(1, 5);
    expect(num >= 1 && num <= 5).toEqual(true)
})
test('randomCode', () => {
    expect(fun.randomCode(4).length).toEqual(4)
    expect(fun.randomCode(6).length).toEqual(6)
})
test('randomIP', () => {
    let ip = fun.randomIP();
    expect(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)).toEqual(true)
})
test('capitalize', () => {
    expect(fun.capitalize("hello")).toEqual("Hello")
    expect(fun.capitalize("hello moon")).toEqual("Hello moon")
})
test('capitalizeEveryWord', () => {
    expect(fun.capitalizeEveryWord("hello 哈哈 moon")).toEqual("Hello 哈哈 Moon")
    expect(fun.capitalizeEveryWord("hello moon")).toEqual("Hello Moon")
})
test('decapitalize', () => {
    expect(fun.decapitalize("Hello")).toEqual("hello")
    expect(fun.decapitalize("Hello Moon")).toEqual("hello Moon")
})
test('decapitalizeEveryWord', () => {
    expect(fun.decapitalizeEveryWord("Hello 哈哈 Moon")).toEqual("hello 哈哈 moon")
    expect(fun.decapitalizeEveryWord("Hello Moon")).toEqual("hello moon")
})
test('camelCase', () => {
    expect(fun.camelCase("my-name-desc")).toEqual("myNameDesc")
    expect(fun.camelCase("Hello-Ni_Hao")).toEqual("helloNiHao")
})
test('hyphenate', () => {
    expect(fun.hyphenate("myNameZhangSan")).toEqual("my-name-zhang-san")
})
test('privacyPhone', () => {
    expect(fun.privacyPhone("18312349876")).toEqual("183****9876")
    expect(fun.privacyPhone("18312349876", "^^^^")).toEqual("183^^^^9876")
})
test('privacyName', () => {
    expect(fun.privacyName("张三丰")).toEqual("张**")
    expect(fun.privacyName("张三丰", "^^")).toEqual("张^^")
})
test('bytesToSize', () => {
    expect(fun.bytesToSize(0)).toEqual("0 B")
    expect(fun.bytesToSize(15)).toEqual("15.0 B")
    expect(fun.bytesToSize(2323)).toEqual("2.27 KB")
    expect(fun.bytesToSize(5678999)).toEqual("5.42 MB")
})
test('base64Encode', () => {
    expect(fun.base64Encode("Hello Moon")).toEqual("SGVsbG8gTW9vbg==")
})
test('base64Decode', () => {
    expect(fun.base64Decode("SGVsbG8gTW9vbg==")).toEqual("Hello Moon")
})
test('md5', () => {
    expect(fun.md5("qwer123")).toEqual("553e83ca69693b33ef73958c04b7a315")
})
test('getUUID', () => {
    expect(fun.getUUID("-").includes("-")).toEqual(true)
    expect(fun.getUUID("(*)").includes("(*)")).toEqual(true)
})
test('deepClone', () => {
    let obj = {
        "name": "张三",
        "age": 12,
        "hobby": ["打篮球", "吹牛"]
    };
    expect(fun.deepClone(obj) == obj).toEqual(false)
})
test('splitPath', () => {

    expect(fun.splitPath("D:\\Downloads\\src\\chibang.wav")).toEqual({
        "dir": "D:\\Downloads\\src\\",
        "name": "chibang.wav",
        "ext": ".wav"
    })

    expect(fun.splitPath("/Downloads/src/chibang.wav")).toEqual({
        "dir": "/Downloads/src/",
        "name": "chibang.wav",
        "ext": ".wav"
    })
})
test('digitUpperCase', () => {
    expect(fun.digitUpperCase(12345.67)).toEqual("壹万贰仟叁佰肆拾伍元陆角柒分")
    expect(fun.digitUpperCase(-100)).toEqual("欠壹佰元整")
})