import React from 'react'
import { sortCategories } from '../../../../../../../Constants/Constants';

const Sort = () => {
    return (
        <div className='flex space-x-4 items-start'>
            <p className='font-semibold mt-1'>
                Sort by:
            </p>
            <div className='flex items-start'>
                {
                    sortCategories.map((trend, index) => {
                        return (
                            <div key={index} className="flex items-end text-center space-x-2 space-y-1 ml-5">
                                <input
                                    type="checkbox"
                                    id={`sort-${index}`}
                                    className="w-4 h-4 text-orange-500 border-2 border-orange-500 rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500 checked:text-white"
                                />
                                <label
                                    htmlFor={`sort-${index}`}
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

export default Sort
