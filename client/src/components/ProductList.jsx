import React from 'react'
import Product from './Product'
const ProductList = () => {
  return (

    <div className=''>
        <div className='grid justify-items-center gap-y-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:mx-20 xl:mx-48 '>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
  )
}

export default ProductList
