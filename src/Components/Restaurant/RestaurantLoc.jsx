import React from 'react'
import RestaurantCard from './RestaurantCard';

const Locs = [
    { id: 1, name: "Phnom Penh International Airport", operation: "7:00AM-11PM", tel: "+855 96 253 27 36" },
    { id: 2, name: "Burger King Boeung Keng Kang", operation: "8:00AM-11PM", tel: "+855 69 942 752" },
    { id: 3, name: "Burger King Aeon Mall Phnom Penh", operation: "9:00AM-10PM", tel: "+855 16 932 557" },
    { id: 4, name: "Burger King Toul Kork", operation: "8:00AM-10PM", tel: "+855 96 429 96 00" },
    { id: 5, name: "Burger King Siem Reap", operation: "9:00AM-10PM", tel: "+855 70 385 600" },
    { id: 6, name: "Burger King Tep Phan", operation: "9:00AM-10PM", tel: "+855 96 657 91 53" },
    { id: 7, name: "Burger King Aeon Mall Sen Sok", operation: "9:00AM-10PM", tel: "+855 16 932 558" },
    { id: 8, name: "Burger King Furi Mall", operation: "9:00AM-10PM", tel: "+855 16 386 300" },
    { id: 9, name: "Burger King Boeung Snor", operation: "9:00AM-10PM", tel: "+855 10 715 014" },
    { id: 10, name: "Burger King Total Railway Station", operation: "9:00AM-10PM", tel: "+855 69 497 484" },
    { id: 11, name: "Burger King Olympia", operation: "9:00AM-10PM", tel: "+855 96 672 33 18" },
    { id: 12, name: "Burger King Steung Meanchey", operation: "8:00AM-10PM", tel: "+855 96 562 51 08" },
    { id: 13, name: "Burger King Mean Chey Avenue", operation: "9:00AM-10PM", tel: "+855 96 111 222" }
];

export default function RestaurantLoc() {
    return (
        <>
            <div className="md:w-[85%] w-[80%] m-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5">
                {Locs.map((loc) => (
                    <RestaurantCard
                    key={loc.id}
                    name={loc.name}
                    operation={loc.operation}
                    tel={loc.tel}
                    />
                ))}
            </div>
        </>
    )
}
