export default function Reward() {
  return (
    <>
      <div className="w-full h-[100vh] pt-[60px] bg-[url('/img/Reward/BgReward.png')]  bg-center" >
        <div className="w-[90%] m-auto relative">
          <div className="w-full flex justify-center items-center pt-10 pb-16 bg-orange-100 px-5 rounded-b-lg">
            <div className="w-1/2 h-full text-white ">
              <h1 className="text-red-600 font-bold text-[25px]">Crouwn Reward</h1>
              <h1 className="text-orange-400 font-extrabold text-[40px]">Earn</h1>
              <h1 className="text-orange-400 font-extrabold text-[40px]">Crown.</h1>
              <h1 className="text-red-900 font-extrabold text-[35px]">Rendeem Reward.</h1>
            </div>
            <div className="w-1/2 h-full">
              <img src="/img/Reward/menubanner.png" alt="" /></div>
          </div>
          <div className="flex text-orange-400 text-[20px] font-semibold px-5 items-center absolute bottom-0 left-0 bg-red-950 w-full h-[50px] rounded-lg">
            Collect Crown,WIn Your Rewards
          </div>
        </div>
      </div>
    </>
  )
}
