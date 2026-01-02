// ============================
// Componente React Funcional
// ============================
// Este é um componente funcional simples
// Componentes são funções que retornam JSX (HTML + JS)
//
// Boa prática:
// - Nome do componente começa com letra MAIÚSCULA
// - Um componente deve ter uma responsabilidade clara
function FirstComponent() {

    // ============================
    // Retorno JSX
    // ============================
    // JSX permite escrever HTML dentro do JavaScript
    // O React converte isso em chamadas JavaScript por baixo dos panos
    return (
        <div>
            {/* Conteúdo estático */}
            <h1>Primeiro Componente (Meu)</h1>
        </div>
    );
}

// ============================
// Exportação do componente
// ============================
// Export default permite importar assim:
// import FirstComponent from './components/FirstComponent'
export default FirstComponent;
