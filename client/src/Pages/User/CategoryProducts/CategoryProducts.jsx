import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Filters from './components/Filters/Filters';
import Products from './components/Products/Products';

const CategoryProducts = () => {
  const location = useLocation(); // Access current route information
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(location.pathname); // Update the URL state whenever the path changes
  }, [location.pathname]); // Only run the effect when the pathname changes

  return (
    <div className="w-[100%]" style={{ scrollbarWidth: "none" }}>
      <div className='w-[80%] mx-auto flex justify-between'>
        <Filters />
        <Products />
      </div>
    </div>
  );
};

export default CategoryProducts;
