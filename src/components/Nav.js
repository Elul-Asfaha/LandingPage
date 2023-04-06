import CloseIcon from '@mui/icons-material/Close';
import Socials from './Socials';
import { HashLink as Link } from 'react-router-hash-link';
const Nav=(props)=>{
    console.log(props)

    return(
        <nav className='bg-white h-screen text-black dark:text-white dark:bg-black'>
            <div className="text-white cursor-pointer flex items-center justify-between py-[3%] px-[10%] mb-[10px]" >
                <div className='text-black dark:text-white'>
                    Lorem, ipsum.
                </div>
                <span className='transform text-black dark:text-white dark:bg-black hover:rotate-45 hover:rotate-90 hover:delay-300'> 
                    <CloseIcon style={{
                        fontSize: '40px'
                    }} onClick={props.provideNavToggler}/>
                </span>
            </div>

            <div className='flex flex-col gap-5 items-center text-4xl'>
                <Link to="#homeSection" onClick={props.provideNavToggler}>
                    <div className='border-b-2 border-white hover:border-black dark:border-black dark:hover:border-white cursor-pointer'>
                        Home
                    </div>
                </Link>
                <Link to="#inquireSection" onClick={props.provideNavToggler}>
                    <div className='border-b-2 border-white hover:border-black dark:border-black dark:hover:border-white cursor-pointer'>
                        Inquire
                    </div>
                </Link>
                <Link to="" onClick={props.provideNavToggler}>
                    <div className='border-b-2 border-white hover:border-black dark:border-black dark:hover:border-white cursor-pointer'>
                        Contact
                    </div>
                </Link>
                <Socials/>
            </div>
        </nav>
    )
}
export default Nav