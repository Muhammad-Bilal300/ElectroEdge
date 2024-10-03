import React from 'react'
import Sort from './components/sort/Sort';
import ProductsList from './components/productsList/ProductsList';


const Products = () => {
  return (
    <div className='w-[78%] flex flex-col space-y-2 '>
      <Sort />
      <ProductsList />

    </div>
  )
}

export default Products;
