import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Filters from './components/Filters/Filters';
import Products from './components/Products/Products';
import Breadcrumb from '../../../Components/Breadcrumb/Breadcrumb';

const CategoryProducts = () => {
  const location = useLocation(); // Access current route information
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("")

  useEffect(() => {
    setUrl(location.pathname); // Update the URL state whenever the path changes
    const categoryName = location.pathname.split("/")[2];
    setCategory(categoryName)

  }, [location.pathname]); // Only run the effect when the pathname changes


  return (
    <div className="w-[100%]" style={{ scrollbarWidth: "none" }}>
      <div className='w-[80%] mx-auto'>
        <Breadcrumb header={category} parent="Categories" child={category} subChild="" />
      </div>
      <div className='w-[80%] mx-auto flex justify-between'>

        <Filters />
        <Products />
      </div>
    </div>
  );
};

export default CategoryProducts;
