import React from 'react'

export default function Register() {
    return (
        <>
            <form action="" className='lg:w-[450px] w-[90%] m-auto h-auto pb-5 rounded-[20px] px-5 gap-5 overflow-hidden bg-orange-500/70'>
                <div className="flex flex-col items-center">
                    {/* Profile Image */}
                    <div className="w-28 h-28 rounded-full overflow-hidden border-white">
                        <img src="/img/user.png" alt="profile" className="h-full w-full object-cover" />
                    </div>

                    {/* Title */}
                    <h2 className="mt-4 text-white text-xl sm:text-2xl font-bold tracking-wide">Create Account</h2>
                    <p className="text-white/70 text-sm sm:text-base">Join us and enjoy the experience</p>
                </div>
                <div className='w-full gap-5 flex justify-between '>
                    <div className='w-full flex flex-col '>
                        <span className='text-white mt-3 font-medium text-[16px]'>First Name</span>
                        <input type="text" name="" id="" placeholder='First name' className='rounded-[16px] py-2 px-2 w-full  bg-white/20 text-white 
               placeholder-white/70 focus:outline-none focus:ring-2 
               focus:ring-orange-400 ' />
                    </div>
                    <div className='w-full flex flex-col'>
                        <span className='text-white mt-3 font-medium text-[16px]'>Last Name</span>
                        <input type="text" name="" id="" placeholder='Last name' className='rounded-[16px] py-2 px-2 w-full  bg-white/20 text-white 
               placeholder-white/70 focus:outline-none focus:ring-2 
               focus:ring-orange-400 ' />
                    </div>
                </div>
                <div className='w-full flex flex-col'>
                    <span className='text-white mt-3 font-medium text-[16px]'>Email</span>
                    <input type="text" name="" id="" placeholder='example123@gmail.com' className='rounded-[16px] py-2 px-2 w-full  bg-white/20 text-white 
               placeholder-white/70 focus:outline-none focus:ring-2 
               focus:ring-orange-400 ' />
                </div>
                <div className='w-full flex flex-col'>
                    <span className='text-white mt-3 font-medium text-[16px]'>Password</span>
                    <input type="text" name="" id="" placeholder='Password' className='rounded-[16px] py-2 px-2 w-full  bg-white/20 text-white 
               placeholder-white/70 focus:outline-none focus:ring-2 
               focus:ring-orange-400 ' />
                </div>
                <div className='w-full flex flex-col'>
                    <span className='text-white mt-3 font-medium text-[16px]'>Re-enter Password</span>
                    <input type="text" name="" id="" placeholder='Comfirm Password' className='rounded-[16px] py-2 px-2 w-full  bg-white/20 text-white 
               placeholder-white/70 focus:outline-none focus:ring-2 
               focus:ring-orange-400 ' />
                </div>
                {/* Checkbox */}
                <div className="mt-5 flex items-center text-xs sm:text-sm text-white/90">
                    <input type="checkbox" className="w-4 h-4 accent-orange-400" />
                    <span className="ml-2">
                        I accept{" "}
                        <span className="text-orange-300 cursor-pointer hover:underline">Terms of Use</span>
                    </span>
                </div>
                {/* Button */}
                <button className="w-full mt-6 py-3 rounded-[16px] bg-orange-400 hover:bg-orange-500 
                       transition font-semibold text-white text-sm sm:text-base shadow-lg">
                    REGISTER
                </button>
                {/* Switch to Login */}
                <p className="text-white mt-4 text-center text-sm sm:text-base">
                    Already have an account?{" "}
                    <span className="text-yellow-300 cursor-pointer hover:underline">
                        Login
                    </span>
                </p>
            </form>
        </>
    )
}
