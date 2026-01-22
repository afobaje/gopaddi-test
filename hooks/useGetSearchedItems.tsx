// import { CandidateMgtService } from '@/services/candidateMgt.service'
import { SearchService } from '@/services/search.service'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export function useGetSearchedItems(filters:Record<string,string>) {
  const {isPending,data}=useQuery({
    queryKey:['list-hotels',filters],
    queryFn:()=>SearchService.getSearchedItem(filters),
    placeholderData:keepPreviousData
  })
  return {isPending,data}
}



