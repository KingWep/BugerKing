import OfferCard from "./OfferCard";

const Menu = [
    { id: 1, img: "/img/Offer/o1.png", name: "King Box", describe: "Burger1,King Nuggets 2PCS, Coke(M) King Wings 2PCS, French Fries(M)" },
    { id: 2, img: "/img/Offer/o2.png", name: "Nuggets 10PCS", describe: "The Nuggets, 10 Pieces" },
    { id: 3, img: "/img/Offer/o3.png", name: "Flamin's Hot Deal", describe: "BBQ ChheseBurger,Serve with large soft drink and french fries." }
];
export default function OfferMenu() {
    return (
        <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-10'>
            {Menu.map((me) => (
                <OfferCard
                    key={me.id}
                    img={me.img}
                    name={me.name}
                    describe={me.describe}
                />
            ))}
        </div>
    );
}