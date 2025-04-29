import { useGetFligthDataQuery } from "../../redux/features/fligts/fligthApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { Checkbox, FormControlLabel, Slider } from "@mui/material";
import { useState } from "react";
import FlightDetails from "./FlightDetails";

const AllFligth = () => {
    const { data } = useGetFligthDataQuery();
    const [value, setValue] = useState(50);

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <div className="px-5 lg:px-20 bg-[ebf2f5] flex flex-col lg:flex-row py-7 gap-5">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4 bg-white shadow-2xl max-h-[240vh] overflow-auto rounded-lg">
                {/* Filter and Reset Buttons */}
                <div className="flex justify-between p-5">
                    <button className="text-black px-4 py-2 rounded">FILTER</button>
                    <button className="text-black px-4 py-2 rounded">RESET</button>
                </div>

                {/* Cheapest and Fastest Buttons */}
                <div className="flex justify-between p-5">
                    <button className="btn bg-[#00dd90] text-white px-4 py-2 rounded">CHEAPEST</button>
                    <button className="btn border border-gray-300 text-black px-4 py-2 rounded">FASTEST</button>
                </div>

                {/* Price Range Slider */}
                <div className="m-4 mx-8">
                    <h1 className="text-[#00dd90] font-bold mb-5">Price Range</h1>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        aria-label="Money Slider"
                        valueLabelDisplay="auto"
                        min={0}
                        max={5000}
                        sx={{
                            color: '#00dd90',
                            height: 8,
                        }}
                    />
                </div>

                {/* Fare Type */}
                <div className="p-5">
                    <h1 className="text-[#00dd90] font-bold mb-5">Fare Type</h1>
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="Refundable"
                    />
                    <br />
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="Non Refundable"
                    />
                </div>

                {/* Stops */}
                <div className="p-5">
                    <h1 className="text-[#00dd90] font-bold mb-5">Stops</h1>
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="Non Stop"
                    />
                    <br />
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="One Stop"
                    />
                    <br />
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="One Plus Stop"
                    />
                </div>

                {/* Departure Times */}
                <div className="p-5">
                    <h1 className="text-[#00dd90] font-bold mb-5">Departure Times</h1>
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="08 : 00 : 00 AM"
                    />
                    <br />
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="10 : 00 : 00 AM"
                    />
                    <br />
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="01 : 00 : 00 PM"
                    />
                    <br />
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="05 : 00 : 00 PM"
                    />
                    <br />
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="08 : 00 : 00 PM"
                    />
                </div>

                {/* Arrival Times */}
                <div className="p-5">
                    <h1 className="text-[#00dd90] font-bold mb-5">Arrival Times</h1>
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="08 : 00 : 00 AM"
                    />
                    <br />
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="10 : 00 : 00 AM"
                    />
                    <br />
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="01 : 00 : 00 PM"
                    />
                    <br />
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="05 : 00 : 00 PM"
                    />
                    <br />
                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#00dd90', '&.Mui-checked': { color: '#00dd90' } }} />}
                        label="08 : 00 : 00 PM"
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4 bg-white rounded-lg">
                <div className="flex bg-[#00dd90] p-5 rounded-lg">
                    <h1 className="text-3xl font-bold text-white">All Flights</h1>
                </div>

                <div className="rounded-lg">
                    {data?.flights?.map((flight: any) => (
                        <div key={flight.id} className="bg-white rounded-lg shadow-lg my-5 p-5">
                            <div className="flex flex-col lg:flex-row justify-between items-center">
                                {/* From Section */}
                                <div className="text-center lg:text-left">
                                    <h1 className="text-xl font-bold">FROM</h1>
                                    <p className="text-2xl font-bold text-[#00dd90]">{flight.from}</p>
                                    <p>{flight.departureTime.split("T")[1]}</p>
                                    <p className="text-[#00dd90]">{flight.departureTime.split("T")[0]}</p>
                                </div>

                                {/* Plane Icon */}
                                <div className="text-center my-4 lg:my-0">
                                    <FontAwesomeIcon className="text-4xl text-[#00dd90]" icon={faPlane} />
                                    <br />
                                    <FontAwesomeIcon className="text-4xl text-black" icon={faPlane} flip="horizontal" />
                                </div>

                                {/* To Section */}
                                <div className="text-center lg:text-right">
                                    <h1 className="text-xl font-bold">TO</h1>
                                    <p className="text-2xl font-bold text-[#00dd90]">{flight.to}</p>
                                    <p>{flight.arrivalTime.split("T")[1]}</p>
                                    <p className="text-[#00dd90]">{flight.arrivalTime.split("T")[0]}</p>
                                </div>

                                {/* Price and Button */}
                                <div className="text-center lg:text-right">
                                    <h1 className="text-xl font-bold text-[#00dd90]">${flight.price}</h1>
                                    <button className="btn bg-black text-white px-6 py-2 rounded-lg mt-4 hover:bg-[#00cc85]">
                                        Book Now
                                    </button>
                                    <FlightDetails/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllFligth;