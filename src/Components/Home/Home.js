import React, { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0);
  const updateCount = (result) => (result) ? setCount(count+1) : setCount(count-1);
  return (
    <>
      <h1 className='text-5xl font-bold mt-8 my-5'>Counter App</h1>
      <div>
          <h1 className='text-5xl my-4'>{count}</h1>
          <div className='d-flex my-7'>
              <button onClick={() => updateCount(false)} className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-blue-700 hover:border-blue-600 dark:focus:ring-blue-700'>Decrement</button>
              <button onClick={() => updateCount(true)} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Increment</button>
          </div>
      </div>
    </>
  )
}

export default Home