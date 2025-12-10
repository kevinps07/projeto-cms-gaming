const groupStyles = {
  // Estilo para um Grid de Cards Responsivo (O seu exemplo)
  card: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-screen",
  
  // Estilo para um Grupo de Botões (Geralmente Flexbox)
  button: "flex flex-wrap gap-3 justify-center md:justify-start p-4 bg-gray-100 rounded-lg",
  
  // Estilo para um Formulário ou Lista Vertical (Geralmente Coluna Flex)
  form: "flex flex-col gap-4 max-w-xl mx-auto",
  
  // Estilo Padrão (Fallback)
  default: "space-y-4" 
};

function Group({ type, children }) {
  const classes = groupStyles[type] || groupStyles.default;
    return (
      <div className={classes}>
        {children}
      </div>
    );
}

export default Group;
