import React from 'react'

const ProductsList = () => {
    const products = [
        { name: "HP Elitebook 1" },
        { name: "HP Elitebook 2" },
        { name: "HP Elitebook 3" },
        { name: "HP Elitebook 4" },
        { name: "HP Elitebook 5" },
        { name: "HP Elitebook 6" },
        { name: "HP Elitebook 7" },
        { name: "HP Elitebook 8" },
        { name: "HP Elitebook 9" },
        { name: "HP Elitebook 10" },
    ]
    return (
        <div className='flex flex-wrap '>
            {
                products.map((product, index) => (
                    <div className='w-[30%] h-[50vh] shadow-md shadow-gray rounded-md mb-8 mr-6'>

                    </div>
                ))
            }
        </div>
    )
}

export default ProductsList
