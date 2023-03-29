const Whowehelp=()=>{
     return(
        <section className="min-h-[87vh] bg-gray-100 text-black dark:bg-black dark:text-white px-[13%] flex flex-col justify-center py-[100px] gap-[20px] sm:gap-[40px] md:gap-[60px] lg:gap-[80px]">
            <p className="font-bold text-xl text-gray-700">Who We Help.</p>
            
            <div className="w-full grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div  className="max-w-[400px] bg-black text-white px-4 py-[40px]  rounded">
                    <div className="min-h-[320px] flex flex-col justify-evenly">
                        <h3 className="font-bold text-3xl max-w-[100px]">Ecommerce Brands<span className="text-green-700 text-5xl">.</span></h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Soluta iste,
                            sed vero nobis maxime laborum eos eum maxus officia. Unde?
                        </p>
                    </div>
                </div>
                <div  className="max-w-[400px] bg-black text-white px-4 py-[40px]  rounded">
                    <div  className="min-h-[320px] flex flex-col justify-evenly">
                        <h3 className="font-bold text-3xl max-w-[100px]">Consumer Brands<span className="text-yellow-400 text-5xl">.</span></h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Soluta iste,
                            sed vero nobis maxime laborum eos eum maxus officia. Unde?
                        </p>
                    </div>
                </div>

                <div  className="max-w-[400px] bg-black text-white px-4 py-[40px]  rounded">
                    <div  className="min-h-[320px] flex flex-col justify-evenly">
                        <h3 className="font-bold text-3xl max-w-[100px]">Retail Brands<span className="text-red-700 text-5xl">.</span></h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Soluta iste,
                            sed vero nobis maxime laborum eos eum minus officia. Unde?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Whowehelp