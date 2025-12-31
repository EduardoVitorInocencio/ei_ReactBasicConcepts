"use strict";
// ================================
// 1 - Numbers (números)
// ================================
// Declaramos a variável x e explicitamos o tipo number (annotation)
var x = 10;
// Podemos reatribuir valores, desde que continuem sendo number
x = 15;
// typeof mostra o tipo em tempo de execução (JS)
console.log(typeof x); // "number"
// Criamos uma constante numérica
var y = 3.14329492349;
// toPrecision define a quantidade TOTAL de dígitos significativos
console.log(y.toPrecision(6)); // "3.14"
// toFixed defini o número de casas decimais (após a vírgula)
console.log(y.toFixed(3)); // "3.14"
y = 10;
console.log(y.toExponential(5)); // "3.14"
// ================================
// 2 - String (texto)
// ================================
// Declaramos uma string com annotation
var firstName = 'Matheus';
// Métodos de string funcionam normalmente
console.log(firstName.toUpperCase()); // "MATHEUS"
// Outra string
var lastName = 'Battisti';
// Variável declarada, mas ainda sem valor
var fullName;
// Concatenação de strings
fullName = firstName + ' ' + lastName;
console.log(fullName); // "Matheus Battisti"
// ================================
// 3 - Boolean (true / false)
// ================================
// Boolean explícito
var a = true;
console.log(typeof a); // "boolean"
// Reatribuição válida, pois continua sendo boolean
a = false;
// ================================
// 4 - Inference e Annotation
// ================================
// Annotation: o tipo é declarado manualmente
var ann = 'Teste';
// Inference: o TypeScript infere automaticamente o tipo
// Aqui ele entende que é string, mesmo sem declarar
var inf = 'Testando';
// inf = 10 ❌ (TypeScript não permite, pois inf é string)
// ================================
// 5 - Compilação automática
// ================================
// O TypeScript infere que q é number
var q = 10;
console.log(q);
// Reatribuição permitida, pois continua sendo number
q = 11;
console.log(q);
// q = "teste" ❌ (erro de tipo)
// ================================
// 6 - Desafio 2
// ================================
// Número declarado com annotation
var n1 = 10;
// Convertendo number para string
var numberToString = n1.toString();
// Template string (interpolação)
var printMyNumber = "Eu quero imprimir o n\u00FAmero ".concat(numberToString);
// Exibição no console
console.log(printMyNumber);
//# sourceMappingURL=index.js.map