function List({as='ul', direction='h', children, className=''}) {
  const dir = direction === 'h'? 'flex ': 'flex flex-col '
  const ListTag = as === 'ol'? 'ol':'ul';
  return (
    <ListTag className={dir + className}>
        {children}
    </ListTag>
  );
}
export default List;