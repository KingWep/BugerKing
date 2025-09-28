import React from "react";

export default function BugerCard({ name, price, img }) {
    return (
        <div className=" bg-orange-100 rounded-tr-[50px] rounded-bl-[50px] rounded-br-[5px] rounded-tl-[5px] shadow-lg overflow-hidden relative group ">

            {/* Burger Image */}
            <div className=" m-auto w-[90%] lg:h-[250px] md:h-[200px] h-[250px] flex justify-center items-end relative z-20">
                <img src={img} alt={name}
                    className="h-full w-auto object-contain"
                />
            </div>

            {/* Bottom Section */}
            <div className="relative rounded-tr-[40px] overflow-hidden bg-orange-400">

                {/* Background fill full area */}
                <div className="absolute inset-0 bg-red-600 
                  translate-y-full group-hover:translate-y-0
                  transition-transform duration-500 ease-in-out z-0"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center py-6 px-4 ">
                    <h2 className="text-xl font-bold text-red-950 transition-colors duration-300 lg:duration-500 group-hover:text-white">
                        {name}
                    </h2>
                    <p className="text-red-600 font-serif text-[20px] mt-1 transition-colors duration-500 group-hover:text-gray-200">
                        {price}
                    </p>

                    <button className="mt-5 bg-red-600 text-white font-semibold py-2 px-6 rounded-full 
                       transition-colors duration-500 hover:bg-white hover:text-red-600">
                        ORDER NOW
                    </button>
                </div>
            </div>

        </div>
    );
}