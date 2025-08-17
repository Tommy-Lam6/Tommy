console.log('加法:',5 + 3) // 8 (加法)
console.log('減法:',5 - 3) // 2 (減法)
console.log('乘法:',5 * 3) // 15 (乘法)
console.log('除法:',5 / 2) // 2.5 (除法)
console.log('取餘數:',5 % 3) // 2 (取餘數)
console.log('次方:',2 ** 3) // 8 (次方)
console.log('Infinity:',10 / 0) // Infinity
console.log('Infinity:',-10 / 0) // -Infinity
console.log('NaN:',0 / 0) // NaN
// 相等比較
console.log(1 + 2 == 3) // true
console.log(123 % 10 == 3) // true

// 範圍比較
console.log(5 > 3) // true
console.log(5 >= 5) // true
console.log(3 < 5) // true
console.log(3 <= 3) // true

// 嚴格相等比較
console.log(5 === 5) // true (值和型別都相同)
console.log(5 === '5') // false (值相同，但型別不同)

// 布林值比較
console.log(true == 1) // true (布林值和數字比較)
console.log(5 > 3) // true
console.log(5 < 3) // false
console.log(5 >= 5) // true
console.log(5 == 3) // false
console.log(5 != 3) // true
console.log(> !! '')


// 明確表示物件不存在
let user = null // 使用者尚未登入

// 清空變數的值
let data = { name: 'John' }
data = null // 明確清空 data

// 檢查以下變數的狀態並顯示適當訊息：
// - 如果是 null，顯示 "尚未設定"
// - 如果是 undefined，顯示 "未宣告"
// - 其他情況顯示該值
let username = fuck you
let age = 20
let nickname = '你滷味'

function checkValue{

}

console.log('username:', checkValue(username))
console.log('age:', checkValue(age))
console.log('nickname:', checkValue(nickname))



// 為 null 或 undefined 的變數設定預設值
let score = 0 // 預設為 0
let name = guest // 預設為 "訪客"

function withDefault(value, defaultValue) {
 
}

console.log('score:', withDefault(score, 0))
console.log('name:', withDefault(name, '訪客'))