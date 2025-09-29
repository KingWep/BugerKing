import React from "react";
import BugerCard from "../Home/BugerCard";

const Burger = [
    { id: 1, name: "BBQ Cheeseburger", price: "$6.49", img: "/img/menu/m1.png" },
    { id: 2, name: "Bacon Cheeseburger", price: "$7.29", img: "/img/menu/m2.png" },
    { id: 3, name: "Double Cheeseburger", price: "$8.49", img: "/img/menu/m3.png" },
    { id: 4, name: "Spicy Cheeseburger", price: "$6.99", img: "/img/menu/m4.png" },
    { id: 5, name: "Classic Cheeseburger", price: "$5.99", img: "/img/menu/m5.png" },
    { id: 6, name: "Whopper", price: "$6.40", img: "/img/menu/m6.png" },
    { id: 7, name: "Whopper w/ Cheese", price: "$7.50", img: "/img/menu/m7.png" },
    { id: 8, name: "Double Whopper", price: "$8.40", img: "/img/menu/m8.png" },
    { id: 9, name: "Double Whopper w/ Cheese", price: "$9.10", img: "/img/menu/m9.png" },
    { id: 10, name: "Whopper Meal", price: "$7.80", img: "/img/menu/m10.png" },
    { id: 11, name: "Single BBQ Bacon Cheese XL", price: "$8.15", img: "/img/menu/m11.png" },
    { id: 12, name: "Double BBQ Bacon Cheese XL", price: "$9.15", img: "/img/menu/m12.png" },
    { id: 13, name: "Cheeseburger XL", price: "$6.99", img: "/img/menu/m13.png" },
    { id: 14, name: "BBQ Cheeseburger XL", price: "$7.49", img: "/img/menu/m14.png" },
    { id: 15, name: "Double Whopper® with Cheese", price: "$9.80", img: "/img/menu/m15.png" },
    { id: 16, name: "King CHicken 1Pc", price: "$5.99", img: "/img/menu/m16.png" },
    { id: 17, name: "King CHicken 1Pc", price: "$6.49", img: "/img/menu/m17.png" },
    { id: 18, name: "Spicy Snake Wrap", price: "$8.99", img: "/img/menu/m18.png" },
    { id: 19, name: "Snake Burger XL", price: "$9.49", img: "/img/menu/m19.png" },
    { id: 20, name: "Grilled Snake Fillet", price: "$10.29", img: "/img/menu/m20.png" },
    { id: 21, name: "Snake Nuggets (6 pcs)", price: "$6.49", img: "/img/menu/m21.png" },
    { id: 22, name: "Snake Deluxe Combo", price: "$12.99", img: "/img/menu/m22.png" },
    { id: 23, name: "Coca-Cola", price: "$1.99", img: "/img/menu/m23.png" },
    { id: 24, name: "Sprite", price: "$1.99", img: "/img/menu/m24.png" },
    { id: 25, name: "Fanta Orange", price: "$1.99", img: "/img/menu/m25.png" },
    { id: 26, name: "Iced Tea", price: "$2.49", img: "/img/menu/m26.png" }
];

export default function MBurgerMenu() {
    return (
        <div className="md:w-[70%] w-[80%] m-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
            {Burger.map((burger) => (
                <BugerCard
                    key={burger.id}
                    name={burger.name}
                    price={burger.price}
                    img={burger.img}
                />
            ))}
        </div>
    );
}