// ============================
// Interface de Props (TypeScript)
// ============================
// Interfaces são usadas para definir o FORMATO de objetos
// Aqui estamos definindo quais propriedades o componente espera receber
// Isso traz:
// ✅ segurança de tipos
// ✅ autocomplete
// ✅ menos bugs em tempo de execução

interface Props {
    title: string;          // Título do post
    content: string;        // Conteúdo principal
    commentsQty: number;    // Quantidade de comentários
    tags: string[];         // Array de strings (tags)
    category: Category;     // Enum Category (valor restrito)
}

// ============================
// Enum (TypeScript)
// ============================
// Enum define um conjunto FIXO de valores possíveis
// Evita:
// ❌ strings soltas
// ❌ erros de digitação
// ❌ valores inválidos
//
// Boa prática: usar enum quando os valores são conhecidos e limitados
export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python",
}

// ============================
// Componente React com Destructuring
// ============================
// Aqui usamos DESTRUCTURING diretamente nos parâmetros
// Isso deixa o código mais limpo e legível
//
// O tipo Props garante que:
// - todas as props existem
// - estão no tipo correto
const Destructuring = ({
    title,
    content,
    commentsQty,
    tags,
    category,
}: Props) => {

    return (
        <div>
            {/* Renderização direta de props */}
            <h2>{title}</h2>
            <p>{content}</p>

            {/* Uso de number tipado */}
            <p>Quantidade de comentários: {commentsQty}</p>

            {/* 
              Renderização de listas no React
              - map percorre o array
              - cada elemento precisa de uma "key"
              - key ajuda o React a otimizar a renderização
            */}
            <div>
                {tags.map((tag) => (
                    <span key={tag}>#{tag} </span>
                ))}
            </div>

            {/* 
              category vem de um ENUM
              Isso garante que só valores válidos apareçam aqui
            */}
            <h4>Categoria: {category}</h4>
        </div>
    );
};

// Exportação padrão do componente
// Permite importar assim:
// import Destructuring from './components/Destructuring'
export default Destructuring;
