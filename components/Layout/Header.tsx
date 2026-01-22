// import Link from 'next/link'
// import { CaretDropdown, CartsIcon, CommissionIcon, CreateIcon, DashboardIcon, HomeIcon, NotificationIcon, SearchIcon, TripIcon, WalletIcon } from '../ui/SvgAssets/GeneralAsset'
// import Logo from '../ui/SvgAssets/Logo'


// const navItems=[
//     {name:'Home',path:'/',icon:<HomeIcon/>},
//     {name:'Dashboard',path:'/dashboard',icon:<DashboardIcon/>},
//     {name:'Wallet',path:'/wallet',icon:<WalletIcon/>},
//     {name:'Plan a trip',path:'/plan-trip',icon:<TripIcon/>},
//     {name:'Commission for Life',path:'/commission-for-life',icon:<CommissionIcon/>},
// ]
// const navActions=[
//     {name:'Notification',path:'/login',icon:<NotificationIcon/>},
//     {name:'Carts',path:'/sign-up',icon:<CartsIcon width={16} height={16} />},
//     {name:'Create',icon:<CreateIcon/>}
// ]
// export default function Header({ onOpenSearch }: { onOpenSearch: () => void }) {
//   return (
//     <header className="pt-2  flex items-center px-6">
//       <div className="container flex mx-auto justify-between w-full py-4">
//         <div className="logo gap-4 flex items-center justify-between">
//             <Link className='' href="/">
//                     <Logo />
//                 </Link>
//                 <button  onClick={onOpenSearch} className="search  flex p-4 rounded-sm gap-1 items-center bg-[#F0F2F5] relative">
//                     <span className=''><SearchIcon/></span>
//                     <span  className='w-40 text-start text-[#647995] outline-none ' >Search</span>
//                 </button>
//         </div>

//         <nav className='flex justify-between gap-2 items-center'>
//             <div className="flex justify-between border-r pr-2 border-[#98A2B3] gap-3">

// {navItems.map((item)=>(
//     <Link key={item.name} href={item.path} className="flex text-[#647995] flex-col gap-1 items-center ">
//         <span className='text-sm'>

//         {item.icon}
//         </span>
//         <span className='text-sm'>{item.name}</span>
//     </Link>
// ))}
//             </div>
//             <div className="flex justify-between gap-3">
//             <button className='bg-[#0D6EFD] cursor-pointer text-white px-2 text-sm rounded-sm'>Subscribe</button>
// {navActions.map((item)=>(
//     <div key={item.name}  className="flex text-[#647995] flex-col gap-1 items-center ">
//         <span className='text-sm'>

//         {item.icon}
//         </span>
//         <span className='text-sm'>{item.name}</span>
//     </div>
// ))}
//             </div>
//             <div className="bg-[#CCEEFB] flex items-center justify-center w-11 h-11 rounded-full">
//                             <span className="font-bold text-lg">DA</span>
//                         </div>
//                         <CaretDropdown/>

//         </nav>
//       </div>
//     </header>
//   )
// }



import Link from 'next/link'
import { useState } from 'react'
import {
  CaretDropdown,
  CartsIcon,
  CommissionIcon,
  CreateIcon,
  DashboardIcon,
  HomeIcon,
  NotificationIcon,
  SearchIcon,
  TripIcon,
  WalletIcon
} from '../ui/SvgAssets/GeneralAsset'
import Logo from '../ui/SvgAssets/Logo'

const navItems = [
  {name:'Home',path:'/',icon:<HomeIcon/>},
  {name:'Dashboard',path:'/dashboard',icon:<DashboardIcon/>},
  {name:'Wallet',path:'/wallet',icon:<WalletIcon/>},
  {name:'Plan a trip',path:'/plan-trip',icon:<TripIcon/>},
  {name:'Commission for Life',path:'/commission-for-life',icon:<CommissionIcon/>},
]

const navActions = [
  {name:'Notification',path:'/login',icon:<NotificationIcon/>},
  {name:'Carts',path:'/sign-up',icon:<CartsIcon width={16} height={16} />},
  {name:'Create',icon:<CreateIcon/>}
]

export default function Header({ onOpenSearch }: { onOpenSearch: () => void }) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="pt-2 w-full  flex items-center px-6">
      <div className="container mx-auto px-4">


        

        
        <div className="flex items-center justify-between py-3">

        

          <div className="logo gap-4 flex items-center justify-between">

          <Link href="/">
            <Logo />
          </Link>

          
          <button 
            onClick={onOpenSearch}
            className="hidden md:flex p-3 rounded-sm gap-2 items-center bg-[#F0F2F5]"
          >
            <SearchIcon/>
            <span className="text-[#647995] w-40 text-left">Search</span>
          </button>
          </div>

          
          <nav className="hidden md:flex items-center gap-6">
            <div className="flex gap-4 border-r pr-4 border-[#98A2B3]">
              {navItems.map(item => (
                <Link key={item.name} href={item.path}
                  className="flex flex-col items-center text-[#647995] text-sm">
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex gap-4 items-center">
              <button className="bg-[#0D6EFD] cursor-pointer text-white px-3 py-1 rounded-sm text-sm">
                Subscribe
              </button>

              {navActions.map(item => (
                <div key={item.name} className="flex flex-col items-center text-[#647995] text-sm">
                  {item.icon}
                  {item.name}
                </div>
              ))}

              <div className="bg-[#CCEEFB] w-10 h-10 rounded-full flex items-center justify-center font-bold">
                DA
              </div>
              <CaretDropdown/>
            </div>
          </nav>

        
          <div className="flex md:hidden items-center gap-3">
            <button onClick={onOpenSearch} className="p-2 bg-[#F0F2F5] rounded">
              <SearchIcon/>
            </button>

            <button onClick={() => setOpenMenu(!openMenu)} className="p-2">
              
              <div className="space-y-1">
                <span className="block w-5 h-0.5 bg-black"></span>
                <span className="block w-5 h-0.5 bg-black"></span>
                <span className="block w-5 h-0.5 bg-black"></span>
              </div>
            </button>
          </div>
        </div>

    
        {openMenu && (
          <div className="md:hidden pb-4 space-y-4 border-t pt-4">

            {navItems.map(item => (
              <Link key={item.name} href={item.path}
                className="flex items-center gap-3 text-[#647995]">
                {item.icon}
                {item.name}
              </Link>
            ))}

            <hr/>

            <button className="bg-[#0D6EFD] text-white px-3 py-2 rounded-sm w-full">
              Subscribe
            </button>

            <div className="flex justify-around pt-2">
              {navActions.map(item => (
                <div key={item.name} className="flex flex-col items-center text-[#647995] text-sm">
                  {item.icon}
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
