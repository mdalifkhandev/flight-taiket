import { useState } from "react";
import Flight from "../card/flight/Flight";
import Hotel from "../card/hotel/Hotel";
import Tour from "../card/tour/Tour";
import Visa from "../card/visa/Visa";

type TabItem = {
    label: string;
    component: React.ComponentType;
};

const cardComponents: TabItem[] = [
    { label: "✈ Flight", component: Flight },
    { label: "🏛 Hotel", component: Hotel },
    { label: "🏃🏿‍♂️ Tour", component: Tour },
    { label: "⌨ Visa", component: Visa },
];

const Card = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const ActiveCard = cardComponents[activeIndex].component;


    return (


        <div>
            <div>
                {
                    cardComponents.map((label, index) => {
                        return (
                            <button
                            key={index}
                                onClick={() => setActiveIndex(index)}
                            >{label.label}</button>
                        )
                    })
                }
            </div>

            <ActiveCard />

        </div>


    );
};

export default Card;
