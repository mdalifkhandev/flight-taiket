import { faLocationDot, faGlobe } from "@fortawesome/free-solid-svg-icons";
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


const visa = [
    'Torist',
    'Madical',
    'Education',
    'Business',
    'Shopping',
    'Work',
]




const Visa = () => {

    const [country, setCountry] = useState()
    const [visaType, setVisaType] = useState()

    const selectCountry = countries.find((hote: any) => hote.capital === country)






    return (
        <div className=" w-full gap-2 rounded flex  mb-5 ">
            <div className=" rounded bg-white p-5 w-[900px] flex gap-5 justify-evenly">
                <div className="w-full">
                    <h1 className="text-2xl p-2">DESTINATION CITY OR COUNTRY </h1>
                    <h1 className="text-3xl p-2 font-bold text-[#00dd90]">{selectCountry ? selectCountry.country : "Select Type"}</h1>

                    <div className="relative w-full m-2 max-w-md">
                        <div className="bg-[#00dd90] absolute inset-y-0 left-0 pl-3 flex items-center rounded-md pointer-events-none">
                            <FontAwesomeIcon icon={faGlobe} className="text-white pr-2" />
                        </div>
                        <input
                            list="slelctType"
                            onChange={(e: any) => setCountry(e.target.value)}
                            id="fileName"
                            placeholder="Choose a location or upload a file..."
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                        />
                        <datalist id="slelctType">
                            {countries.map((opt) => (
                                <option value={opt.capital} key={opt.country}>
                                    {opt.country}
                                </option>
                            ))}
                        </datalist>
                    </div>


                </div>

                <div className="w-full">
                    <h1 className="text-2xl p-2">SELECT VISA TYPE</h1>
                    <h1 className="text-3xl p-2 font-bold text-[#00dd90] w-full">{visaType ? visaType : "Select Visa"}</h1>

                    <div className="relative w-full m-2 max-w-md">
                        <div className="bg-[#00dd90] absolute inset-y-0 left-0 pl-3 flex items-center rounded-md pointer-events-none">
                            <FontAwesomeIcon icon={faLocationDot} className="text-white pr-2" />
                        </div>
                        <input
                            list="selectDate"
                            onChange={(e: any) => setVisaType(e.target.value)}
                            id="fileName"
                            placeholder="Choose a location or upload a file..."
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                        />
                        <datalist id="selectDate">
                            {visa.map((opt: any) => (
                                <option value={opt} key={opt}>
                                    {opt}
                                </option>
                            ))}
                        </datalist>
                    </div>
                </div>

            </div>
            <div className="w-1/4  bg-white rounded">







                <div className="flex justify-between mt-40">
                    <button className="  bg-[#00dd90] text-white p-2 m-2  w-full rounded">SEARCH FOR HOTEL</button>

                </div>

            </div>
        </div>
    );
};

export default Visa;