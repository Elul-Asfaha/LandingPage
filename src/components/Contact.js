const Contact=()=>{
    return(
        <section className="text-white flex flex-col items-center justify-center min-h-[87vh] px-[13%]"> 
            <form className="flex flex-col w-[80%] md:w-[50%] gap-5 p-[20px]">
                <div className="flex flex-col gap-1">
                    <label >First name</label>
                    <input type='text' className="p-1 border border-white text-black dark:text-white border-2"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label>Last name</label>
                    <input type='text' className="p-1 border border-white text-black dark:text-white border-2"/>
                </div>
                
                <div className="flex flex-col gap-1">
                    <label>Email</label>
                    <input type='email' className="p-1 border border-white text-black dark:text-white border-2"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label>phone number</label>
                    <input type='text' className="p-1 border border-white text-black dark:text-white border-2"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label>what do you need help with?</label>
                    <input type='textarea' className="p-1 border border-white text-black dark:text-white border-2"/>
                </div>
                <button className=" text-white font-bold bg-black border-white border-2  border text-2xl">
                    contact us
                </button>
            </form>
        </section>
    )
}
export default Contact