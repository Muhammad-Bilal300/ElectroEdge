import React from 'react'
import { brands } from '../../../../../Constants/Constants'

const Filters = () => {
    return (
        <div className='w-[22%] shadow-md shadow-black rounded-md h-[75vh] p-4'>
            <h3 className='text-lg font-bold'>Brands</h3>
            <div className='py-1'>
                {
                    brands.map((brand, index) => {
                        return (
                            <div key={index} className='text-md'>
                                {brand.label}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Filters
