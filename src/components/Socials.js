import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Socials=()=>{
    return(
        <div className='flex p-5 gap-2 md:gap-5 '>
            <a href='#.html'>
                <FacebookIcon  style={{fontSize: '35px'}}/>
            </a>
            <a href='#.html'>
                <LinkedInIcon  style={{fontSize: '35px'}}/>
            </a>
            <a href='#.html'>
                <TwitterIcon  style={{fontSize: '35px'}}/>
            </a>
            <a href='#.html'>
                <InstagramIcon  style={{fontSize: '35px'}}/>
            </a>
            <a href='#.html'>
                <YouTubeIcon  style={{fontSize: '35px'}}/>
            </a>
        </div>
    )
}
export default Socials