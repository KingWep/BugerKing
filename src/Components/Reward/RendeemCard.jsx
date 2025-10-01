import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RendeemCard({img}) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className="bg-orange-50 shadow-md rounded-lg overflow-hidden" data-aos="zoom-in-up">
                <div>
                    <img src={img} alt="" className="w-full object-cover" />
                </div>
            </div>
        </>
    )
}
