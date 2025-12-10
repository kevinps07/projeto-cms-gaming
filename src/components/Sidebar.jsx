function Sidebar({className='', children}){
    let _className = 'flex flex-col flex-1 max-w-64 p-4 bg-violet-900 text-white'
    return (
        <aside className={_className + className}>
            {children}
        </aside>
    );
}


export default Sidebar;