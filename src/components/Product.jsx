import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/CartSlice';
import { getProducts } from '../store/ProductSlice';



export const Product = () => {
    
    const dispatch = useDispatch()
    //const {data : products} = useSelector(state => state.products)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        dispatch(getProducts());
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => setProducts(result))
    }, [])

    const addToCart = (product) => {
        dispatch(add(product))

    }
    const cards = products.map(product => (
        <div className='mt-6 grid grid-cols-4'>
            {/* <Card className=''></Card> */}
            <div className='w-[380px] h-[550px] bg-blue-300 m-2 rounded-md p-2'>
                <div className='text-black py-2 m-2'>
                    <img src={product.image} alt='apple' style={{width:200 , height:150}} className='rounded-lg m-12 ' />
                    <p className=' flex items-center justify-center text-xl font-bold'>{product.title} </p>
                    <p className='flex items-center justify-center p-2 m-6 text-l font-semibold'>$: {product.price} </p>
                </div>
                <div className='flex items-center justify-between m-2'>
                    <button className='border-2 border-black m-2 rounded-md p-2' onClick={() => addToCart(product)}> Add to cart </button>
                    <button className='border-2 border-black m-2 rounded-md p-2'> Remove from  cart </button>
                </div>
            </div>
        </div>
    ))

    return (
        <>
            <div className='text-2xl font-bold flex  items-center justify-center py-4 m- 2 bg-gray-400'> Product Dashboard </div>
            <div className='grid grid-cols-4 bg-gray-300'>
                {cards}
            </div>
            {/* {JSON.stringify(products)} */}
        </>
    )
}
