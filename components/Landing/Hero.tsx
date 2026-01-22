import React from 'react'
import { ToIcon } from '../ui/SvgAssets/GeneralAsset'
import clsx from 'clsx'
const heroCardsData=[
    {bgColor:'bg-[#000031]',textColor:'text-white',label:'Activities',actionButton:<button className='mt-2 px-2 py-1 bg-[#0D6EFD] text-white rounded-sm text-sm'>Add Activities</button>},
    {bgColor:'bg-[#E7F0FF]',textColor:'text-black',label:'Hotels',actionButton:<button className='mt-2 px-2 py-1 bg-[#0D6EFD] text-white rounded-sm text-sm'>Add Hotels</button>},
    {bgColor:'bg-[#0D6EFD]',textColor:'text-white',label:'Flights',actionButton:<button className='mt-2 px-2 py-1 bg-white text-[#0D6EFD] rounded-sm text-sm'>Add Flights</button>},
]
export default function Hero() {
  return (
    <div className='flex px-4 gap-3 py-2 bg-white flex-col'>
        <div>
            <img src="/assets/banner.png" alt="" />
        </div>
        <div className="flex gap-1 flex-col">
            <div className="date bg-[#FEF4E6] flex items-center gap-1 py-1 text-[#7A4504] w-fit px-2 text-xs rounded-sm">
                <span>21 March 2024</span>
                <ToIcon/>
                <span>21 April 2024</span>
            </div>
            <h2 className='font-bold text-xl'>Bahamas Family Trip</h2>
            <div className='text-[#676E7E]'>
                <span className='border-r border-[#D0D5DD] mr-1'>New York, United States of America </span>
                <span>Solo Trip</span>
            </div>
        </div>
        <div className="flex gap-2">
{heroCardsData.map((card)=>(
    <HeroCard key={card.label} bgColor={card.bgColor} textColor={card.textColor} label={card.label} actionButton={card.actionButton}/>
))}
        </div>
    </div>
  )
}



export function HeroCard({bgColor,textColor,label,actionButton}:Readonly<{bgColor:string,textColor:string,label:string,actionButton:React.ReactNode}>) {
    return <div className={clsx('flex px-2 w-fit rounded-sm basis-1/4 gap-3 py-2  flex-col',bgColor)}> 
    <h2 className={clsx('font-semibold',textColor)}>{label}</h2>
    <span className={clsx(textColor,'text-sm')}>Build, personalize, and optimize your itineraries with our trip planner.</span>
    {actionButton}
     </div> 
      }