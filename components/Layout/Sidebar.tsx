import React from 'react'
import { ActivitiesIcon, FlightsIcon, HotelsIcon, ImmigrationIcon, MedicalIcon, StudyIcon, VacationIcon, VisaIcon } from '../ui/SvgAssets/SidebarAsset'
import { CaretUpandDownIcon } from '../ui/SvgAssets/GeneralAsset'



const sidebarItems=[
    {label:'Activities',path:'#',icon:<ActivitiesIcon/>},
    {label:'Hotels',path:'#',icon:<HotelsIcon/>},
    {label:'Flights',path:'#',icon:<FlightsIcon/>},
    {label:'Study',path:'#',icon:<StudyIcon/>},
    {label:'Visa',path:'#',icon:<VisaIcon/>},
    {label:'Immigration',path:'#',icon:<ImmigrationIcon/>},
    {label:'Medical',path:'#',icon:<MedicalIcon/>},
    {label:'Vacation',path:'#',icon:<VacationIcon/>},
]
export default function Sidebar() {
  return (
    <aside className='h-screen'>
        <section>
    {sidebarItems.map((item)=>(
    <div key={item.label} className="flex items-center gap-2 px-4 py-3 hover:bg-[#E7F5FF] cursor-pointer rounded-md">
        <span className=''>{item.icon}</span>
        <span className='text-sm font-medium text-[#101828]'>{item.label}</span>
    </div>
))}
        </section>
        <div className='flex bg-[#F0F2F5] my-4 gap-2 p-3 items-center '>
<button className='px-2 text-white rounded-sm bg-[#0D6EFD]'>Go</button>
<span className='text-sm'>Personal Account</span><span><CaretUpandDownIcon /></span>
        </div>
    </aside>
  )
}


