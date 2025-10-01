import React from 'react'
import ReawardCard from './ReawardCard';
const RewardCard = [
  { id: 1, title: "1-Purchase 10$ Above", description: "Every purchase of $10 or more earns you one Crown Reward.", img: "/img/Reward/r1.png" },
  { id: 2, title: "2-Get The Stamps", description: "With each order, you will earn a stamp on your crown award.", img: "/img/Reward/r2.png" },
  { id: 3, title: "3-Redeem Rewards", description: "You can swap your Crown Points for a variety of gifts.", img: "/img/Reward/r3.png" }
];

export default function RewardData() {
  return(
    <>
        <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-10'>
            {RewardCard.map((Reward)=>(
                <ReawardCard
                    key={Reward.id}
                    img={Reward.img}
                    title={Reward.title}
                    description={Reward.description}
                />
            ))}
        </div>
    </>
  )
}
