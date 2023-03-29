
const Nav=(props)=>{
    console.log(props)
    return(
        <nav>
            <div className="text-white" onClick={props.provideNavToggler}>
                X
            </div>
            <div>
                Contact
            </div>
            <div>
                About
            </div>
        </nav>
    )
}
export default Nav