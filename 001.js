// 實作發票對獎程式
// 特別獎號碼：12345678
// 使用者發票號碼：後三碼為 678
// 對中後三碼可得 200 元

let specialNumber = 61185213
let userNumber = 87654678
let userName = "Alice"

// 提示：可使用 % 運算子取得後三碼
let lastThreeDigits = specialNumber % 1000
let isWinner = (userNumber % 1000) === lastThreeDigits

console.log(`特別獎號碼的後三碼是: ${lastThreeDigits}`)
console.log(`使用者發票號碼的後三碼是: ${userNumber % 1000}`)
console.log(`使用者是否中獎: ${isWinner}`)