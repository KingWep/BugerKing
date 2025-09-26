import React from "react";

export default function Login({ onSwitchToRegister }) {
  return (
    <>
      <form className='lg:w-[450px] md:w-[400px] w-[300px] m-auto h-auto rounded-[20px] gap-5 overflow-hidden bg-orange-500/80'>
        <div className="flex flex-col justify-center items-center p-6">
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden">
            <img src="/img/user.png" alt="profile" className="h-full w-full object-cover" />
          </div>

          <h2 className="mt-4 text-center text-white text-xl sm:text-2xl font-bold">
            Welcome Back
          </h2>
          <p className="text-center text-white/70 text-sm sm:text-base">Login to continue</p>

          {/* Email */}
          <input
            type="email"
            placeholder="Email ID"
            className="mt-4 rounded-[14px] py-2 px-2 w-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="mt-4 rounded-[14px] py-2 px-2 w-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Button */}
          <button
            type="button"
            className="mt-6 w-full bg-orange-400 hover:bg-orange-500 transition 
                      text-white py-3 rounded-xl font-semibold text-sm sm:text-base shadow-md"
          >
            LOGIN
          </button>

          {/* Forgot Password */}
          <span className="mt-3 text-center italic cursor-pointer text-white/80 text-xs sm:text-sm hover:underline">
            Forgot Password?
          </span>

          {/* Switch to Register */}
          <p className="text-white mt-5 text-center text-sm sm:text-base">
            Don’t have an account?{" "}
            <span
              onClick={onSwitchToRegister}
              className="text-yellow-300 cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>
        </div>
      </form>
    </>
  );
}

