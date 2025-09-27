import React from "react";
import BurgerCard from "./BugerCard";

const burgers = [
    { id: 1, name: "Classic Burger", price: "3.99$", img: "/img/home/b1.png" },
    { id: 2, name: "Cheese Burger", price: "4.50$", img: "/img/home/b2.png" },
    { id: 3, name: "Bacon Burger", price: "5.00$", img: "/img/home/b3.png" },
    { id: 4, name: "Veggie Burger", price: "3.50$", img: "/img/home/b4.png" },
    { id: 5, name: "Chicken Burger", price: "4.00$", img: "/img/home/b5.png" },
    { id: 6, name: "BBQ Burger", price: "5.00$", img: "/img/home/b6.png" },
    { id: 7, name: "King Chicken", price: "5.50$", img: "/img/home/b7.png" },
    { id: 8, name: "Snack King", price: "4.75$", img: "/img/home/b8.png" },
    { id: 9, name: "Beverages", price: "4.25$", img: "/img/home/b9.png" },
];

export default function BurgerMenu() {
    return (
        <div className="md:w-[70%] w-[80%] m-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
            {burgers.map((burger) => (
                <BurgerCard
                    key={burger.id}
                    name={burger.name}
                    price={burger.price}
                    img={burger.img}
                />
            ))}
        </div>
    );
}
