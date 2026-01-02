# 📘 Projeto React com TypeScript – Conceitos Fundamentais

Este projeto tem como objetivo demonstrar, de forma prática, os principais **conceitos de React combinados com TypeScript**, seguindo boas práticas de tipagem, organização e componentização.

---

## 🚀 Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Context API**
- **Hooks (useState, useContext)**

---

## 🧩 Conceitos de React Abordados

### ✅ Componentes Funcionais
- Componentes são funções que retornam JSX
- Devem começar com letra maiúscula
- Cada componente possui uma responsabilidade clara

Exemplo:
```tsx
function FirstComponent() {
  return <h1>Primeiro Componente</h1>;
}
````

---

### ✅ Props

* Dados passados de um componente pai para um filho
* Permitem reutilização de componentes

```tsx
<SecondComponent name="Eduardo" />
```

---

### ✅ Renderização Condicional

* Usada para exibir conteúdo com base em condições

```tsx
{isWorking && <p>Está trabalhando</p>}
```

---

### ✅ Listas e `map`

* Renderização dinâmica de arrays
* Uso obrigatório da prop `key`

```tsx
{tags.map(tag => (
  <span key={tag}>#{tag}</span>
))}
```

---

## 🧠 Conceitos de TypeScript Abordados

### ✅ Tipagem Básica

* Tipagem explícita de variáveis e funções

```ts
const age: number = 31;
const userGreeting = (name: string): string => { ... }
```

---

### ✅ Interfaces

* Usadas para definir a estrutura de objetos
* Muito comuns para tipar `props` e `context`

```ts
interface Props {
  name: string;
}
```

---

### ✅ Type Aliases

* Criam tipos personalizados
* Muito úteis para Union Types e Literal Types

```ts
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";
```

---

### ✅ Enum

* Define um conjunto fixo de valores
* Evita strings soltas e erros de digitação

```ts
export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python",
}
```

---

## ⚙️ Hooks Utilizados

### ✅ useState

* Gerencia estado local do componente
* Tipado para evitar inconsistências

```ts
const [text, setText] = useState<string | null>(null);
```

---

### ✅ Tipagem de Eventos

* Uso de `ChangeEvent` para inputs

```ts
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  setText(e.target.value);
};
```

---

### ✅ useContext + Context API

* Compartilhamento de dados globais
* Evita prop drilling

```ts
const details = useContext(AppContext);
```

* Contexto tipado para segurança:

```ts
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}
```

---

## 🌍 Context API

* Usada para compartilhar dados como:

  * configurações
  * usuário
  * idioma
* Tipada para evitar acesso a propriedades inexistentes
* Uso seguro com verificação de `null`

---

## ✅ Boas Práticas Aplicadas

✔ Tipagem forte (sem `any`)
✔ Uso correto de `interface`, `type` e `enum`
✔ Componentes pequenos e reutilizáveis
✔ Hooks bem tipados
✔ Renderização condicional segura
✔ Organização clara dos arquivos
✔ Código legível e escalável

---

## 🎯 Objetivo do Projeto

Este projeto serve como **base de aprendizado** para quem deseja:

* Aprender React com TypeScript
* Entender tipagem na prática
* Criar aplicações mais seguras e organizadas

---

## 📌 Próximos Passos (Sugestões)

* Adicionar `useEffect`
* Criar custom hooks
* Consumir API externa
* Validação de formulários
* Separar Context em pasta própria

---

💡 **Conclusão:**
Combinar **React + TypeScript** aumenta a segurança, previsibilidade e qualidade do código, principalmente em projetos médios e grandes.

---

Feito para fins de estudo 🚀

