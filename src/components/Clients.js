import imgData from "../images/imgData"

const Clients=()=>{
    const displayImg=imgData.map(items=><img key={imgData.indexOf(items)} src={items.name} alt={items.alt} />)
    return(
        <section className="snap-start text-black bg-white dark:text-white dark:bg-black flex flex-col items-center justify-evenly min-h-[100vh] w-full gap-[40px] py-[5%]">
            <div className="pt-[20px] md:pt-[0]">
                <h5 className="font-black text-2xl lg:text-3xl">CLIENT EXPERIENCE</h5>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-[30px] py-[20px] px-5 md:px-[100px] ">
                {displayImg}
            </div>
        </section>
    )
}
export default Clients