import React from 'react'
import { prices } from '../../../../../../../Constants/Constants';

const PriceRange = () => {
    return (
        <div>
            <h3 className='text-lg font-bold'>Price</h3>
            {/* <div className='py-1'>
                <input type="search" placeholder='Search' className='border-b-[1px] outline-none focus:border-b-1 border-gray w-[100%] text-sm px-1 py-1' />
            </div> */}
            <div className='py-1 overflow-auto min-h-[10vh]'>
                {
                    prices.map((price, index) => {
                        return (
                            <div key={index} className="flex items-end text-center space-x-3 space-y-1">
                                <input
                                    type="checkbox"
                                    id={`price-${index}`}
                                    className="cursor-pointer w-4 h-4 text-orange-500 border-2 border-orange-500 rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500 checked:text-white"
                                />
                                <label
                                    htmlFor={`price-${index}`}
                                    className="text-md cursor-pointer flex items-center space-x-1"
                                >
                                    <span className='text-sm font-semibold'>{price.from}k - {price.to}k</span>
                                    <span className="text-gray text-xs">(10)</span>
                                </label>
                            </div>
                        );
                    })
                }

                <div className='flex justify-between py-2'>
                    <div>
                        <span className='text-sm font-semibold'>From: </span>
                        <span>
                            <input type="text" maxLength={4} className='border-[1px] outline-none border-gray w-[50px] rounded-md px-1' /> k
                        </span>
                    </div>
                    <div>
                        <span className='text-sm font-semibold'>To: </span>
                        <span>
                            <input type="text" maxLength={4} className='border-[1px] outline-none border-gray w-[50px] rounded-md px-1' /> k
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PriceRange
