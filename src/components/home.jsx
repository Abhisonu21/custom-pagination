import React, { useEffect, useMemo, useState } from 'react'
import { products } from '../data/productsData'
import Pagination from './pagination'

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);
    const [inputValue, setInputValue] = useState();
    const lastPage = Math.ceil(products.length / pageSize);
    
    const currentProductData = useMemo(()=>{
        const lastPageIndex = pageSize * currentPage;
        const firstPageIndex = lastPageIndex - pageSize;
        return products.slice(firstPageIndex, lastPageIndex);
    },[currentPage, pageSize]);
    console.log(currentProductData);
   
  return (
    <>
        <div className="container">
            {
                products && (
                    <>
                        <div className="products">
                            {
                                currentProductData?.map((prod) => {
                                    return(
                                        <div className= 'product__single' key= {prod.id}>
                                            <img src= {prod.thumbnail} alt={prod.title} />
                                            <span>{prod.title}</span><br/>
                                            <span>Rs. {prod.price}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }
            <Pagination 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} 
                lastPage={lastPage} 
                fixPages={[6, 10, 15, 60, 100]} 
                skip maxNumber={11} 
                pageSize={pageSize} 
                setPageSize={setPageSize} /> 
        </div>
    </>
  )
}

export default Home
