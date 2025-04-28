import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { useGetFligthDataQuery } from '../../redux/features/fligts/fligthApi';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

const style = {
    position: 'absolute',
    top: '0',
    right: '0',
    height: '100%',
    width: 900,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const FlightDetails = () => {
    const { data } = useGetFligthDataQuery()
    interface Flight {
        from: string;
        to: string;
        departureTime: string;
        arrivalTime: string;
    }
    if(!data){
        return (
            <h1 className='text-center text-2xl'>Loading.....</h1>
        )
    }

    
    
    const flights = useAppSelector<RootState, Flight[] | any>((state) => state.flights.flights);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const flightsDetails = data?.flights.filter((item: any) => item.from === flights.from && item.to === flights.to).map((item: any) => item)
    console.log(flightsDetails
    );


    return (
        <div>
            <Button onClick={handleOpen} sx={{
                color: '#00dd90'
            }}>Detals {'>>'} </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}
            >
                <Slide direction="left" in={open} mountOnEnter unmountOnExit>
                    <Box sx={style}>
                        <div className=" bg-gray-500 rounded-lg">


                            <div className="bg-white rounded-lg">
                                <div className="flex justify-between items-center shadow-2xl my-5 p-5 rounded-lg ">
                                    <div className="flex items-center">
                                        <div className="ml-4">
                                            <h1 className="text-xl font-bold">FROM</h1>
                                            <p className="text-2xl font-bold text-[#00dd90]">{flights?.from}</p>
                                            <p>{flights?.departureTime?.split("T")[1]}</p>
                                            <p className="text-[#00dd90]">{flights?.departureTime?.split("T")[0]}</p>
                                        </div>
                                    </div>
                                    <div className="">

                                        <FontAwesomeIcon className="text-4xl text-[#00dd90]" icon={faPlane}></FontAwesomeIcon>
                                        <br />
                                        <FontAwesomeIcon className="text-4xl text-black" icon={faPlane} flip="horizontal"></FontAwesomeIcon>
                                    </div>
                                    <div className="">
                                        <div className="ml-4">
                                            <h1 className="text-xl font-bold">TO</h1>
                                            <p className="text-2xl font-bold text-[#00dd90]">{flights?.to}</p>
                                            <p>{flights?.arrivalTime?.split("T")[1]}</p>
                                            <p className="text-[#00dd90]">{flights?.arrivalTime?.split("T")[0]}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {
                                flightsDetails?.map((flight: any) => {
                                    return (
                                        <div className="bg-white rounded-lg">
                                            <div className="flex justify-between items-center shadow-2xl my-5 p-5 rounded-lg ">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <h1 className="text-xl font-bold">FROM</h1>
                                                        <p className="text-2xl font-bold text-[#00dd90]">{flight.from}</p>
                                                        <p>{flight?.departureTime?.split("T")[1]}</p>
                                                        <p className="text-[#00dd90]">{flight.departureTime?.split("T")[0]}</p>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="ml-4">
                                                        <h1 className="text-xl font-bold">TO</h1>
                                                        <p className="text-2xl font-bold text-[#00dd90]">{flight.to}</p>
                                                        <p>{flight?.arrivalTime?.split("T")[1]}</p>
                                                        <p className="text-[#00dd90]">{flight.arrivalTime?.split("T")[0]}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
            <div className='bg-[#00dd90] text-white p-4 rounded-lg flex justify-between'>
                <div> 
                    <h1>Total VAT</h1>
                    <h1> Price : <span>{flightsDetails[0]?.price}</span> $ </h1>

                </div>
                <div>
                    <button className='flex items-center mt-3 bg-black py-2 px-4 rounded-lg'>Book Now</button>
                </div>
            </div>
                    </Box>

                </Slide>
            </Modal>
        </div>
    );
};

export default FlightDetails;