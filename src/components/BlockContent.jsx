function BlockContent ({children, className = ''}){

    let _type = 'admin';
    let _className = '';

    if (_type === 'admin') {
        _className = 'flex flex-col p-4'
    }

    return (
        <main className={_className + className}>
            {children}
        </main>
    );
}


export default BlockContent;