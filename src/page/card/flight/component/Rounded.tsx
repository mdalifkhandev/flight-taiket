import { useEffect, useState } from "react";
import imgs from "../../../../assets/transfer.png";
import { faLocationDot, faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';




const Rounded = () => {


    const today = new Date(new Date().setDate(new Date().getDate() + 3)).toISOString().split('T')[0];
    const sevenDaysLater = new Date(new Date().setDate(new Date().getDate() + 10)).toISOString().split('T')[0];



    const [roundwaydata, setRoundwaydata] = useState<any>([])
    useEffect(() => {
        fetch('/ROUNDWAY.json')
            .then(res => res.json())
            .then(data => setRoundwaydata(data))
            .catch(err => console.log(err))
    }, [])

    console.log(roundwaydata);
    const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'aasss'];

    return (
        <div>
            <div className="flex justify-around items-center  m-auto ">
                <div>
                    <p className="text-xl text-center">FROM</p>
                    <p className="text-center text-[#00dd90] text-5xl">{roundwaydata.backarrival}</p>


                    <div>



                        <div className="relative w-full max-w-md my-2">
                            {/* Location icon */}
                            <div className="  bg-[#00dd90] absolute inset-y-0 left-0 pl-3 flex items-center rounded-md pointer-events-none">
                                <FontAwesomeIcon icon={faLocationDot} className="text-[#ffffff] pr-[10px] " />
                            </div>

                            {/* Input with datalist */}
                            <input
                                list="locationSuggestions"
                                id="fileName"
                                placeholder="Choose a location or upload a file..."
                                className="pl-10 pr-4 py-2 w-full  border-white rounded-md shadow-sm   text-sm"
                            />

                            <datalist id="locationSuggestions">

                                {
                                    locations.map(
                                        opt => <option value={opt} key={opt} />
                                    )
                                }
                            </datalist>
                        </div>




                        <div className="relative w-full max-w-md my-2">
                            {/* Left-side custom calendar icon */}
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center rounded-md  bg-[#00dd90] pointer-events-none">

                                <FontAwesomeIcon icon={faCalendar} className="text-white pr-2" />

                            </div>

                            {/* Date Input */}
                            <input
                                type="date"
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700
                   appearance-none" // 👈 Hides default calendar icon
                            />
                        </div>

                    </div>

                </div>
                <div className="mx-10">
                    <FontAwesomeIcon icon={faPlane} className="text-3xl text-[#00dd90]" />
                    <br />
                    <FontAwesomeIcon icon={faPlane} flip="horizontal" className="text-3xl" />
                </div>
                <div>
                    <p className="text-xl text-center">TO</p>
                    <p className="text-center text-[#00dd90] text-5xl">{roundwaydata.backdeparture}</p>


                    <div>



<div className="relative w-full max-w-md my-2">
    {/* Location icon */}
    <div className="  bg-[#00dd90] absolute inset-y-0 left-0 pl-3 flex items-center rounded-md pointer-events-none">
        <FontAwesomeIcon icon={faLocationDot} className="text-[#ffffff] pr-[10px] " />
    </div>

    {/* Input with datalist */}
    <input
        list="locationSuggestions"
        id="fileName"
        placeholder="Choose a location or upload a file..."
        className="pl-10 pr-4 py-2 w-full  border-white rounded-md shadow-sm   text-sm"
    />

    <datalist id="locationSuggestions">

        {
            locations.map(
                opt => <option value={opt} key={opt} />
            )
        }
    </datalist>
</div>




<div className="relative w-full max-w-md my-2">
    {/* Left-side custom calendar icon */}
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center rounded-md  bg-[#00dd90] pointer-events-none">

        <FontAwesomeIcon icon={faCalendar} className="text-white pr-2" />

    </div>

    {/* Date Input */}
    <input
        type="date"
        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700
appearance-none" // 👈 Hides default calendar icon
    />
</div>

</div>



                </div>
            </div>
        </div>
    );
};

export default Rounded;