export default function ReawardCard({img, title, description}) {
    return (
        <>
            <div className="bg-white rounded-lg overflow-hidden">
                <div>
                    <img src={img} alt="" className="w-full object-cover" />
                </div>
                <div className='flex flex-col ml-3 pb-3 gap-2 mt-1'>
                    <h1 className='text-red-900 font-bold lg:text-[25px] text-[22px]'>{title}</h1>
                    <p className='text-orange-600 font-bold lg:text-[18px] text-[16px]'>{description}</p>
                </div>
            </div>
        </>
    );
}