import { useGetSearchedItems } from '@/hooks/useGetSearchedItems'
import { useState } from 'react'
import SelectInput from '../ui/Select'
import { CancelIcon, SearchIcon } from '../ui/SvgAssets/GeneralAsset'
import AppDialog from './AppDialog'
import { useDebouncedSearch } from '@/hooks/useDebouncedSearch'
import { useGetSearchedActivities } from '@/hooks/useGetSearchedActivities'
import { useGetSearchedFlights } from '@/hooks/useGetSearchedFlights'

export default function SearchDialog({ open, close,onAddItem }: Readonly<{ open: boolean, close: (close: boolean) => void,onAddItem: (item: any, type: string) => void; }>) {
  
    
    const [filters, setFilters] = useState<Record<string, string>>({
        location: '',
        
    })
    
    const { searchInput, setSearchInput } = useDebouncedSearch(setFilters);
  
const [selected,setSelected]=useState('Hotels')
//     const {data}=useGetSearchedItems(filters)

// const {data:activitiesData}=useGetSearchedActivities(filters)

const { data: hotelData } = useGetSearchedItems(
  selected === 'Hotels' ? filters : {}
);

const { data: flightData } = useGetSearchedFlights(
  selected === 'Flights' ? filters : {}
);

const { data: eventData } = useGetSearchedActivities(
  selected === 'Events' ? filters : {}
);

// Choose active data source
const results =
  selected === 'Hotels' ? hotelData :
  selected === 'Flights' ? flightData :
  eventData;




   
    function handleClose() {
        close(!open)
    }


function handleSelected(value:string){
    setSelected(value)
    
}


    return (
    <AppDialog open={open}>
         <div className="flex bg-white rounded-md z-50 flex-col h-[60vh] p-2 w-full gap-2 ">   
             <div className="header rounded-tl-md rounded-tr-md justify-between flex bg-white p-3 ">
                    <h2 className='text-2xl'>Search an item</h2>
                    <button className='outline-none cursor-pointer' onClick={handleClose}><CancelIcon/></button>
                </div>
                <div className="flex gap-1">
                    <SelectInput value={selected} onValueChange={handleSelected} items={['Hotels', 'Flights','Events']} />
                    
                <div className="search  flex border rounded-sm gap-1 items-center border-[#D0D5DD] bg-[#F0F2F5] relative">
                                    <span className='text-[#D0D5DD]'><SearchIcon/></span>
                                    <input type="text" placeholder='Search' className=' outline-none ' value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)} />
                                </div>
                                {/* <button className='bg-[#0D6EFD] text-white'><SearchIcon/></button> */}
                </div>
                <div className="flex flex-col gap-2">
                    {results!==undefined&&results.length>0?results?.map((item:any,index:number)=><div className="flex justify-between items-center p-2 border-b border-[#E4E7EC]" key={index}>
                        <p key={index}>{item.label}</p>
                        <button onClick={() => onAddItem(item, selected)} className='bg-[#0D6EFD] text-white px-2 rounded-sm'>Add</button>
                        </div>):null}
                </div>

         </div>

    </AppDialog>
  )
}
