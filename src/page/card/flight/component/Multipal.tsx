import { faLocationDot, faPlane, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { useGetFligthDataQuery } from '../../../../redux/features/fligts/fligthApi';
import { removeTicket, updateTicket } from '../../../../redux/features/fligts/flightMultipalSlice';

const Multipal = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetFligthDataQuery();
  const tickets = useAppSelector((state) => state.multipalFlights.tickets);
  console.log(tickets, 'tickets');
  

  return (
    <div className="flex flex-col justify-center items-center gap-10 p-5">
      {tickets.map((ticket, index) => {
        const from = ticket.from;
        const to = ticket.to;

        const availAbleGoingData = data?.flights
          .filter((item: any) => item.from === from && item.to === to)
          .map((item: any) => item.departureTime);

        // const availAbleReturnData = data?.flights
        //   .filter((item: any) => item.from === to && item.to === from)
        //   .map((item: any) => item.arrivalTime);

        return (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-center items-center gap-10 border p-4 rounded-xl shadow-md w-full max-w-5xl"
          >





            {/* FROM Section */}
            <div className="flex flex-col items-center">
              <p className="text-xl text-center mb-2">FROM</p>
              <p className="text-center text-[#00dd90] text-3xl mb-4">
                {from ? from : 'FROM'}
              </p>
              <div className="space-y-4">
                {/* Location Input */}
                <div className="relative w-full max-w-md">
                  <div className="bg-[#00dd90] absolute inset-y-0 left-0 pl-3 flex items-center rounded-md pointer-events-none">
                    <FontAwesomeIcon icon={faLocationDot} className="text-white pr-2" />
                  </div>
                  <input
                    list="locationSuggestions"
                    onChange={(e) =>
                      dispatch(updateTicket({ index, field: 'from', value: e.target.value }))
                    }
                    placeholder="Choose a location..."
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

                {/* Calendar Input */}
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center bg-[#00dd90] rounded-md pointer-events-none">
                    <FontAwesomeIcon icon={faCalendar} className="text-white pr-2" />
                  </div>
                  <input
                    list={`dateSuggestions-going-${index}`}
                    onChange={(e)=>dispatch(updateTicket({ index, field: 'departureTime', value: e.target.value }))}
                    placeholder="Choose Time section"
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                  />
                  <datalist id={`dateSuggestions-going-${index}`}>
                    {availAbleGoingData?.map((opt: any) => (
                      <option value={opt} key={opt}>
                        {opt}
                      </option>
                    ))}
                  </datalist>
                </div>
              </div>
            </div>

            {/* PLANE ICON */}
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faPlane} className="text-3xl text-[#00dd90] mb-2" />
              <FontAwesomeIcon icon={faPlane} flip="horizontal" className="text-3xl" />
            </div>

            {/* TO Section */}
            <div className="flex flex-col items-center">
              <p className="text-xl text-center mb-2">TO</p>
              <p className="text-center text-[#00dd90] text-3xl mb-4">{to ? to : 'TO'}</p>
              <div className="space-y-4">
                {/* Location Input */}
                <div className="relative w-full max-w-md">
                  <div className="bg-[#00dd90] absolute inset-y-0 left-0 pl-3 flex items-center rounded-md pointer-events-none">
                    <FontAwesomeIcon icon={faLocationDot} className="text-white pr-2" />
                  </div>
                  <input
                    list="locationSuggestions"
                    onChange={(e) =>
                      dispatch(updateTicket({ index, field: 'to', value: e.target.value }))
                    }
                    placeholder="Choose a location..."
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

                {/* Calendar Input */}
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center bg-[#00dd90] rounded-md pointer-events-none">
                    <FontAwesomeIcon icon={faCalendar} className="text-white pr-2" />
                  </div>
                  {/* <input
                    list={`dateSuggestions-return-${index}`}
                    placeholder="Choose Time section"
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                  />
                  <datalist id={`dateSuggestions-return-${index}`}>
                    {availAbleReturnData?.map((opt: any) => (
                      <option value={opt} key={opt}>
                        {opt}
                      </option>
                    ))}
                  </datalist> */}
                </div>
              </div>
              {
                tickets.length>2 && <button
                onClick={()=>dispatch(removeTicket(index))}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >Remove
                </button>
              }
            </div>
          </div>
        );
      })}

      {/* Add Ticket Button */}
      
    </div>
  );
};

export default Multipal;
