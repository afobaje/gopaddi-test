// import { CandidateMgtService } from '@/services/candidateMgt.service'
import { SearchService } from '@/services/search.service'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export function useGetSearchedFlights(filters:Record<string,string>) {
  const {isPending,data}=useQuery({
    queryKey:['list-flights',filters],
    queryFn:()=>SearchService.getSearchedFlights(filters),
    placeholderData:keepPreviousData
  })
  return {isPending,data}
}



