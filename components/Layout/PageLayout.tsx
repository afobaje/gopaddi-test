import { ReactNode, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchDialog from "../Dialog/SearchDialog";
import { useSearchContext } from "@/context/ItemsProvider";

// export default function PageLayout({ children }: Readonly<{ children: ReactNode }>) {
//     return (
//         <div className='flex bg-white w-full flex-col '>
//             <Header />
//             <main className='min-h-screen flex'>
//                 <Sidebar/>
//                 <div className="flex flex-1 bg-[#F0F2F5] gap-2 flex-col max-w-[95%] my-3 mx-auto">
//                     {children}
//                 </div>
//             </main>
//         </div>
//     )
// }




export default function PageLayout({ children }: Readonly<{ children: ReactNode }>) {
    const [searchOpen, setSearchOpen] = useState(false);
    const {  setFlightItems, setHotelItems, setEventItems } = useSearchContext()

     function handleAddItem(item: any, type: string) {
    if (type === 'Flights') setFlightItems((prev:any) => [...prev, item]);
    if (type === 'Hotels') setHotelItems((prev :any)=> [...prev, item]);
    if (type === 'Events') setEventItems((prev:any) => [...prev, item]);
    setSearchOpen(false); // close modal after add
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      <Header onOpenSearch={() => setSearchOpen(true)} />
      <main className="flex flex-1 overflow-hidden">
        <Sidebar />    
        <div className="flex flex-1 flex-col bg-[#F0F2F5] gap-2 my-3 mx-auto max-w-[95%] overflow-y-auto">
          {children}
        </div>
        <SearchDialog open={searchOpen} close={setSearchOpen} onAddItem={handleAddItem} />
      </main>
    </div>
  )
}
