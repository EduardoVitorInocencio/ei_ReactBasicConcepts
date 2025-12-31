// 🔹 Nível 1 — Tipos Básicos

// 1️⃣ Numbers
console.log("\n******************************************")
console.log("************* EXERCISE 01 ****************")
console.log("******************************************")

// Declare uma variável age do tipo number e atribua o valor 20.
let numero:number = 20
console.log("Valor inicial: " + numero)

// Reatribua um novo valor para age.
numero = 30
console.log("Valor final: " + numero)

// Exiba no console o tipo da variável usando typeof.
console.log("O tipo da variável é: " + typeof(numero))


// 2️⃣ String
console.log("\n******************************************")
console.log("************* EXERCISE 02 ****************")
console.log("******************************************")

// Crie uma variável city do tipo string.
let city:string = "São Paulo"

// Exiba a string em letras maiúsculas.
console.log('\nString em letras maiúsculas: ' + city.toUpperCase())

// Exiba a string em letras minúsculas.
console.log('String em letras minúsculas: ' + city.toLowerCase())

// Crie uma nova variável concatenando um texto com city.
let street:string = "Avenida Paulista, Jardins"
let uf: string = "SP"
let country:string = "Brazil"
let fullAddress:string

fullAddress = street + ", " + city + " - " + uf + ", " + country

// Exiba a nova variável concatenando um texto com city.
console.log('Variável concatenada :\n' + fullAddress)


// 3️⃣ Boolean
console.log("\n******************************************")
console.log("************* EXERCISE 03 ****************")
console.log("******************************************")

// Declare uma variável isStudent do tipo boolean.
let isStudent:boolean = true
console.log("Valor inicial: " + isStudent)
// Exiba o tipo dessa variável no console.
console.log("\nO tipo da variável é: " + typeof(isStudent))

// Altere o valor de true para false.
isStudent = !isStudent
console.log("Valor final: " + isStudent)

// 🔹 Nível 2 — Inference e Annotation

// 4️⃣ Annotation

// Declare uma constante course com annotation explícita do tipo string.
const course:string="Teste"

// Tente atribuir um número a essa variável (observe o erro do TypeScript).
// course = 10


// 5️⃣ Inference

// Declare uma variável score sem informar o tipo e atribua um número.
let score = 10
console.log("Valor inicial: " + score)
// Reatribua outro número.
score = 15
console.log("Valor final: " + score)

// Tente atribuir uma string e observe o erro.
// - error TS2322: Type 'string' is not assignable to type 'number'.

// score = "Teste"

// 🔹 Nível 3 — Métodos e Conversões
// 6️⃣ Métodos de Number

// Crie uma constante pi do tipo number.
const pi:number = Math.PI
console.log("Valor inicial (Sem tratamento): " + pi)

// Use toFixed() para exibir apenas 2 dígitos significativos.
console.log("Valor final (Com 2 casas): " + pi.toFixed(2))


// 7️⃣ Métodos de String

// Crie uma variável language do tipo string.
let language:string = "French"
// Exiba o tamanho da string usando .length.
console.log("A string contém " + language.length + " caracteres.")

// Exiba a string em letras minúsculas.
console.log(`
    A string maiúscula fica assim: ${language.toUpperCase()}\n
    e a string minúscula fica assim: ${language.toLowerCase()}.
    `)

// 8️⃣ Conversão de Tipos

// Declare uma constante total do tipo number.
const total:number = 10
console.log("Tipo inicial : " + typeof(total))

// Converta esse número para string e exiba o tipo da variável convertida.
console.log("Tipo final : " + typeof(total.toString()))

// 🔹 Nível 4 — Template Strings
// 9️⃣ Template String Básico

// Crie duas variáveis: product (string) e price (number).
let product:string = "Avocado"
let price:number = 5.25

// Crie uma frase usando template string no formato:
let sentence:string = `The product ${product} costs EUR ${price}/KG.`
// "O produto X custa R$ Y"

// Exiba no console.
console.log(sentence)


// 🔹 Nível 5 — Desafios Práticos
// 🔥 Desafio 1
// Crie um programa que:

// Declare uma variável userName (string)
// let userName:string | null= prompt("Qual é o seu nome?") ?? "Visitante"
let userName:string = "Eduardo"

// Declare uma variável userAge (number)
let userAge:number = 31

// Converta userAge para string
// Exiba no console a frase: "O usuário NOME tem IDADE anos"
console.log(`O usuário ${userName} tem ${userAge.toString()} anos`)

// Nível 6 — Union Types (|)
/*
    Declare uma variável userId que aceite number ou string.
    Atribua um valor numérico.
    Reatribua um valor string.
    Tente atribuir um boolean (observe o erro).
*/
function showUserId(id: number | string):void{
    if(typeof id == "number"){
        console.log(`ID numérico: ${id}`)
    }else{
        console.log(`ID textual: ${id}`)
    }
}

showUserId(10)
showUserId("ABC")

// 🔹 Nível 7 — Type Alias
/*
3️⃣ Criando Tipos Personalizados
    Crie um type chamado Product.
    Ele deve ter:
        - name (string)
        - price (number)
        - available (boolean)
    Crie uma variável usando esse tipo.
*/
type Product = {
  name: string
  price: number
  available: boolean
}

