import { ActivitiesSection } from './ActivitiesSection'
import FlightSection from './FlightSection'
import { HotelSection } from './HotelSection'

export default function TripIteneraries() {
  return (
    <div className='flex px-4 gap-3 py-2  bg-white flex-col'>
        <div className='flex flex-col gap-0.5'>
            <h2 className='font-semibold text-xl'>Trip itineraries</h2>
            <span className='text-xs'>Your trip itineraries are placed here</span>
        </div>
        <FlightSection/>
        <HotelSection/>
        <ActivitiesSection/>
    </div>
  )
}



