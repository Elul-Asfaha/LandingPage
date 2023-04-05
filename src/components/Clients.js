import Logitech from '../images/logitech_white.svg'
import Chargebee from '../images/Chargebee-logotype.svg'
import abb from '../images/logo_abb_white.svg'
import lj from '../images/logo_lj_white.svg'
import { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Clients=()=>{

    const [slidePos,setSlidePos]=useState(0)
    const handleLeft=()=>{
        setSlidePos(item=>(item>=1)?item-1:item=3)
    }
    const handleRight=()=>{
        setSlidePos(item=>(item<=2)?item+1:item=0)
    }
    return(
        <section  className="snap-start text-white items-center justify-center min-h-[85vh] w-100 relative overflow-hidden">
            <div className='flex flex-row w-100 duration-500' style={{transform: `translateX(-${slidePos*100}%)`}}>
             
                <div className="min-w-full flex flex-col md:flex-row p-[10%] gap-5 items-center">
                    <div className="flex-1">
                        <img src={Logitech} alt="" className='min-h-full'/>
                    </div>
                    <div className="flex-1">
                        <p className="mb-5 text-4xl">
                            "Working in digital marketing for over 12 years, I can confidently say that Webprofits has been one of the more forward-thinking, strategic partners I’ve worked with.
                        </p>
                            
                        <p>
                            Their understanding of the digital landscape and focus on consumer centricity has helped us drive our Logitech EMEA & AP digital transformation, with solid integration into our business objectives and prioritized focus on paid media to drive impact. We’ve been able to go beyond just looking at “clicks and CPMs” but truly understand the value of digital in our businesses and the necessity of paid media’ impact to aid in driving results."
                        </p>
                        <h2 className="font-bold my-5">
                            REAGAN FREYER
                        </h2>
                        <p className="text-gray-500/75 font-bold">
                            Director Of Marketing & Innovations • Logitech EMEA
                        </p>
                    </div>
                </div>

                <div className="min-w-full flex flex-col md:flex-row p-[10%] gap-5 items-center">
                    <div className='flex-1'>
                        <img src={lj} alt="" className='min-h-full'/>
                    </div>
                    <div className='flex-1'>
                        <p className="pb-5 text-4xl">
                            "We've been working with Webprofits for coming up to 2 years now and we've seen consistent growth across the board.
                        </p>
                       
                        <p>
                            From strategic advice and direction, through to tactical knowledge and execution, the team have partnered with the LJ Hooker group to level up our existing strategy, from standalone, seasonal campaigns, to growth-focused, performance based campaigns that have helped us to understand and unlock the potential of digital across our network, and more recently WIN the Best Marketing & Digital Campaign trophy in our industry, at the REB Awards 2020."                    </p>
                        <h2 className="font-bold my-5">
                            JAMES MCGREGOR
                        </h2>
                        <p className="text-gray-500/90 font-bold">
                            Head of Marketing Services, LJ Hooker
                        </p>
                    </div>
                </div>

                <div className="min-w-full flex flex-col md:flex-row p-[10%] gap-5 items-center">
                    <div className='flex-1'>
                        <img src={abb} alt="" className='min-h-full'/>
                    </div>
                    <div className='flex-1'>
                        <p className="pb-5 text-4xl">
                            "At the beginning of our partnership with Webprofits our revenue was in the vicinity of $20 - $25.5 million.
                        </p>
                            
                        <p>
                            This financial year we're actually on track to hit $50 million - so we've almost doubled the size of the company in twelve months and in a very competitive environment. The passion and dedication that they brought to our business, I hadn't really seen before. It didn't feel like working with another supplier, we are absolutely marketing partners. Their experience, the talent and breadth of the team they can offer has been a massive benefit to our business."
                        </p>
                        <h2 className="font-bold my-5">
                        MATTHEW KUSI-APPAUH
                        </h2>
                        <p className="text-gray-500/90 font-bold">
                            Chief Strategy Officer, Aussie Broadband
                        </p>
                    </div>
                </div>

                <div className="min-w-full flex flex-col md:flex-row p-[10%] gap-5 items-center">

                    <div className='flex-1'>
                        <img src={Chargebee} alt="" className='min-h-full'/>
                    </div>
                    <div className='flex-1'>
                        <p className="pb-5 text-4xl">
                            "We have a significant customer base in the US and replicating that success in ANZ was critical to our next phase of growth.
                        </p>
                            
                        <p>
                            With Webprofits we got a partner who understood the pulse of the ANZ market. Their enterprise GTM strategy was extensive and helped us break inertia. Our internal teams got a solid foundation to crack new deals."
                        </p>
                        <h2 className="font-bold my-5">
                            VIKRAM BHASKARAN
                        </h2>
                        <p className="text-gray-500/90 font-bold">
                            Senior Director, Marketing, Chargebee
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="absolute inset-0 flex text-white space-betwee justify-between items-center px-5">
                <div onClick={handleLeft} className='cursor-pointer'>
                    <KeyboardArrowLeftIcon/>
                </div>
                <div onClick={handleRight} className='cursor-pointer'>
                    <KeyboardArrowRightIcon/>
                </div>
            </div>
            <div className='flex gap-1 justify-center absolute bottom-0 left-0 right-0'>
                <div className="bg-white py-1 px-[.4rem] cursor-pointer" onClick={()=>setSlidePos(0)} style={{backgroundColor: slidePos===0? 'gray': 'white'}} />
                <div className="bg-white py-1 px-[.4rem] cursor-pointer" onClick={()=>setSlidePos(1)} style={{backgroundColor: slidePos===1? 'gray': 'white'}}/>
                <div className="bg-white py-1 px-[.4rem] cursor-pointer" onClick={()=>setSlidePos(2)} style={{backgroundColor: slidePos===2? 'gray': 'white'}}/>
                <div className="bg-white py-1 px-[.4rem] cursor-pointer" onClick={()=>setSlidePos(3)} style={{backgroundColor: slidePos===3? 'gray': 'white'}}/>
            </div>

        </section>
    )
}
export default Clients