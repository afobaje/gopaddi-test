"use client"
import React, { createContext, useContext, useState } from 'react'

const SearchContext = createContext<any|null>(null)

export default function SearchNavigationProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [flightItems, setFlightItems] = useState<any[]>([]);
  const [hotelItems, setHotelItems] = useState<any[]>([]);
  const [eventItems, setEventItems] = useState<any[]>([]);
    return (
        <SearchContext.Provider value={{flightItems,hotelItems,eventItems,setFlightItems,setHotelItems,setEventItems}}>
            {children}
        </SearchContext.Provider>
    )
}


export function useSearchContext() {
    const context = useContext(SearchContext)
    if (!context) {
        throw new Error('useSearchContext must be used within SearchNavigationProvider')
    }
    return context;
}