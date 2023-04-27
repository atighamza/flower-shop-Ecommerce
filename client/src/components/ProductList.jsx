import React, { useEffect, useState } from 'react'
import Product from './Product'
import instance from '../axios/axios'


const ProductList = () => {
  const [products , setProducts] = useState([])
  const [sortDown, setSortDown] = useState(false)
  const [sortUp, setSortUp] = useState(false)
  const [currentCategory , setCurrentCategory] = useState('all')



  const getAllProducts =  () =>{
    instance.get('/product')
    .then(res=>{
      console.log(res.data)
      setProducts(res.data)
    })
    .catch(err=>{
      console.log(err.message)
    })
}

 const getProductsByCategory = (category) =>{
  instance.get(`/product/${category}`)
  .then(res=>{
    setProducts(res.data)
  })
  .catch(err=>{
    console.log(err.message)
  })
}

  useEffect(()=>{
    getAllProducts()
  },[]) 

  const handleCategory = (value) =>{
    if (value == 'all'){
      setCurrentCategory('all')
      getAllProducts()
    } else if (value=='wedding_boquet'){
      setCurrentCategory('wedding_boquet')
      getProductsByCategory(value)
    }else if (value=='gift_boquet'){
      setCurrentCategory('gift_boquet')
    getProductsByCategory(value)
    }else{
      setCurrentCategory('flower')
      getProductsByCategory(value)
    }
  }

  const handleChange = (e) =>{
    const value = e.target.value
    handleCategory(value)
    console.log(currentCategory)
  }

  const handleSelectChange = async (e) =>{
    const value = e.target.value
    const oldProducts = products
   
    if(value =='to_high'){
      const newArr = products.sort((a, b) => (a.price < b.price ? 1 : -1)) 
      setSortDown(true); 
      setSortUp(false)
      setProducts(newArr)
      //console.log(newArr)
    } else if(value =='to_low'){
      const newArr = products.sort((a, b) => (a.price > b.price ? 1 : -1)) 
      setSortDown(false); 
      setSortUp(true)
      setProducts(newArr)
    }
    else{
      handleCategory(currentCategory)
    }

  }

  return (
    <div className='flex justify-around mt-[4rem]'>
      <div className='w-[25%] mt-[4rem]'>
        <div className='ml-[20%] text-2xl '>
        <h1 className='mb-4 font-semibold' >Categories</h1>
        <div>
        <input type="radio" id="all" name="fav_language" value='all' className='mr-4'  onChange={handleChange}/>
          <label htmlFor="all">All categories</label>
        </div>
        <div>
        <input type="radio" id="gift_boquet" name="fav_language" value='gift_boquet'  className='mr-4' onChange={handleChange}/>
          <label htmlFor="gift_boquet">Gift Boquets</label>
        </div>
        <div>
        <input type="radio" id="wedding_boquet" name="fav_language" value='wedding_boquet'  className='mr-4' onChange={handleChange}/>
          <label htmlFor="wedding_boquet">Wedding Boquets</label>
        </div>
        <div>
        <input type="radio" id="flower" name="fav_language" value='flower' className='mr-4' onChange={handleChange} />
          <label htmlFor="flower">Flowers</label>
        </div>
        </div>
        <div className='ml-[20%] my-4'>
          <h1 className='mb-4'>Filter</h1>
          <select name="" id="" className='w-[10rem]' onChange={handleSelectChange}>
            <option value="default">Default</option>
            <option value="to_low">Price - High to Low</option>
            <option value="to_high">Price - Low to High</option>
          </select>
        </div>

      </div>
      <div className='w-full'>
        <div className='grid justify-items-center gap-y-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:mx-20 xl:mx-32  mb-[2rem] '>
          {
            products.map(product => (
              <Product key={product._id}
              id={product._id} 
              name={product.name} 
              description={product.description}
              price={product.price}
              imgLink={product.image}
              />
            ))
          }
        </div>
        </div>
    </div>
  )
}

export default ProductList
