// Importação do React e dos tipos/hooks necessários
// useState: controla estado dentro do componente
// ChangeEvent: tipa corretamente eventos de formulário no React
import React, { ChangeEvent, useState } from 'react';

// ============================
// Componente State
// ============================
// Demonstra o uso do useState com TypeScript
// e a tipagem correta de eventos de input
const State = () => {

    // ============================
    // useState com tipagem
    // ============================
    // O estado "text" pode ser:
    // - string (quando o usuário digitar)
    // - null (estado inicial)
    //
    // Boa prática:
    // Tipar explicitamente quando o valor inicial é null
    const [text, setText] = useState<string | null>(null);

    // ============================
    // Função de evento tipada
    // ============================
    // ChangeEvent<HTMLInputElement> garante:
    // - acesso seguro a e.target.value
    // - autocomplete
    // - prevenção de erros comuns
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <div>
            {/* 
              Renderização do estado
              Quando text for null, o React renderiza "nada"
            */}
            <p>O texto é: {text}</p>

            {/* 
              Input controlado:
              - onChange atualiza o estado
              - o estado controla o valor exibido
            */}
            <input
                type="text"
                onChange={handleChange}
            />
        </div>
    );
};

// Exportação padrão do componente
export default State;
