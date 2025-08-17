let number = 61206111
let userName = Alice 
let userNumber = 87654678

let lastThreeDigits = number % 100
let userLastThreeDigits = userNumber % 100
let isWinner = userLastThreeDigits === lastThreeDigits

console.log(`特別獎號碼的後兩碼是: ${lastThreeDigits}`)
console.log(`使用者發票號碼的後兩碼是: ${userLastThreeDigits}`)
console.log(`使用者是否中獎: ${isWinner}`)

