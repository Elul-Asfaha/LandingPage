import { useState } from "react"

const Inquire=()=>{
    const [info,setInfo]=useState({
        first: '',
        last: '',
        email: '',
        phone: '',
        details: ''
    })

    const handleInput=(e)=>{
        const {name,value}=e.target
        setInfo({
            ...info,
            [name]: [value]
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(info)
    }
    return(
        <section className="snap-start text-white flex flex-col items-center justify-center min-h-[85vh] md:px-[13%]" id="inquireSection"> 
            <form className="flex flex-col w-[80%] sm:w-[60%] gap-5 md:p-[20px]" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label >First name</label>
                    <input type='text'  name='first' value={info.first} onChange={handleInput} className="outline-none p-1 border border-white text-black dark:text-white border-2"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label>Last name</label>
                    <input type='text' name='last' value={info.last} onChange={handleInput} className="outline-none p-1 border border-white text-black dark:text-white border-2"/>
                </div>
                
                <div className="flex flex-col gap-1">
                    <label>Email</label>
                    <input type='email' name='email' value={info.email} onChange={handleInput} className="outline-none p-1 border border-white text-black dark:text-white border-2"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label>phone number</label>
                    <input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='phone' value={info.phone} onChange={handleInput} className="outline-none p-1 border border-white text-black dark:text-white border-2"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label>what do you need help with?</label>
                    <input type='textarea' name='details' value={info.details} onChange={handleInput} className="outline-none p-1 border border-white text-black dark:text-white border-2"/>
                </div>
                <button className=" text-white font-bold bg-black border-white border-2  py-1 border text-2xl mx-auto w-full md:w-[70%] lg:w-[55%]">
                   Inquire
                </button>
            </form>
        </section>
    )
}
export default Inquire