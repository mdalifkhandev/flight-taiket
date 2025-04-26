import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const hotels = [
    {
        name: "Hotel Royal Chittagong",
        location: "Chittagong, Bangladesh",
        code: "CTG",
        price: 120,
        rating: 4.2,
        amenities: ["Wi-Fi", "Breakfast", "AC", "Pool"]
    },
    {
        name: "The Grand Plaza Sylhet",
        location: "Sylhet, Bangladesh",
        code: "SYL",
        price: 95,
        rating: 4.0,
        amenities: ["Wi-Fi", "Parking", "Gym"]
    },
    {
        name: "Hotel Serenity Cox's Bazar",
        location: "Cox's Bazar, Bangladesh",
        code: "CXB",
        price: 110,
        rating: 3.8,
        amenities: ["Wi-Fi", "Room Service", "Restaurant"]
    },
    {
        name: "Sunset Inn Rajshahi",
        location: "Rajshahi, Bangladesh",
        code: "RJH",
        price: 105,
        rating: 4.5,
        amenities: ["Breakfast", "Airport Shuttle", "Wi-Fi"]
    },
    {
        name: "Comfort Stay Khulna",
        location: "Khulna, Bangladesh",
        code: "KHL",
        price: 130,
        rating: 4.7,
        amenities: ["Wi-Fi", "AC", "Rooftop View", "24/7 Support"]
    }
];

const availabailDate = [
    {
        date: "17 may 2025",
    },
    {
        date: '18 may 2025'
    },
    {
        date: '19 may 2025'
    },
    {
        date: '20 may 2025'
    },
    {
        date: '21 may 2025'
    },
    {
        date: '22 may 2025'
    },
    {
        date: '23 may 2025'
    },
    {
        date: '24 may 2025'
    },
]


const Hotel = () => {

    const [hotel, setHotel] = useState()
    const [inDate, setInDate] = useState()
    const [outDate, setOutDate] = useState()

    const selectHotel = hotels.find((hote: any) => hote.location === hotel)
    const selectInDate = availabailDate.find((dates: any) => dates.date === inDate)
    const selectOutDate = availabailDate.find((dates: any) => dates.date === outDate)
    console.log(selectInDate);


    return (
        <div className=" w-full gap-2 rounded flex mb-5 ">
            <div className="w-3/4 rounded bg-white p-5  flex gap-5 justify-between">
                <div>
                    <h1 className="text-2xl p-2">DESTINATION</h1>
                    <h1 className="text-3xl p-2 font-bold text-[#00dd90]">{selectHotel?.location ? selectHotel.location.split(',')[0] : 'CITY'}</h1>

                    <div className="relative w-full m-2 max-w-md">
                        <div className="bg-[#00dd90] absolute inset-y-0 left-0 pl-3 flex items-center rounded-md pointer-events-none">
                            <FontAwesomeIcon icon={faLocationDot} className="text-white pr-2" />
                        </div>
                        <input
                            list="locationSuggestions"
                            onChange={(e: any) => setHotel(e.target.value)}
                            id="fileName"
                            placeholder="Choose a location or upload a file..."
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                        />
                        <datalist id="locationSuggestions">
                            {hotels.map((opt: any) => (
                                <option value={opt.location} key={opt.location}>
                                    {opt.location}
                                </option>
                            ))}
                        </datalist>
                    </div>


                </div>
                <div className="w-full">
                    <h1 className="text-2xl p-2">CHEAK IN</h1>
                    <h1 className="text-3xl p-2 font-bold text-[#00dd90] w-full">{selectInDate ? selectInDate.date : "Date Select"}</h1>

                    <div className="relative w-full m-2 max-w-md">
                        <div className="bg-[#00dd90] absolute inset-y-0 left-0 pl-3 flex items-center rounded-md pointer-events-none">
                            <FontAwesomeIcon icon={faCalendar} className="text-white pr-2" />
                        </div>
                        <input
                            list="cheakInDate"
                            onChange={(e: any) => setInDate(e.target.value)}
                            id="fileName"
                            placeholder="Choose a location or upload a file..."
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                        />
                        <datalist id="cheakInDate">
                            {availabailDate.map((opt: any) => (
                                <option value={opt.date} key={opt.date}>
                                    {opt.date}
                                </option>
                            ))}
                        </datalist>
                    </div>
                </div>
                <div className="w-full">
                    <h1 className="text-2xl p-2">CHEAK OUT</h1>
                    <h1 className="text-3xl p-2 font-bold text-[#00dd90] w-full">{selectOutDate ? selectOutDate.date : "Date Select"}</h1>

                    <div className="relative w-full m-2 max-w-md">
                        <div className="bg-[#00dd90] absolute inset-y-0 left-0 pl-3 flex items-center rounded-md pointer-events-none">
                            <FontAwesomeIcon icon={faCalendar} className="text-white pr-2" />
                        </div>
                        <input
                            list="CheakOutDate"
                            onChange={(e: any) => setOutDate(e.target.value)}
                            id="fileName"
                            placeholder="Choose a location or upload a file..."
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                        />
                        <datalist id="CheakOutDate">
                            {availabailDate.map((opt: any) => (
                                <option value={opt.date} key={opt.date}>
                                    {opt.date}
                                </option>
                            ))}
                        </datalist>
                    </div>
                </div>

            </div>
            <div className="1/4  bg-white relative">
                <h1 className="text-xl text-[#00dd90] m-2 p-2">Guest & Rooms</h1>



                <div className=" max-w-md p-2 m-2 ">

                    <input
                        list="hotels"
                        id="hotelOptions"
                        name="hotelOptions"
                        placeholder="Choose or type a hotel..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00dd90]"
                    />
                    <datalist id="hotels">
                        <option value="Rooms" />
                        <option value="Rooms2" />
                        <option value="Guest" />
                        <option value="Guest2" />
                        <option value="Flat" />
                    </datalist>
                </div>




                <div className="flex justify-between">
                    <button className=" bottom-2 bg-[#00dd90] text-white p-2 m-2  w-full rounded">SEARCH FOR HOTEL</button>

                </div>

            </div>
        </div>
    );
};

export default Hotel;