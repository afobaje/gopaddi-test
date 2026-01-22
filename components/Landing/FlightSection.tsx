import { useSearchContext } from "@/context/ItemsProvider"
import { CancelIcon, DividerDotIcon, EntertainmentIcon, FlightComingIcon, FlightDividerIcon, FlightGoingIcon,  ItineryFlightIcon, MealIcon, NairaIcon, USBIcon } from "../ui/SvgAssets/GeneralAsset"
import { ImmigrationIcon } from "../ui/SvgAssets/SidebarAsset"

export default function FlightSection(){
    const {flightItems}=useSearchContext()
    return <div className='flex rounded-sm bg-[#F0F2F5] px-3 pt-3 pb-10 flex-col gap-3'>
<div className="flex justify-between">
    <div className="flex gap-2 items-center">
        <span><ItineryFlightIcon/></span>
        <span className='font-bold'>Flights</span>
    </div>
    <button className='text-[#0D6EFD] font-semibold rounded-sm cursor-pointer bg-white p-2'>Add Flights</button>
</div>
<div className="flex flex-col gap-2">
    {
        Array.from({length:2}).map((_,index)=><FlightTicketCard key={index}/>)
    }
    {flightItems.map((item:any,index:number)=><FlightTicketCard item={item} key={index}/>)}
    {/* <FlightTicketCard/> */}
</div>
    </div>
}



export function FlightTicketCard({item}:{item?:any}){
    return <div className='flex'>
        <div className="flex flex-col flex-1 rounded-tl-md rounded-bl-md  bg-white p-3 ">

<div className="flex w-full border-b pb-2 border-[#E4E7EC] justify-between  flight-details">
<div className="flex flex-col gap-1">
    <span className='font-semibold'>American Airlines</span>
    <div className="flex items-center gap-2">
        <span className='text-sm'>AA-829</span>
        <span><DividerDotIcon/></span>
        <span className='text-white text-xs py-1 text-center rounded-sm px-2 bg-[#0A369D]'>First Class</span>
    </div>
</div>

<div className="flex justify-between gap-4">
    <div className="time flex flex-col items-center">
        <span className='font-semibold text-lg'>08:35</span>
        <span className='text-xs'>Sun, 20 Aug</span>
    </div>
    <div className="flex gap-1 flex-col">
        <div className="flex justify-between">
            <FlightGoingIcon/>
            <span className='text-sm text-[#676E7E]'>Duration: 1h 45m</span>
            <FlightComingIcon/>
        </div>

<FlightDividerIcon/>
         <div className="flex justify-between">
            <span className='font-semibold text-sm'>LOS</span>
            <span className='text-sm text-[#676E7E]'>Direct</span>
            <span className='font-semibold text-sm'>SIN</span>
        </div>
        
    </div>
    <div className="time flex flex-col items-center">
        <span className='font-semibold text-lg'>08:35</span>
        <span className='text-xs'>Sun, 20 Aug</span>
    </div>
</div>


<div className="flex text-black">
<NairaIcon/>
<span className="font-bold text-2xl">123,450.00</span>
</div>



</div>
<div className="flex flight-facilities py-3  text-[#647995] border-b border-[#E4E7EC]">
    <span>Facilities:</span>
    <div className="flex  w-full justify-evenly">

    <div className='flex items-center gap-1'>
        <ImmigrationIcon/>
        <span>Baggage: 20kg, Cabin Baggage 8kg</span>
    </div>
    <div className='flex items-center gap-1'>
        <EntertainmentIcon/>
        <span>In flight entertainment</span>
    </div>
    <div className='flex items-center gap-1'>
        <MealIcon/>
        <span>In flight meal</span></div>
        <div className='flex items-center gap-1'>
            <USBIcon/>
            <span>USB Port</span></div>
</div>
    </div>
<div className="flex flight-actions items-center py-2 justify-between">
    <div className="flex items-center gap-3 justify-between"><span className='text-[#0D6EFD]'>Flight Details</span> <span className='text-[#0D6EFD]'>Price Details</span></div>
    <span className='text-[#0D6EFD]'>Edit details</span>
</div>
        </div>
        <div className="flex items-center rounded-tr-md rounded-br-md  px-2 bg-[#FBEAE9] "><CancelIcon/></div>
    </div>
}