import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/CartSlice';

export const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart);
  console.log("chulbul")
  console.log(products)
  const removeToCart = (id) => {
    dispatch(remove(id))

  }
  //console.log(products)
  const cards = products.map(product => (
    <div className='mt-6 grid grid-cols-4'>
        {/* <Card className=''></Card> */}
        <div className='w-[380px] h-[550px] bg-blue-300 m-2 rounded-md p-2'>
            <div className='text-black py-2 m-2'>
                <img src={product.image} alt='image' style={{width:200 , height:150}} className='rounded-lg m-12 ' />
                <p className=' flex items-center justify-center text-xl font-bold'>{product.title} </p>
                <p className='flex items-center justify-center p-2 m-6 text-l font-semibold'>$: {product.price} </p>
            </div>
            <div className='flex items-center justify-between m-2'>
                {/* <button className='border-2 border-black m-2 rounded-md p-2' onClick={() => addToCart(product)}> Add to cart </button> */}
                <button className='border-2 border-black m-12 rounded-md p-2' onClick={() => removeToCart(product.id)}> Remove from  cart </button>
            </div>
        </div>
    </div>
))
  
  return (
    <div className='grid grid-cols-4 bg-gray-300 rounded-lg' >
      {cards}
    </div>
  )
}
