// redux/features/flights/flightSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Flight {
  id: string;
  airlineId: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  availableSeats: number;
  pasenger:[]
  flightClass: string;
  
}

interface FlightState {
  flights: Flight[];
  selectedFlight: Flight | null;
  searchText: string;
  from: string;
  to: string;
}

const initialState: FlightState = {
  flights: [],
  selectedFlight: null,
  searchText: '',
  from: '',
  to: ''
};

const flightSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    setFlights: (state, action: PayloadAction<Flight[]>) => {
      state.flights = action.payload;
    },
    setSelectedFlight: (state, action: PayloadAction<Flight>) => {
      state.selectedFlight = action.payload;
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setFrom: (state, action: PayloadAction<string>) => {
      state.from = action.payload;
    },
    setTo: (state, action: PayloadAction<string>) => {
      state.to = action.payload;
    },
    clearFilters: (state) => {
      state.searchText = '';
      state.from = '';
      state.to = '';
    },
  },
});

export const {
  setFlights,
  setSelectedFlight,
  setSearchText,
  setFrom,
  setTo,
  clearFilters,
} = flightSlice.actions;

export default flightSlice.reducer;
