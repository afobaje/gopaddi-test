import { useSearchContext } from "@/context/ItemsProvider";
import { ActivitiesItineryIcon, CancelIcon, CaretDown, CaretUp, DurationIcon, LocationIcon, StarIcon } from "../ui/SvgAssets/GeneralAsset";

export function ActivitiesSection(){
     const {activitiesItems}=useSearchContext()
    return <div className='flex rounded-sm bg-[#0054E4] px-3 pb-10 pt-3 flex-col gap-3'>
<div className="flex justify-between">
    <div className="flex gap-2 text-white items-center">
        <span><ActivitiesItineryIcon/></span>
        <span className='font-bold '>Activities</span>
    </div>
    <button className='text-[#0D6EFD] font-semibold rounded-sm cursor-pointer bg-white p-2'>Add Activities</button>
</div>
<div className="flex flex-col gap-2">
    {
        Array.from({length:2}).map((_,index)=><ActivitiesTicketCard key={index}/>)
    }
    {activitiesItems!==undefined&&activitiesItems.length>0? activitiesItems.map((item:any,index:number)=><ActivitiesTicketCard  key={index}/>):null}
        {/* <ActivitiesTicketCard/> */}
    {/* <ActivitiesTicketCard/> */}
</div>
    </div>
}


export function ActivitiesTicketCard(){
    return <div className='flex'>
        <div className="flex gap-2 flex-1 rounded-tl-md rounded-bl-md  bg-white p-3 ">

<div className="flex w-40 h-40">
    <img src="assets/Activities.png" alt="" />
</div>
    <div className="flex flex-1 flex-col">


<div className="flex justify-between">
    <div className="flex gap-1 flex-col">
        <h2 className="font-semibold">The Museum of Modern Art</h2>
        <span className="text-sm text-balance">Works from Van Gogh to Warhol & beyond plus a sculpture <br /> garden, 2 cafes & The modern restaurant</span>
    </div>
    <div className="flex flex-col">
        <span className="font-bold text-2xl text-black">₦123,450.00</span>
        <span  className="text-sm">10:30 AM on Mar 19</span>
      
    </div>
</div>
<div className="flex gap-3 border-b mt-1 border-[#E4E7EC] pb-3">
    <div className="flex items-center text-sm gap-1"><LocationIcon/><span className="text-[#0D6EFD]">Directions</span></div>
    <div className="flex items-center text-sm gap-1"><StarIcon/><span>4.5 (436)</span></div>
    <div className="flex items-center text-sm gap-1"><DurationIcon/><span>1 hour</span></div>
</div>


<div className="flex facilities justify-between py-3 gap-2 text-[#647995] border-b border-[#E4E7EC]">
<div className="flex text-sm items-center">
    <span>What's Included:</span>  <span>Admission to the Empire State Building</span>
        <span className="ml-2 text-[#0D6EFD]">See more</span>
    
</div>
<div className="flex gap-1 items-center">
     <span className='text-white text-xs  leading-tight text-center py-1 rounded-sm px-1 inline-flex bg-[#0A369D]'>Day 1</span>
     <div className="flex flex-col gap-1"><CaretUp/><CaretDown/></div>
</div>
</div>
{/* <div className="flex flight-facilities py-3 gap-2  text-[#647995] border-b border-[#E4E7EC]">
    <span>Facilities:</span>
    <div className="flex w-full justify-between">
<div className="flex gap-3 justify-between">
    <div className='flex items-center gap-1'>
        <PoolIcon/>
        <span>Pool</span>
    </div>
    <div className='flex items-center gap-1'>
        <BarIcon/>
        <span>Bar</span>
    </div>
</div>
    

    <div className="flex gap-3 date">
        <div className="flex gap-1 items-center"><CalendarIcon/><span>Check In: 20-04-2024</span></div>
        <div className="flex gap-1 items-center"><CalendarIcon/><span>Check Out: 29-04-2024</span></div>
    </div>
   
       
</div>
    </div> */}

<div className="flex flight-actions items-center py-2 justify-between">
    <div className="flex items-center gap-3 justify-between"><span className='text-[#0D6EFD]'>Activity Details</span> <span className='text-[#0D6EFD]'>Price Details</span></div>
    <span className='text-[#0D6EFD]'>Edit details</span>
</div>
    </div>
        </div>
        <div className="flex items-center rounded-tr-md rounded-br-md  px-2 bg-[#FBEAE9] "><CancelIcon/></div>
    </div>
}