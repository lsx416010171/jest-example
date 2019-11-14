function add(num1, num2) {
    return num1 + num2
}

describe('测试加法',()=>{
    it('加法测试',()=>{
        expect(add(1,2)).toBe(3)
    })
})