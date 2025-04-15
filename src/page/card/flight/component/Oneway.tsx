import { useEffect, useState } from "react";


const Oneway = () => {


     const [onewaydata, setOnewaydata] = useState([])
      useEffect(() => {
        fetch('/ONEWAY.json')
        .then(res => res.json())
        .then(data => setOnewaydata(data))
        .catch(err => console.log(err))
      }, [])

      console.log(onewaydata);
      

    return (
        <div>
            this is onewaydata component
        </div>
    );
};

export default Oneway;