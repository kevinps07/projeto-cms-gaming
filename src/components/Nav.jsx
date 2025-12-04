function Nav ({setText, children, className}) {
    return(
        <nav className={className}>
            <h1>{setText}</h1>
            {children}
        </nav>
    );
}
export default Nav;