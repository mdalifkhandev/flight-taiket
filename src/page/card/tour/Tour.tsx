import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const countries = [
    {
        country: "United States",
        capital: "Washington, D.C.",
    },
    {
        country: "Canada",
        capital: "Ottawa",
    },
    {
        country: "United Kingdom",
        capital: "London",
    },
    {
        country: "Germany",
        capital: "Berlin",
    },
    {
        country: "France",
        capital: "Paris",
    },
    {
        country: "Italy",
        capital: "Rome",
    },
    {
        country: "Australia",
        capital: "Canberra",
    },
    {
        country: "Japan",
        capital: "Tokyo",
    },
    {
        country: "India",
        capital: "New Delhi",
    },
    {
        country: "Brazil",
        capital: "Brasília",
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

const types = [
    "NATIONAL",
    "INTERNATIONAL"
]

const Tour = () => {


    const [country, setCountry] = useState()
    const [date, setDate] = useState()
    const [type, setType] = useState()

    const selectCountry = countries.find((hote: any) => hote.capital === country)
    const selectDate = availabailDate.find((dates: any) => dates.date === date)

    console.log(type);




    return (
        <div className=" w-full gap-2 rounded flex  mb-5 ">
            <div className="w-3/4 rounded bg-white p-5  flex gap-5 justify-between">
                <div className="w-full">
                    <h1 className="text-2xl p-2">DESTINATION TYPE </h1>
                    <h1 className="text-3xl p-2 font-bold text-[#00dd90]">{type ? type : "Select Type"}</h1>

                    <div className="relative w-full m-2 max-w-md">
                        <div className="bg-[#00dd90] absolute inset-y-0 left-0 pl-3 flex items-center rounded-md pointer-events-none">
                            <FontAwesomeIcon icon={faLocationDot} className="text-white pr-2" />
                        </div>
                        <input
                            list="slelctType"
                            onChange={(e: any) => setType(e.target.value)}
                            id="fileName"
                            placeholder="Choose a location or upload a file..."
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                        />
                        <datalist id="slelctType">
                            {types.map((opt) => (
                                <option value={opt} key={opt}>
                                    {opt}
                                </option>
                            ))}
                        </datalist>
                    </div>


                </div>
                <div className="w-full">
                    <h1 className="text-2xl p-2">WHERE ?</h1>
                    <h1 className="text-3xl p-2 font-bold text-[#00dd90] w-full">{selectCountry ? selectCountry.country : "Select Country"}</h1>

                    <div className="relative w-full m-2 max-w-md">
                        <div className="bg-[#00dd90] absolute inset-y-0 left-0 pl-3 flex items-center rounded-md pointer-events-none">
                            <FontAwesomeIcon icon={faLocationDot} className="text-white pr-2" />
                        </div>
                        <input
                            list="selectLocation"
                            onChange={(e: any) => setCountry(e.target.value)}
                            id="fileName"
                            placeholder="Choose a location or upload a file..."
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                        />
                        <datalist id="selectLocation">
                            {countries.map((opt: any) => (
                                <option value={opt.capital} key={opt.capital}>
                                    {opt.country}
                                </option>
                            ))}
                        </datalist>
                    </div>
                </div>
                <div className="w-full">
                    <h1 className="text-2xl p-2">WHEN ?</h1>
                    <h1 className="text-3xl p-2 font-bold text-[#00dd90] w-full">{selectDate ? selectDate?.date : "Select Date"}</h1>

                    <div className="relative w-full m-2 max-w-md">
                        <div className="bg-[#00dd90] absolute inset-y-0 left-0 pl-3 flex items-center rounded-md pointer-events-none">
                            <FontAwesomeIcon icon={faCalendar} className="text-white pr-2" />
                        </div>
                        <input
                            list="selectDate"
                            onChange={(e: any) => setDate(e.target.value)}
                            id="fileName"
                            placeholder="Choose a location or upload a file..."
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                        />
                        <datalist id="selectDate">
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

export default Tour;