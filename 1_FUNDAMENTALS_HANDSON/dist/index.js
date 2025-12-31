"use strict";
// 🔹 Nível 1 — Tipos Básicos
// 1️⃣ Numbers
console.log("\n******************************************");
console.log("************* EXERCISE 01 ****************");
console.log("******************************************");
// Declare uma variável age do tipo number e atribua o valor 20.
var numero = 20;
console.log("Valor inicial: " + numero);
// Reatribua um novo valor para age.
numero = 30;
console.log("Valor final: " + numero);
// Exiba no console o tipo da variável usando typeof.
console.log("O tipo da variável é: " + typeof (numero));
// 2️⃣ String
console.log("\n******************************************");
console.log("************* EXERCISE 02 ****************");
console.log("******************************************");
// Crie uma variável city do tipo string.
var city = "São Paulo";
// Exiba a string em letras maiúsculas.
console.log('\nString em letras maiúsculas: ' + city.toUpperCase());
// Exiba a string em letras minúsculas.
console.log('String em letras minúsculas: ' + city.toLowerCase());
// Crie uma nova variável concatenando um texto com city.
var street = "Avenida Paulista, Jardins";
var uf = "SP";
var country = "Brazil";
var fullAddress;
fullAddress = street + ", " + city + " - " + uf + ", " + country;
// Exiba a nova variável concatenando um texto com city.
console.log('Variável concatenada :\n' + fullAddress);
// 3️⃣ Boolean
console.log("\n******************************************");
console.log("************* EXERCISE 03 ****************");
console.log("******************************************");
// Declare uma variável isStudent do tipo boolean.
var isStudent = true;
console.log("Valor inicial: " + isStudent);
// Exiba o tipo dessa variável no console.
console.log("\nO tipo da variável é: " + typeof (isStudent));
// Altere o valor de true para false.
isStudent = !isStudent;
console.log("Valor final: " + isStudent);
// 🔹 Nível 2 — Inference e Annotation
// 4️⃣ Annotation
// Declare uma constante course com annotation explícita do tipo string.
var course = "Teste";
// Tente atribuir um número a essa variável (observe o erro do TypeScript).
// course = 10
// 5️⃣ Inference
// Declare uma variável score sem informar o tipo e atribua um número.
var score = 10;
console.log("Valor inicial: " + score);
// Reatribua outro número.
score = 15;
console.log("Valor final: " + score);
// Tente atribuir uma string e observe o erro.
// - error TS2322: Type 'string' is not assignable to type 'number'.
// score = "Teste"
// 🔹 Nível 3 — Métodos e Conversões
// 6️⃣ Métodos de Number
// Crie uma constante pi do tipo number.
var pi = Math.PI;
console.log("Valor inicial (Sem tratamento): " + pi);
// Use toFixed() para exibir apenas 2 dígitos significativos.
console.log("Valor final (Com 2 casas): " + pi.toFixed(2));
// 7️⃣ Métodos de String
// Crie uma variável language do tipo string.
var language = "French";
// Exiba o tamanho da string usando .length.
console.log("A string contém " + language.length + " caracteres.");
// Exiba a string em letras minúsculas.
console.log("\n    A string mai\u00FAscula fica assim: ".concat(language.toUpperCase(), "\n\n    e a string min\u00FAscula fica assim: ").concat(language.toLowerCase(), ".\n    "));
// 8️⃣ Conversão de Tipos
// Declare uma constante total do tipo number.
var total = 10;
console.log("Tipo inicial : " + typeof (total));
// Converta esse número para string e exiba o tipo da variável convertida.
console.log("Tipo final : " + typeof (total.toString()));
// 🔹 Nível 4 — Template Strings
// 9️⃣ Template String Básico
// Crie duas variáveis: product (string) e price (number).
var product = "Avocado";
var price = 5.25;
// Crie uma frase usando template string no formato:
var sentence = "The product ".concat(product, " costs EUR ").concat(price, "/KG.");
// "O produto X custa R$ Y"
// Exiba no console.
console.log(sentence);
// 🔹 Nível 5 — Desafios Práticos
// 🔥 Desafio 1
// Crie um programa que:
// Declare uma variável userName (string)
// let userName:string | null= prompt("Qual é o seu nome?") ?? "Visitante"
var userName = "Eduardo";
// Declare uma variável userAge (number)
var userAge = 31;
// Converta userAge para string
// Exiba no console a frase: "O usuário NOME tem IDADE anos"
console.log("O usu\u00E1rio ".concat(userName, " tem ").concat(userAge.toString(), " anos"));
// Nível 6 — Union Types (|)
/*
    Declare uma variável userId que aceite number ou string.
    Atribua um valor numérico.
    Reatribua um valor string.
    Tente atribuir um boolean (observe o erro).
*/
function showUserId(id) {
    if (typeof id == "number") {
        console.log("ID num\u00E9rico: ".concat(id));
    }
    else {
        console.log("ID textual: ".concat(id));
    }
}
showUserId(10);
showUserId("ABC");
var product1 = {
    name: "Notebook",
    price: 3500,
    available: true,
};
console.log("Nome do produto: " + product1.name);
console.log("Preço do produto: " + product1.price);
console.log("Produto disponível: " + product1.available);
var currentStatus;
currentStatus = "approved";
// currentStatus = "done" ❌ Erro
/* 🔹 Nível 8 — Funções Tipadas

5️⃣ Função com Retorno
    - Crie uma função sum que receba dois números.
    - Defina o tipo de retorno.
    - Retorne a soma.
    - Exiba o resultado.
*/
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 7));
/*
6️⃣ Função com Void
    - Crie uma função logMessage.
    - Ela recebe uma string.
    - Apenas imprime no console.
    - Defina o retorno como void.
*/
function logMessage(message) {
    console.log(message);
}
logMessage("Mensagem exibida no console");
/*🔹 Nível 9 — Arrays Tipados

7️⃣ Array de Números
    - Declare um array que aceite apenas number.
    - Adicione três valores.
    - Tente adicionar uma string.
*/
var numbers = [];
numbers.push(10, 20, 30);
// numbers.push("40") ❌ Erro
/*
8️⃣ Array de Union
    - Crie um array que aceite string | number.
    - Adicione valores mistos.
    - Percorra o array e exiba cada item.
*/
var mixedArray = [];
mixedArray.push(10);
mixedArray.push("vinte");
mixedArray.forEach(function (item) {
    console.log(item);
});
/*🔹 Nível 10 — Objetos Tipados

9️⃣ Objeto Simples
    - Crie um objeto user com:
        - name (string)
        - age (number)
    Exiba as propriedades.
*/
var user = {
    name: "Matheus",
    age: 28,
};
console.log(user.name);
console.log(user.age);
var car1 = {
    brand: "Ford",
    year: 2020,
};
var car2 = {
    brand: "BMW",
    year: 2022,
    color: "Preto",
};
function login(user) {
    console.log("Usu\u00E1rio ".concat(user.email, " logado"));
}
login({
    email: "teste@email.com",
    password: "123456",
});
var myAccount = {
    balance: 1000,
    deposit: function (amount) {
        this.balance += amount;
    },
};
myAccount.deposit(500);
console.log(myAccount.balance);
/*
🔹 Nível 12 — Narrowing (Verificação de Tipos)
1️⃣3️⃣ typeof

Crie uma função que receba string | number.
    Use typeof para tratar cada caso.

*/
function processValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
processValue("typescript");
processValue(12.345);
function identifyUser(user) {
    if ("role" in user) {
        console.log("Administrador: ".concat(user.role));
    }
    else {
        console.log("Usu\u00E1rio comum: ".concat(user.name));
    }
}
identifyUser({ role: "superadmin" });
identifyUser({ name: "João" });
var book = {
    title: "Clean Code",
    pages: 464,
};
// book.pages = 500 ❌ Erro
/*
1️⃣6️⃣ Literal Type

    - Crie uma função que receba "admin" ou "user".
    - Retorne uma mensagem baseada no valor.
*/
function checkPermission(role) {
    if (role === "admin") {
        return "Acesso total";
    }
    return "Acesso limitado";
}
console.log(checkPermission("admin"));
console.log(checkPermission("user"));
//# sourceMappingURL=index.js.map