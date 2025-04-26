import { faCalendar, faLocationDot, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useGetFligthDataQuery } from "../../../../redux/features/fligts/fligthApi";
import { setFrom, setTo } from "../../../../redux/features/fligts/fligthSlice";


const Oneway = () => {


     const dispatch= useAppDispatch()
         const { data } = useGetFligthDataQuery()
     
         const from=useAppSelector((state)=>state.flights.from)
         const to = useAppSelector((state)=>state.flights.to)
     
         const availAbleGoingData = data?.flights.filter((item: any) => item.from === from && item.to === to)?.map((item: any) => item.departureTime)
         
      

    return (
         <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-5">
                    <div className="flex flex-col items-center">
                        <p className="text-xl text-center mb-2">FROM</p>
                        <p className="text-center text-[#00dd90] text-5xl mb-4">   {from ? from : 'FROM'}  </p>
                        <div className="space-y-4">
                            <div className="relative w-full max-w-md">
                                {/* Location icon */}
                                <div className="bg-[#00dd90] absolute inset-y-0 left-0 pl-3 flex items-center rounded-md pointer-events-none">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-white pr-2" />
                                </div>
                                {/* Input with datalist */}
                                <input
                                    list="locationSuggestions"
                                    onChange={(e)=>dispatch(setFrom(e.target.value))}
                                    id="fileName"
                                    placeholder="Choose a location or upload a file..."
                                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                                />
                                <datalist id="locationSuggestions">
                                    {data?.airports.map((opt: any) => (
                                        <option value={opt.code} key={opt.code}>
                                            {opt.city}
                                        </option>
                                    ))}
                                </datalist>
                            </div>
                            <div className="relative w-full max-w-md">
                                {/* Calendar icon */}
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center rounded-md bg-[#00dd90] pointer-events-none">
                                    <FontAwesomeIcon icon={faCalendar} className="text-white pr-2" />
                                </div>
        
                                {/* Date Input */}
                                <input
                                    list="dateSuggestions"
                                    id="fileName"
                                    placeholder="Choose Time section"
                                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                                />
                                <datalist id="dateSuggestions">
                                    {availAbleGoingData?.map((opt: any) => (
                                        <option value={opt} key={opt}>
                                            {opt}
                                        </option>
                                    ))}
                                </datalist>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faPlane} className="text-3xl text-[#00dd90] mb-2" />
                        <FontAwesomeIcon icon={faPlane} flip="horizontal" className="text-3xl" />
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl text-center mb-2">TO</p>
                        <p className="text-center text-[#00dd90] text-5xl mb-4">
                            {to ? to : 'TO'}
                        </p>
                        <div className="space-y-4">
                            <div className="relative w-full max-w-md">
                                {/* Location icon */}
                                <div className="bg-[#00dd90] absolute inset-y-0 left-0 pl-3 flex items-center rounded-md pointer-events-none">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-white pr-2" />
                                </div>
                                {/* Input with datalist */}
                                <input
                                    list="locationSuggestions"
                                    onChange={(e)=>dispatch(setTo(e.target.value))}
                                    id="fileName"
                                    placeholder="Choose a location or upload a file..."
                                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                                />
                                <datalist id="locationSuggestions">
                                    {data?.airports.map((opt: any) => (
                                        <option value={opt.code} key={opt.code}>
                                            {opt.city}
                                        </option>
                                    ))}
                                </datalist>
                            </div>
                            <div className="relative w-full max-w-md">
                                {/* Calendar icon */}
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center rounded-md bg-[#00dd90] pointer-events-none">
                                    <FontAwesomeIcon icon={faCalendar} className="text-white pr-2" />
                                </div>
                                {/* Date Input */}
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default Oneway;