const product1: Product = {
  name: "Notebook",
  price: 3500,
  available: true,
}

console.log("Nome do produto: " + product1.name)
console.log("Preço do produto: " + product1.price)
console.log("Produto disponível: " + product1.available)

/* Type Alias com Union
    Crie um type Status que aceite:
        - "pending"
        - "approved"
        - "rejected"
    Declare uma variável com esse tipo.
    Tente atribuir um valor fora da lista.
*/

type Status = "pending" | "approved" | "rejected"

let currentStatus: Status

currentStatus = "approved"
// currentStatus = "done" ❌ Erro


/* 🔹 Nível 8 — Funções Tipadas

5️⃣ Função com Retorno
    - Crie uma função sum que receba dois números.
    - Defina o tipo de retorno.
    - Retorne a soma.
    - Exiba o resultado.
*/
function sum(a: number, b: number): number {
  return a + b
}

console.log(sum(5, 7))

/*
6️⃣ Função com Void
    - Crie uma função logMessage.
    - Ela recebe uma string.
    - Apenas imprime no console.
    - Defina o retorno como void.
*/
function logMessage(message: string): void {
  console.log(message)
}

logMessage("Mensagem exibida no console")

/*🔹 Nível 9 — Arrays Tipados

7️⃣ Array de Números
    - Declare um array que aceite apenas number.
    - Adicione três valores.
    - Tente adicionar uma string.
*/
const numbers: number[] = []

numbers.push(10, 20, 30)
// numbers.push("40") ❌ Erro


/* 
8️⃣ Array de Union
    - Crie um array que aceite string | number.
    - Adicione valores mistos.
    - Percorra o array e exiba cada item.
*/

const mixedArray: (number | string)[] = []

mixedArray.push(10)
mixedArray.push("vinte")

mixedArray.forEach(item => {
  console.log(item)
})



/*🔹 Nível 10 — Objetos Tipados

9️⃣ Objeto Simples
    - Crie um objeto user com:
        - name (string)
        - age (number)
    Exiba as propriedades.
*/
const user = {
  name: "Matheus",
  age: 28,
}

console.log(user.name)
console.log(user.age)


/*
🔟 Objeto com Propriedade Opcional

    - Crie um objeto car.
    - Ele deve ter:
        - brand (string)
        - year (number)
        - color? (string opcional)
    - Crie um objeto com e sem color.
*/
type Car = {
  brand: string
  year: number
  color?: string
}

const car1: Car = {
  brand: "Ford",
  year: 2020,
}

const car2: Car = {
  brand: "BMW",
  year: 2022,
  color: "Preto",
}



/*🔹 Nível 11 — Interfaces

1️⃣1️⃣ Interface Básica
    Crie uma interface User.
    Ela deve conter:
        - email (string)
        - password (string)
    Crie uma função que receba um User.
*/
interface User {
  email: string
  password: string
}

function login(user: User): void {
  console.log(`Usuário ${user.email} logado`)
}

login({
  email: "teste@email.com",
  password: "123456",
})


/*
1️⃣2️⃣ Interface com Método

    - Crie uma interface Account.
    - Ela deve ter:
        - balance (number)
        - deposit(amount: number): void
    - Implemente a interface em um objeto.
*/
interface Account {
  balance: number
  deposit(amount: number): void
}

const myAccount: Account = {
  balance: 1000,

  deposit(amount: number) {
    this.balance += amount
  },
}

myAccount.deposit(500)
console.log(myAccount.balance)




/*
🔹 Nível 12 — Narrowing (Verificação de Tipos)
1️⃣3️⃣ typeof

Crie uma função que receba string | number.
    Use typeof para tratar cada caso.

*/
function processValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase())
  } else {
    console.log(value.toFixed(2))
  }
}

processValue("typescript")
processValue(12.345)


/*
1️⃣4️⃣ Propriedade in

    - Crie dois tipos:
        - Admin com role
        - User com name
    - Crie uma função que identifique o tipo usando in.
*/

type Admin = {
  role: string
}

type CommonUser = {
  name: string
}

function identifyUser(user: Admin | CommonUser): void {
  if ("role" in user) {
    console.log(`Administrador: ${user.role}`)
  } else {
    console.log(`Usuário comum: ${user.name}`)
  }
}

identifyUser({ role: "superadmin" })
identifyUser({ name: "João" })


/*🔹 Nível 13 — Readonly e Literal Types
1️⃣5️⃣ Readonly
    - Crie um objeto com propriedades readonly.
    - Tente alterar uma delas.
*/
type Book = {
  readonly title: string
  readonly pages: number
}

const book: Book = {
  title: "Clean Code",
  pages: 464,
}

// book.pages = 500 ❌ Erro


/*
1️⃣6️⃣ Literal Type

    - Crie uma função que receba "admin" ou "user".
    - Retorne uma mensagem baseada no valor.
*/
function checkPermission(role: "admin" | "user"): string {
  if (role === "admin") {
    return "Acesso total"
  }
  return "Acesso limitado"
}

console.log(checkPermission("admin"))
console.log(checkPermission("user"))
