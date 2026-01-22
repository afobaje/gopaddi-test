import config from "@/config";
import axios from "axios";

export const client = axios.create({
    baseURL: config.BASE_URL,
    // timeout:4000,
    headers: {
        Accept: "application/json",
        'X-RapidApi-Key': process.env.NEXT_PUBLIC_API_KEY,
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
    }
});
