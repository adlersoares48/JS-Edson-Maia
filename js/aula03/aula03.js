/* Arquivo JS aula 03 Operadores e Operações */
let n1 = 10
let n2 = 2
let n3 = '2'

document.write(`N1 ${n1}<br>`)
document.write(`N2 ${n2}<br>`)
document.write(`N3 ${n3}<br>`)

console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)

console.log(n2 == n3) // igual a
console.log(n2 === n3) // identico a
console.log(n2 != n3) // diferente de
console.log(n2 !== n3) // não é identico

console.log(n1 >  n2)
console.log(n1 >=  n2)
console.log(n1 <  n2)
console.log(n1 <=  n2)

let a = true
let b = false
console.log(a && b) // E - AND
console.log( a || b) // OU - OR
console.log(!a) // NÃO - NOT
console.log(!b) // NÃO - NOT
