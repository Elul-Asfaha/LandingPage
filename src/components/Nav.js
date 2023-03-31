import CloseIcon from '@mui/icons-material/Close';
import Socials from './Socials';

const Nav=(props)=>{
    console.log(props)

    return(
        <nav className='bg-white h-screen text-black dark:text-white dark:bg-black'>
            <div className="text-white cursor-pointer flex justify-between py-[3%] px-[10%]" onClick={props.provideNavToggler}>
                <div>
                    Lorem, ipsum.
                </div>
                <span className='transform text-black dark:text-white dark:bg-black hover:rotate-45 hover:rotate-90 hover:delay-300'> 
                    <CloseIcon style={{
                        fontSize: '40px'
                    }}/>
                </span>
            </div>

            <div className='flex flex-col gap-5 items-center text-4xl'>
                <div className='border-b-2 border-white hover:border-black dark:border-black dark:hover:border-white cursor-pointer'>
                    Home
                </div>
                <div className='border-b-2 border-white hover:border-black dark:border-black dark:hover:border-white cursor-pointer'>
                    Inquire
                </div>
                <div className='border-b-2 border-white hover:border-black dark:border-black dark:hover:border-white cursor-pointer'>
                    Contact
                </div>
                <Socials/>
            </div>
        </nav>
    )
}
export default Nav