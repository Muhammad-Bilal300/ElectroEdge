import React from 'react'

const Breadcrumb = ({ header, parent, child, subChild }) => {
    return (
        <div className='flex justify-between items-center pb-3'>
            <p className='font-bold text-xl'>{header}</p>
            {parent !== "" && <div className='flex '>
                <p className='text-sm font-semibold text-primary'>{parent} /&nbsp;</p>
                {child !== "" && <p className='text-sm font-semibold text-primary'>{child} {subChild !== "" && "/"} &nbsp;</p>}
                {subChild !== "" && <p className='text-sm font-semibold text-primary'>{subChild} / </p>}

                <p className='text-sm font-semibold text-primary'> &gt; &nbsp; </p>
            </div>}

        </div>
    )
}

export default Breadcrumb
