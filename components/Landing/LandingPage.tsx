"use client"
import PageLayout from '../Layout/PageLayout'
import Hero from './Hero'
import TripIteneraries from './TripIteneraries'

export default function LandingPage() {
    // const [open,setOpen]=useState(false)
  return (
    <PageLayout>
        <div className="flex   px-2 py-3 flex-col">
<div className="flex flex-col gap-4 bg-white">
        <Hero/>
        <TripIteneraries/>
</div>
{/* <SearchDialog open={open} close={setOpen}     /> */}
        </div>
    </PageLayout>
  )
}
