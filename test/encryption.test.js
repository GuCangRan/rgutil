import * as fun from '../utils/encryption'

test('base64Encode', () => {
    expect(fun.base64Encode("Hello Moon")).toEqual("SGVsbG8gTW9vbg==")
})
test('base64Decode', () => {
    expect(fun.base64Decode("SGVsbG8gTW9vbg==")).toEqual("Hello Moon")
})
test('md5', () => {
    expect(fun.md5("qwer123")).toEqual("553e83ca69693b33ef73958c04b7a315")
})