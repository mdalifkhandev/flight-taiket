import { useGetFligthDataQuery } from "../../redux/features/fligts/fligthApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
const AllFligth = () => {

    const { data } = useGetFligthDataQuery()


    return (
        <div className="px-44 ">
            <div className="flex bg-[#00dd90] my-5 p-5 rounded-lg ">
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
                                        <button className="btn py-1! px-6 mt-8">Book Now</button>


                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div>

            </div>

        </div>
    );
};

export default AllFligth;