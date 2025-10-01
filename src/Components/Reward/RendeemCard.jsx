import React from 'react'

export default function RendeemCard({img}) {
    return (
        <>
            <div className="bg-white rounded-lg overflow-hidden">
                <div>
                    <img src={img} alt="" className="w-full object-cover" />
                </div>
            </div>
        </>
    )
}
