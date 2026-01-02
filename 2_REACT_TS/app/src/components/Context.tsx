// Importamos o hook useContext do React
// Ele permite consumir (ler) valores vindos da Context API
import { useContext } from 'react';

// Importamos o contexto criado no App
// Esse contexto contém dados globais da aplicação
import { AppContext } from '../App';

// ============================
// Componente Context
// ============================
// Esse componente é responsável por CONSUMIR o contexto
// Ele não recebe props, apenas lê dados globais
const Context = () => {

    // ============================
    // useContext
    // ============================
    // useContext acessa o valor fornecido pelo AppContext.Provider
    // O tipo de "details" é: IAppContext | null
    // Isso acontece porque o contexto foi criado assim:
    // createContext<IAppContext | null>(null)
    const details = useContext(AppContext);

    return (
        <>
            {/* 
              Renderização condicional:
              Só renderizamos o conteúdo SE details não for null

              👉 Boa prática:
              Isso evita erros como:
              "Cannot read property 'language' of null"
            */}
            {details && (
                <div>
                    {/* Acesso seguro às propriedades do contexto */}
                    <h2>Linguagem: {details.language}</h2>
                    <h4>FW: {details.framework}</h4>
                    <p>Qtd: {details.projects}</p>
                </div>
            )}
        </>
    );
};

// Exportação padrão do componente
export default Context;
