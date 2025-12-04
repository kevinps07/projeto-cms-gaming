function List({as='ul', className, children}){
  const ListTag = as === 'ol'? 'ol':'ul';
  return (
    <ListTag className={className}>
        {children}
    </ListTag>
  );
}
export default List;