import React from 'react'
import RendeemCard from './RendeemCard'

const Rendeem = [
    { id: 1, img: "/img/Reward/re1.png"},
    { id: 2, img: "/img/Reward/re2.png"},
    { id: 3, img: "/img/Reward/re3.png"},
    { id: 4, img: "/img/Reward/re4.png"},
    { id: 5, img: "/img/Reward/re5.png"},
];
export default function RendeemReward() {
    return (
        <>
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-10'>
                {Rendeem.map((Ren) => (
                    <RendeemCard
                        key={Ren.id}
                        img={Ren.img}
                    />
                ))}
            </div>
        </>
    );
}
