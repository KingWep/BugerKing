import React from 'react'

export default function Delivery() {
    return (
        <>
            <div className="w-full lg:h-[400px] h-[20vh] bg-[url('/img/Delivery.png')] bg-cover bg-center">
                <div className='flex h-full w-[90%] md:w-[80%] lg:w-[60%] overflow-hidden m-auto'>
                    <div className='w-1/2 flex justify-center  overflow-hidden'>
                        <img src="img/mobile-phone.png" alt="" className=' object-fit-cover h-full' />
                    </div>
                    <div className='w-1/2 items-center flex flex-col gap-1 justify-center '>
                        <div className='text-center'>
                            <h1 className='text-red-950 font-bold lg:text-[50px] md:text-[25px]  text-[18px]'>Everyday Save</h1>
                            <h1 className='text-red-700 font-bold lg:text-[80px] md:text-[30px]  text-[25px]'>Delivery</h1>
                            <h1 className='text-red-950 font-bold lg:text-[50px] md:text-[25px]  text-[18px]'>Our Perents</h1>
                        </div>
                        <div className='flex lg:gap-2 md:gap-1 gap-1 justify-evenly items-center py-1 md:py-1 lg:px-2 px-1 bg-red-950 md:rounded-[10px] rounded-[8px]'>
                            <a href="https://www.e-gets.com/">
                                <img src="img/e-gets.svg" alt="" />
                            </a>
                            <a href="https://food.grab.com/kh/en/">
                               <img src="img/grab food.svg" alt="" /> 
                            </a>
                            <a href="https://www.foodpanda.com.kh/restaurants/new?lng=104.927487&lat=11.55747&vertical=restaurants">
                               <img src="img/foodpanda.svg" alt="" /> 
                            </a>
                            <a href="https://www.wownow-kh.com/">
                                <img src="img/wownow.svg" alt="" />
                            </a>
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
