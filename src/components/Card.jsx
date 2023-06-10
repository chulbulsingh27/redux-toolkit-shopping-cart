import React from 'react'

export const Card = () => {
    return (
        <div className='w-[450px] h-[550px] bg-blue-300 m-2 rounded-md p-2'>
            <div className='text-black py-2 m-4'>
                <img src='https://images.unsplash.com/photo-1512354739413-60f30ea4e0ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='image' width={395} height={80} className='rounded-lg'/>
                <p className=' flex items-center justify-center text-xl font-bold'>Card title </p>
                <p className='flex items-center justify-center p-2 m-6 text-l font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, reprehenderit. </p>
            </div>
            <div className='flex items-center justify-between m-2'>
                <button className='border-2 border-black m-2 rounded-md p-2'> Add to cart </button>
                <button className='border-2 border-black m-2 rounded-md p-2'> Remove from  cart </button>
            </div>
        </div>
    )
}
