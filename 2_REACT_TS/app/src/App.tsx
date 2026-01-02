// Importação do React e do createContext
// O React é necessário para criar componentes
// createContext é usado para compartilhar dados globalmente (Context API)
import React, { createContext } from 'react';

// ============================
// 5 - Importação de componentes
// ============================
// Componentes React são reutilizáveis e ajudam a dividir a aplicação
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

// ============================
// 6 - Destructuring + Enum
// ============================
// Importamos o componente Destructuring (default export)
// e o enum Category (named export)
import Destructuring, { Category } from './components/Destructuring';

// ============================
// 7 - useState (estado)
// ============================
import State from './components/State';

// ============================
// 9 - Context API
// ============================
import Context from './components/Context';

// Importação de estilos
import './App.css';

// ============================
// 8 - Type Aliases (TypeScript)
// ============================

// Union Type:
// A variável pode ser string OU null
// Muito comum quando dados podem não existir ainda
type textOrNull = string | null;

// Literal Type:
// A variável só pode assumir um dos valores definidos
// Útil para restringir valores possíveis
type fixed = "Isso" | "Ou" | "Aquilo";

// ============================
// 9 - Tipagem do Context
// ============================

// Interface define o formato (shape) de um objeto
// Boas práticas: usar interface para objetos
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

// Criação do Context
// O tipo pode ser IAppContext OU null
// null é usado antes do Provider fornecer um valor
export const AppContext = createContext<IAppContext | null>(null);

// ============================
// Componente principal App
// ============================
function App() {

  // ============================
  // 1 - Variáveis tipadas
  // ============================
  // Tipagem explícita aumenta segurança e legibilidade
  const name: string = "Eduardo";
  const age: number = 31;
  const isWorking: boolean = true;

  // ============================
  // 2 - Funções tipadas
  // ============================
  // Tipamos o parâmetro e o retorno da função
  // Isso evita erros e melhora o autocomplete
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // ============================
  // 8 - Uso de Type Aliases
  // ============================
  const myText: textOrNull = "Tem algum texto aqui!";
  const mySecondText: textOrNull = "Tem algum texto aqui!";

  // Só aceita "Isso" | "Ou" | "Aquilo"
  const opa: fixed = "Ou";

  // ============================
  // 9 - Valor do Context
  // ============================
  // Objeto que será compartilhado com outros componentes
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  };

  return (
    // Provider envolve os componentes que terão acesso ao contexto
    <AppContext.Provider value={contextValue}>
      {/* Fragment (<> </>) evita criar divs desnecessárias no DOM */}
      <>
        <div className="App">

          <h1>React com TypeScript</h1>

          {/* Renderização de variáveis */}
          <h2>Nome: {name}</h2>
          <p>Idade: {age}</p>

          {/* Renderização condicional */}
          {isWorking && (
            <p>Está trabalhando no momento</p>
          )}

          {/* Chamada de função dentro do JSX */}
          <p>{userGreeting(name)}</p>

          {/* Componentes reutilizáveis */}
          <FirstComponent />
          <SecondComponent name="Teste" />

          {/* 
            Componente com props tipadas
            - category usa ENUM (Category.TS)
            - garante valores válidos e evita strings soltas
          */}
          <Destructuring 
            title="Primeiro post" 
            content="Post muiiiito bom, sobre TS" 
            commentsQty={10} 
            tags={["JavaScript", "TypeScript"]} 
            category={Category.TS} 
          />

          {/* Exemplo de uso do useState */}
          <State />

          {/* Condições com valores possivelmente null */}
          {myText && <p>Tem texto em myText</p>}
          {mySecondText && <p>Tem texto em mySecondText</p>}

          {/* Verificação de ausência de dados */}
          {(!myText || !mySecondText) && (
            <p>Alguma das variáveis de texto está vazia!</p>
          )}

          {/* Componente que consome o Context */}
          <Context />
        </div>
      </>
    </AppContext.Provider>
  );
}

// Exportação padrão do componente
export default App;
