import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Socials=()=>{
    return(
        <div className='flex p-5 gap-2 md:gap-5 '>
            <a href='https://facebook.com' target='_blank' rel='noreferrer'>
                <FacebookIcon  style={{fontSize: '35px'}}/>
            </a>
            <a href='https://linkedin.com' target="_blank" rel='noreferrer'>
                <LinkedInIcon  style={{fontSize: '35px'}}/>
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                <TwitterIcon  style={{fontSize: '35px'}}/>
            </a>
            <a href='https://instagram.com' target="_blank" rel='noreferrer'>
                <InstagramIcon  style={{fontSize: '35px'}}/>
            </a>
            <a href='https://youtube.com' target="_blank" rel='noreferrer'>
                <YouTubeIcon  style={{fontSize: '35px'}}/>
            </a>
        </div>
    )
}
export default Socials