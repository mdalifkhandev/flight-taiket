import { useState } from "react";
import Oneway from "./component/Oneway";
import Multipal from "./component/Multipal";
import Rounded from "./component/Rounded";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

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
  const [flight, setFlight] = useState(0);
  const FlightComponent = flightCardComponents[flight].Component;

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
      <div className="w-full lg:w-[35%] p-5 bg-white border rounded-lg flex flex-col h-full">
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-around items-center mb-5 w-full gap-1">
            <select name="audult" id="" className="bg-[#D5E7F3] p-2 rounded">
              <option value="0">0 Adult</option>
              <option value="1">1 Adult</option>
              <option value="2">2 Adult</option>
              <option value="3">3 Adult</option>
            </select>
            <select name="child" id="" className="bg-[#D5E7F3] p-2 rounded">
              <option value="0">0 Child</option>
              <option value="1">1 Child</option>
              <option value="2">2 Child</option>
              <option value="3">3 Child</option>
            </select>
            <select name="infant" id="" className="bg-[#D5E7F3] p-2 rounded">
              <option value="0">0 Infant</option>
              <option value="1">1 Infant</option>
              <option value="2">2 Infant</option>
              <option value="3">3 Infant</option>
            </select>
          </div>
          <div className="mb-5">
            <select name="economy" id="" className="bg-[#D5E7F3] p-2 rounded w-full">
              <option value="0">Economy</option>
              <option value="1">Business</option>
              <option value="2">First Class</option>
              <option value="3">Premium Economy</option>
            </select>
          </div>
          <button className="bg-[#00dd90] text-white p-2 rounded w-full">SEARCH TORE FLIGHT</button>
        </div>
      </div>
    </div>
  );
};

export default Flight;