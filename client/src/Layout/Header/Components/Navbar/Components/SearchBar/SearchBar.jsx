import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className='bg-slate-100 flex text-center py-2 px-4 rounded-md w-[40%]'>
        <input type="text" className='border-none outline-none bg-transparent w-[100%] text-sm ' placeholder='Search Here..' />
        <IoSearch className='text-primary' />
    </div>
  )
}

export default SearchBar