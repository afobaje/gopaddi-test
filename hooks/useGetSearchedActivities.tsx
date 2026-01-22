// import { CandidateMgtService } from '@/services/candidateMgt.service'
import { SearchService } from '@/services/search.service'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export function useGetSearchedActivities(filters:Record<string,string>) {
  const {isPending,data}=useQuery({
    queryKey:['list-activities',filters],
    queryFn:()=>SearchService.getSearchedActivitiesItem(filters),
    placeholderData:keepPreviousData
  })
  return {isPending,data}
}



