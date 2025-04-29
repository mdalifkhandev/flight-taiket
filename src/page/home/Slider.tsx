import { useEffect, useState } from "react";

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
        "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
        "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
        "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 4000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [items.length]);

    return (
        <div>
            <div className="carousel w-full relative">
                {items.map((src, index) => (
                    <div
                        key={index}
                        className={`carousel-item w-full ${
                            index === activeIndex ? "block" : "hidden"
                        }`}
                    >
                        <img src={src} className="w-full rounded-lg" />
                        {/* Buttons positioned over the image */}
                        <div className="absolute right-0 bottom-0 flex gap-2 p-2">
                            {items.map((_, btnIndex) => (
                                <button
                                    key={btnIndex}
                                    onClick={() => setActiveIndex(btnIndex)}
                                    className={`btn btn-xs bg-[#00dd90] ${
                                        btnIndex === activeIndex ? "btn-active bg-black" : ""
                                    }`}
                                >
                                    {btnIndex + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;