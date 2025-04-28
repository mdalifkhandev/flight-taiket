import { useState } from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Rounded from "./component/Rounded";
import Oneway from "./component/Oneway";
import Multipal from "./component/Multipal";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useGetFligthDataQuery } from "../../../redux/features/fligts/fligthApi";
import { setFlights } from "../../../redux/features/fligts/fligthSlice";
import { addTicket } from "../../../redux/features/fligts/flightMultipalSlice";
import { useNavigate } from "react-router-dom";


const flightCardComponents = [
  {
    label: 'Round Way',
    Component: Rounded
  },
  {
    label: 'One Way',
    Component: Oneway
  },
  {
    label: 'Multipal Way',
    Component: Multipal
  }
];

const Flight = () => {
  const dispatch = useAppDispatch()
  const [flight, setFlight] = useState(0);
  const FlightComponent = flightCardComponents[flight].Component;
  const naviget = useNavigate()



  const [audult, setAudult] = useState('0')
  const [child, setChild] = useState('0')
  const [infant, setInfant] = useState('0')
  const [sitClass, setSitClass] = useState('Economy')

  const { data } = useGetFligthDataQuery()
  const from = useAppSelector((state) => state.flights.from)
  const to = useAppSelector((state) => state.flights.to)

  const fligthDetails = data?.flights.filter((item: any) => item.from === from && item.to === to).map((item: any) => item)

  const handleSetFlightsDetails = () => {
    const newFlightDetails = {
      ...fligthDetails[0],
      pasenger: {
        adult: audult,
        child: child,
        infant: infant
      },
      flightClass: sitClass
    }

    console.log(fligthDetails[0]);

    dispatch(setFlights(newFlightDetails))
    naviget('/allfligth')

  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-stretch mb-7 mx-5 lg:mx-20 gap-5">
      {/* Left Section */}
      <div className="w-full lg:w-[65%] p-5 bg-white border rounded-lg flex flex-col h-full">
        <div>
          <FormControl>
            <RadioGroup row>
              {flightCardComponents.map((item, index) => (
                <FormControlLabel
                  onClick={() => setFlight(index)}
                  key={index}
                  value={item.label}
                  control={
                    <Radio
                      sx={{
                        color: '#00dd90',
                        "&.Mui-checked": {
                          color: '#00dd90',
                        },
                      }}
                    />
                  }
                  label={item.label}
                  sx={{
                    display: 'flex',
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
        <div className="flex-grow">
          <FlightComponent />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[35%] p-5 bg-white border rounded-lg flex flex-col">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-around items-center mb-5 w-full gap-1">
              <select onChange={(e) => setAudult(e.target.value)} name="audult" id="" className="bg-[#D5E7F3] p-2 rounded">
                <option value="0">0 Adult</option>
                <option value="1">1 Adult</option>
                <option value="2">2 Adult</option>
                <option value="3">3 Adult</option>
              </select>
              <select onChange={(e) => setChild(e.target.value)} name="child" id="" className="bg-[#D5E7F3] p-2 rounded">
                <option value="0">0 Child</option>
                <option value="1">1 Child</option>
                <option value="2">2 Child</option>
                <option value="3">3 Child</option>
              </select>
              <select onChange={(e) => setInfant(e.target.value)} name="infant" id="" className="bg-[#D5E7F3] p-2 rounded">
                <option value="0">0 Infant</option>
                <option value="1">1 Infant</option>
                <option value="2">2 Infant</option>
                <option value="3">3 Infant</option>
              </select>
            </div>
            <div className="mb-5">
              <select name="economy" onChange={(e) => setSitClass(e.target.value)} id="" className="bg-[#D5E7F3] p-2 rounded w-full">
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First Class">First Class</option>
                <option value="Premium Economy">Premium Economy</option>
              </select>
            </div>
          </div>



          <div>

            {
              flight === 2 && (
                <div className="w-full">
                  <button
                    onClick={() => dispatch(addTicket())}
                    className="mt-6 w-full px-6 py-2 bg-[#00dd90] text-white rounded-xl text-lg mx-4 hover:bg-[#00cc85] transition-all"
                  >
                    ➕ Add Ticket
                  </button>
                </div>
              )
            }


            <div className="w-full mt-5">
              <button
                className={`w-full text-white px-6 py-2 rounded-xl transition-all 
                 ${fligthDetails && fligthDetails.length > 0 ? "bg-[#00dd90] hover:bg-[#00cc85]" : "bg-red-500 cursor-not-allowed"}`}
                onClick={handleSetFlightsDetails}
                disabled={fligthDetails ? fligthDetails.length === 0 : true}
              >
                SEARCH FOR FLIGHT
              </button>
            </div>


          </div>


          {/* <button className="bg-[#00dd90] text-white p-2 rounded " onClick={handleSetFlightsDetails} >SEARCH FORE FLIGHT</button> */}
        </div>
      </div>
    </div>
  );
};

export default Flight;