import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Intro=()=>{
    return(
        <section  className="border-white flex flex-col lg:flex-row text-white min-h-[70vh] items-center px-[10%] ">
            <div className='flex-1 flex flex-col justify-between text-white px-[10%] gap-5'>
                <h1 className=" text-sm">
                    FOR ECOMMERC AND CONSUMER BRANDS
                </h1>
                <h2 className="text-4xl font-bold">
                    The Go-To Agency for DTC and ECommerce Marketing
                </h2>
                <div className="p-2 mx-auto w-[140px] text-center hover:bg-white hover:text-black cursor-pointer flex justify-center gap-1">
                    Get in Touch <ArrowRightAltIcon/>
                </div>
            </div>
            <p className="flex-1 py-5 text-lg text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus architecto optio voluptatibus inventore quasi odit!
                Porro praesentium quasi voluptatibus. 
                Id odio inventore atque nisi rem dignissimos natus harum repellendus alias magni rerum quod deserunt illo, 
                aperiam est. Voluptates ducimus aliquam vel commodi expedita exercitationem maiores obcaecati vitae fugit velit error quisquam aspernatur doloribus, 
                dolor officiis unde quo officia aut quidem.
            </p>
        </section>
    )
}
export default Intro