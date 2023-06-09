import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { HashLink as Link } from 'react-router-hash-link';
const Intro=(props)=>{
    return(
        <section  className="snap-start border-white flex flex-col lg:flex-row text-white min-h-[70vh] items-center px-[30px] pb-5" id='homeSection' >
            <div className='flex-1 flex flex-col justify-between text-white px-[2%] gap-5'>
                <h1 className=" text-sm">
                    FOR ECOMMERC AND CONSUMER BRANDS
                </h1>
                <h2 className="text-[55px] font-bold tracking-wide">
                    The Go-To Agency for DTC and ECommerce Marketing
                </h2>
                <div className="p-2 mx-auto min-w-[160px] text-center hover:bg-white hover:text-black cursor-pointer flex justify-center gap-1">
                    <Link to="#inquireSection">
                        Get in Touch <ArrowRightAltIcon/>
                    </Link>
                </div>
            </div>
            <div className='flex-1 py-3 '>
                <p className="max-w-[80%] mx-auto text-lg text-gray-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus architecto optio voluptatibus inventore quasi odit!
                    Porro praesentium quasi voluptatibus. 
                    Id odio inventore atque nisi rem dignissimos natus harum repellendus alias magni rerum quod deserunt illo, 
                    aperiam est. Voluptates ducimus aliquam vel commodi expedita exercitationem maiores obcaecati vitae fugit velit error quisquam aspernatur doloribus, 
                    dolor officiis unde quo officia aut quidem.
                </p>
            </div>
        </section>
    )
}
export default Intro