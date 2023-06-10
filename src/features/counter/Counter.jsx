import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './CounterSlice'



export const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const [incrementAmount,setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset())
    }
    const dispatch = useDispatch();
    return (
        <div className=''>
            <p className='teact-xl font-bold bg-blue-500 m-12 py-3 rounded-md p-3'>count : {count}</p>
            <div className='space-x-8'>
                <button className='border-2 border-black bg-blue-400 rounded-md p-2 m-4' onClick={() => dispatch(increment())}>INCR</button>
                <button className='border-2 border-black bg-blue-400 rounded-md p-2 m-4' onClick={() => dispatch(decrement())}>DECR</button>
            </div>
            <input className='border-2 border-black bg-blue-400 text-black rounded-md m-6 p-4' type="text" value={incrementAmount} onChange = {(e) => setIncrementAmount(e.target.value)}/>
            <div>
                <button className='border-2 border-black bg-green-400 rounded-md p-3 m-4' onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button className='border-2 border-black bg-violet-600 rounded-md p-3 m-4' onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    )
}
