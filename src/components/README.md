# Componentes

🏗️ Solução com Objeto de Mapeamento de Classes


## Group

1. 📝 O que Usar
Objeto de Mapeamento (groupStyles): Um objeto JavaScript para associar cada type (string) a um conjunto de classes Tailwind (string).

Classes Condicionais: Acessar o objeto com groupStyles[type] para obter as classes Tailwind necessárias.

2. 💻 Código (Group.jsx)
JavaScript
￼

// 1. O objeto de mapeamento define os estilos para cada 'type'

const groupStyles = {
  // Estilo para um Grid de Cards Responsivo (O seu exemplo)
  card: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
  
  // Estilo para um Grupo de Botões (Geralmente Flexbox)
  button: "flex flex-wrap gap-3 justify-center md:justify-start p-4 bg-gray-100 rounded-lg",
  
  // Estilo para um Formulário ou Lista Vertical (Geralmente Coluna Flex)
  form: "flex flex-col gap-4 max-w-xl mx-auto",
  
  // Estilo Padrão (Fallback)
  default: "space-y-4" 
};


function Group({ type, children }) {
  
  // 2. Seleciona as classes: 
  // Usa groupStyles[type] se o 'type' existir; 
  // Caso contrário, usa groupStyles.default (ou retorna null).
  const classes = groupStyles[type] || groupStyles.default;

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default Group;
3. 🎯 Por que Usar essa Abordagem
Ponto	Motivação
Escalabilidade	Você adiciona novos estilos apenas no objeto groupStyles, sem modificar a lógica principal da função Group.
Legibilidade	Fica fácil ver o mapeamento entre o type (o nome) e as classes Tailwind que serão aplicadas.
Simplicidade	Evita a necessidade de múltiplos if/else if/else ou um bloco switch volumoso dentro do componente React, tornando-o mais limpo.
￼
Exportar para as Planilhas
￼
4. 🚀 Como Usar no seu Projeto
Agora você pode usar seu componente Group e o estilo será aplicado automaticamente:

JavaScript
￼
// Exemplo de uso para o grupo de Cards
<Group type="card">
  {/* Aqui entram seus componentes Card */}
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</Group>

// Exemplo de uso para o grupo de Botões
<Group type="button">
  <button className="bg-blue-500 text-white p-2 rounded">Principal</button>
  <button className="bg-gray-300 p-2 rounded">Secundário</button>
</Group>