import React from 'react'

const OfferTab = () => {
  return (
    <div className='bg-green-700 w-full '>
      <div className="md:w-[1152px] w-full mx-auto md:h-[150px] h-[300px] flex md:flex-row flex-col md:justify-between md:px-0 px-3 justify-center md:gap-0 gap-7 items-center">
        <div>
          <h2 className='uppercase text-5xl text-white'>purchase data</h2>
          <p className='uppercase text-2xl text-white'>Pre-paid Data Credits</p>
          <p className='uppercase text-2xl text-white'>Get up to 20% Bonus Credit on Data Purchases</p>
        </div>
        <p className='bg-[#13bf47] cursor-pointer text-white md:text-4xl text-2xl font-bold px-24 py-3 rounded'>get 20% bonus</p>
      </div>
    </div>
  )
}

export default OfferTab