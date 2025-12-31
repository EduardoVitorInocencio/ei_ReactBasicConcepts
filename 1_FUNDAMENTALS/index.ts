// ================================
// 1 - Numbers (números)
// ================================

// Declaramos a variável x e explicitamos o tipo number (annotation)
let x: number = 10

// Podemos reatribuir valores, desde que continuem sendo number
x = 15

// typeof mostra o tipo em tempo de execução (JS)
console.log(typeof x) // "number"

// Criamos uma constante numérica
const y: number = 3.14329492349

// toPrecision define a quantidade TOTAL de dígitos significativos
console.log(y.toPrecision(6)) // "3.14"

// toFixed define o número de casas decimais (após a vírgula)
console.log(y.toFixed(3)) // "3.14"

// toExponential retorna uma string, cujo 
console.log(y.toExponential(5)) // "3.14"


// ================================
// 2 - String (texto)
// ================================

// Declaramos uma string com annotation
const firstName: string = 'Matheus'

// Métodos de string funcionam normalmente
console.log(firstName.toUpperCase()) // "MATHEUS"

// Outra string
const lastName: string = 'Battisti'

// Variável declarada, mas ainda sem valor
let fullName: string

// Concatenação de strings
fullName = firstName + ' ' + lastName

console.log(fullName) // "Matheus Battisti"


// ================================
// 3 - Boolean (true / false)
// ================================

// Boolean explícito
let a: boolean = true

console.log(typeof a) // "boolean"

// Reatribuição válida, pois continua sendo boolean
a = false


// ================================
// 4 - Inference e Annotation
// ================================

// Annotation: o tipo é declarado manualmente
const ann: string = 'Teste'

// Inference: o TypeScript infere automaticamente o tipo
// Aqui ele entende que é string, mesmo sem declarar
const inf = 'Testando'

// inf = 10 ❌ (TypeScript não permite, pois inf é string)


// ================================
// 5 - Compilação automática
// ================================

// O TypeScript infere que q é number
let q = 10

console.log(q)

// Reatribuição permitida, pois continua sendo number
q = 11

console.log(q)

// q = "teste" ❌ (erro de tipo)


// ================================
// 6 - Desafio 2
// ================================

// Número declarado com annotation
const n1: number = 10

// Convertendo number para string
const numberToString = n1.toString()

// Template string (interpolação)
const printMyNumber: string = `Eu quero imprimir o número ${numberToString}`

// Exibição no console
console.log(printMyNumber)
