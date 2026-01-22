import { searchUrls } from "@/constants/searchUrls";
import { client } from "@/utils/axios";

export class SearchService {
    static async getSearchedItem( filters: Record<string, string > = {}): Promise<any> {
        try {
            const queryParams = new URLSearchParams(
            
                Object.fromEntries(Object.entries(filters).filter(([_, value]) => value !== undefined && value !== ''))
            );
            console.log(queryParams.toString(),'query params')
            const response = await client.get(searchUrls.search_hotels(queryParams.toString()));
            console.log(response.data,'response data in service')
            return response.data.data;
        } catch (error) {
            console.error(error)
            throw error
        }
    }








    static async getSearchedActivitiesItem( filters: Record<string, string > = {}): Promise<any> {
        try {
            const queryParams = new URLSearchParams(
            
                Object.fromEntries(Object.entries(filters).filter(([_, value]) => value !== undefined && value !== ''))
            );
            console.log(queryParams.toString(),'query params')
            const response = await client.get(searchUrls.attractions_search(queryParams.toString()));
            return response.data.data;
        } catch (error) {
            console.error(error)
            throw error
        }
    }




    static async getSearchedFlights( filters: Record<string, string > = {}): Promise<any> {
        try {
            const queryParams = new URLSearchParams(
            
                Object.fromEntries(Object.entries(filters).filter(([_, value]) => value !== undefined && value !== ''))
            );
            console.log(queryParams.toString(),'query params')
            const response = await client.get(searchUrls.flights_search(queryParams.toString()));
            return response.data.data;
        } catch (error) {
            console.error(error)
            throw error
        }
    }

}