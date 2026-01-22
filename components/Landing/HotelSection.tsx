import { useSearchContext } from "@/context/ItemsProvider";
import { BarIcon, BedIcon, CalendarIcon, CancelIcon, HotelIcon, LocationIcon, PoolIcon, StarIcon } from "../ui/SvgAssets/GeneralAsset";

export function HotelSection(){
    const {hotelItems}=useSearchContext()
    return <div className='flex rounded-sm bg-[#344054] px-3 pb-10 pt-3 flex-col gap-3'>
<div className="flex justify-between">
    <div className="flex gap-2 items-center">
        <span><HotelIcon/></span>
        <span className='font-bold text-white'>Hotels</span>
    </div>
    <button className='text-[#1D2433] font-semibold rounded-sm cursor-pointer bg-white p-2'>Add Hotels</button>
</div>
<div className="flex flex-col gap-2">
    {
        Array.from({length:2}).map((_,index)=><HotelTicketCard key={index}/>)
    }
    {hotelItems.map((item:any,index:number)=><HotelTicketCard key={index}/>)}
    {/* <FlightTicketCard/> */}
</div>
    </div>
}


export function HotelTicketCard(){
    return <div className='flex'>
        <div className="flex gap-2 flex-1 rounded-tl-md rounded-bl-md  bg-white p-3 ">

<div className="flex w-40 h-40">
    <img src="assets/Rectangle 3437.png" alt="" />
</div>
    <div className="flex flex-1 flex-col">


<div className="flex  justify-between">
    <div className="flex gap-1 flex-col">
        <h2 className="font-semibold">Riviera Resort, Lekki</h2>
        <span className="text-sm text-balance">18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, <br /> Lekki Phase1</span>
    </div>
    <div className="flex flex-col">
        <span className="font-bold text-2xl text-black">₦123,450.00</span>
        <span className="text-sm">Total Price: NGN 560,000</span>
        <span className="text-sm">1 room x 10 nights incl. taxes</span>
    </div>
</div>
<div className="flex gap-3 border-b pb-3 border-[#E4E7EC]">
    <div className="flex items-center text-sm gap-1"><LocationIcon/><span className="text-[#0D6EFD]">Show in map</span></div>
    <div className="flex items-center text-sm gap-1"><StarIcon/><span>8.5 (436)</span></div>
    <div className="flex items-center text-sm gap-1"><BedIcon/><span>King size room</span></div>
</div>

<div className="flex flight-facilities py-3 gap-2  text-[#647995] border-b border-[#E4E7EC]">
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
    </div>

<div className="flex flight-actions items-center py-2 justify-between">
    <div className="flex items-center gap-3 justify-between"><span className='text-[#0D6EFD]'>Hotel Details</span> <span className='text-[#0D6EFD]'>Price Details</span></div>
    <span className='text-[#0D6EFD]'>Edit details</span>
</div>
    </div>
        </div>
        <div className="flex items-center rounded-tr-md rounded-br-md  px-2 bg-[#FBEAE9] "><CancelIcon/></div>
    </div>
}