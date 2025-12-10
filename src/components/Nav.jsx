import List from "./List";


function Nav ({ local, children, className='', title=''}) {

    const _local = local === 'top'? true: false;
    let _className = ''; 
    let _font = ''; 

    if(_local){
        _className = 'flex w-screen justify-around items-center h-16 p-4 bg-violet-900'
        _font  = 'text-xl font-mono font-bold' 
        return(
            <header className={_className}>
                <h1 className={_font}>{title}</h1>
                <div className="flex-1"></div>
                <nav className={className}>            
                        {children}
                </nav>
            </header>
        );
    }


    return (
          <nav className={className}>            
                        {children}
            </nav>
    )


}
export default Nav;