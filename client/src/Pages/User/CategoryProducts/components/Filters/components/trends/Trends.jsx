import React from 'react'
import { brands, trends } from '../../../../../../../Constants/Constants';


const Trends = () => {
    return (
        <div>
            <h3 className='text-lg font-bold'>Trends</h3>
            <div className='py-1'>
                <input type="search" placeholder='Search' className='border-b-[1px] outline-none focus:border-b-2 border-gray w-[100%] text-sm px-1 py-1' />
            </div>
            <div className='py-1 overflow-auto min-h-[10vh]'>
                {
                    trends.map((trend, index) => {
                        return (
                            <div key={index} className="flex items-end text-center space-x-3 space-y-1">
                                <input
                                    type="checkbox"
                                    id={`trend-${index}`}
                                    className="cursor-pointer w-4 h-4 text-orange-500 border-2 border-orange-500 rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500 checked:text-white"
                                />
                                <label
                                    htmlFor={`trend-${index}`}
                                    className="text-md cursor-pointer flex items-center space-x-1"
                                >
                                    <span className='text-sm font-semibold'>{trend.label}</span>

                                </label>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    )
}

export default Trends
