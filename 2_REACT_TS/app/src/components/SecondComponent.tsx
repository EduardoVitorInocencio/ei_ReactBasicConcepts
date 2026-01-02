// ============================
// Interface de Props (TypeScript)
// ============================
// Interface define o formato do objeto de props
// Esse componente exige receber:
// - name: string
//
// Se alguém tentar usar o componente sem passar "name",
// o TypeScript acusará erro em tempo de desenvolvimento
interface Props {
    name: string;
}

// ============================
// Componente React Funcional
// ============================
// O componente recebe as props como argumento
// Aqui ainda NÃO usamos destructuring
// (mostra o acesso tradicional: props.name)
const SecondComponent = (props: Props) => {

    return (
        <div>
            {/* 
              Renderização de props no JSX
              props.name é garantido como string pelo TypeScript
            */}
            <h2>Segundo Componente - {props.name}</h2>
        </div>
    );
};

// ============================
// Exportação padrão
// ============================
// Permite importar assim:
// import SecondComponent from './components/SecondComponent'
export default SecondComponent;
