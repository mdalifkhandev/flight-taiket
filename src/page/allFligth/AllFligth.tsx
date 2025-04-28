import { useGetFligthDataQuery } from "../../redux/features/fligts/fligthApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { Checkbox, FormControlLabel, Slider } from "@mui/material";
import { useState } from "react";
import FlightDetails from "./FlightDetails";
const AllFligth = () => {

    const { data } = useGetFligthDataQuery()
    const [value, setValue] = useState(50);

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };


    return (
        <div className="px-44 bg-[#ebf2f5] flex py-7 gap-5">

            <div className="w-1/4 bg-white shadow-2xl  rounded-lg ">

                {/* first button not design */}
                <div className="flex justify-between p-5">
                    <button className="">FILTER</button>
                    <button className=""> RESET</button>
                </div>

                {/* second button with design */}
                <div className="flex justify-between p-5 ">
                    <button className="btn bg-[#00dd90] rounded  ">CHEAPEST</button>
                    <button className="btn btn-outline-dark rounded "> FASTEST</button>
                </div>
                {/* Slider whth Price range */}
                <div className="p-5">
                    <h1 className="text-[#00dd90] font-bold mb-5">Price Range</h1>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        aria-label="Money Slider"
                        valueLabelDisplay="auto"
                        min={0}
                        max={5000} // maximum money
                        sx={{
                            color: '#00dd90',
                        }}
                    />
                </div>
                {/* Flight Type */}
                <div className='p-5 text-[#00dd90]'>
                    <h1 className="text-[#00dd90] font-bold mb-5">Fare Type</h1>
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label="Refundable"
                    />
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label=" Non Refundable"
                    />
                </div>
                {/* Fligth Stopage */}
                <div className='p-5 text-[#00dd90]'>
                    <h1 className="text-[#00dd90] font-bold mb-5">Stops</h1>
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label="Non Stop"
                    />
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label="One Stop"
                    />
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label="One Plus Stop"
                    />
                </div>

                {/* depercher Time */}

                <div className="p-5 text-[#00dd90]">
                    <h1 className=" font-bold mb-3 text-[#00dd90]">Departure Times</h1>
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label="08:00 AM"
                    />
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label="10:00 AM"
                    />
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label=" 01:00 PM"
                    />
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label=" 05:00 PM"
                    />
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label=" 08:00 PM"
                    />
                </div>
                {/* depercher Time */}

                <div className="p-5 text-[#00dd90]">
                    <h1 className=" font-bold mb-3 text-[#00dd90]">Arrival Times</h1>
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label="08:00 AM"
                    />
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label="10:00 AM"
                    />
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label=" 01:00 PM"
                    />
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label=" 05:00 PM"
                    />
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: '#00dd90',
                            '&.Mui-checked': {
                                color: '#00dd90',
                            },
                        }} />}
                        label=" 08:00 PM"
                    />
                </div>


            </div>
            <div className="w-3/4 bg-white  rounded-lg ">

                <div className="flex bg-[#00dd90]  p-5 rounded-lg ">
                    <h1 className="text-3xl font-bold">All Flights</h1>
                </div>

                <div className=" bg-gray-500 rounded-lg">
                    {
                        data?.flights?.map((flight: any) => {
                            return (
                                <div className="bg-white rounded-lg">
                                    <div className="flex justify-between items-center shadow-2xl my-5 p-5 rounded-lg ">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <h1 className="text-xl font-bold">FROM</h1>
                                                <p className="text-2xl font-bold text-[#00dd90]">{flight.from}</p>
                                                <p>{flight.departureTime.split("T")[1]}</p>
                                                <p className="text-[#00dd90]">{flight.departureTime.split("T")[0]}</p>
                                            </div>
                                        </div>
                                        <div className="">

                                            <FontAwesomeIcon className="text-4xl text-[#00dd90]" icon={faPlane}></FontAwesomeIcon>
                                            <br />
                                            <FontAwesomeIcon className="text-4xl text-black" icon={faPlane} flip="horizontal"></FontAwesomeIcon>
                                        </div>
                                        <div className="text-right">
                                            <div className="ml-4">
                                                <h1 className="text-xl font-bold">TO</h1>
                                                <p className="text-2xl font-bold text-[#00dd90]">{flight.to}</p>
                                                <p>{flight.arrivalTime.split("T")[1]}</p>
                                                <p className="text-[#00dd90]">{flight.arrivalTime.split("T")[0]}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <h1 className="text-xl font-bold text-[#00dd90]">{flight.price - (flight.price / 100)}    $</h1>
                                            <h1><del>{flight.price} </del> $</h1>
                                            <div >
                                            <button className="btn px-6 rounded bg-gray-500 mt-4">Book Now</button>
                                            <br />
                                            <FlightDetails/>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFligth;