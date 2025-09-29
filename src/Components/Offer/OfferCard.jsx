import React from 'react'

export default function OfferCard({img, name, describe}) {
  return (
    <>
        <div>
            <div className=''>
                <img src={img} alt={name} className=' object-fit-cover'/>
            </div>
            <div className='flex justify-center items-center flex-col text-center'>
                <h1 className='text-red-950 font-bold lg:text-[28px] text-[22px]'>{name}</h1>
                <p className='text-red-950 font-medium lg:text-[18px] text-[16px]'>{describe}</p>
            </div>
        </div>
    </>
  )
}
