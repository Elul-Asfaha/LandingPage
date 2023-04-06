import MenuIcon from '@mui/icons-material/Menu';
const Header=(props)=>{
    return(
        <header className='flex font-Alkatra justify-between text-white py-[30px] md:px-[50px] px-[5%] md:px-[10%]'>
            <div className='text-4xl'>
                Lorem ipsum
            </div>
            <div className='flex justify-between items-center gap-5 '>
                <p className='text-xl'>
                <a href="tel:+05890000111">0-589-0000111</a>
                </p>
                <p className='cursor-pointer'>
                    <MenuIcon onClick={props.provideNavToggler} style={{fontSize: 50 }}/>
                </p>
            </div>

        </header>
    )
}
export default Header