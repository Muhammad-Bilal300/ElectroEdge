import React from 'react'
import Brands from './components/brands/Brands'
import PriceRange from './components/priceRange/PriceRange'
import Trends from './components/trends/Trends'

const Filters = () => {
    return (
        <div className='w-[20%] shadow-md shadow-black rounded-md p-4 flex flex-col space-y-2 min-h-[80vh] overflow-auto'>
            <PriceRange />
            <Brands />
            <Trends />
        </div>
    )
}

export default Filters
