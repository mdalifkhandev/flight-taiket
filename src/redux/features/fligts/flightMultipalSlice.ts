// flightSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Ticket {
    from: string;
    to: string;
    departureTime?: string;
  }
  
  interface FlightState {
    from: string;
    to: string;
    tickets: Ticket[]; // 👈 new state for multiple tickets
    
  }
  
  const initialState: FlightState = {
    from: '',
    to: '',
    tickets: [{ from: '', to: '' ,departureTime: '' }], // Initialize with one ticket
    // ...other states
  };
  
  const multipalFlightSlice = createSlice({
    name: 'multipalFlights',
    initialState,
    reducers: {
      setFrom: (state, action) => {
        state.from = action.payload;
      },
      setTo: (state, action) => {
        state.to = action.payload;
      },
      addTicket: (state) => {
        state.tickets.push({ from: '', to: '', departureTime: '' });
      },
      updateTicket: (state, action:PayloadAction<{ index: number; field: keyof Ticket; value: string; }>) => {
        const { index, field, value } = action.payload;
        if (state.tickets[index]) {
          state.tickets[index][field] = value;
        }
      },
      removeTicket: (state, action: PayloadAction<number>) => {
        if (state.tickets.length > 1) {
          state.tickets.splice(action.payload, 1);
        }
      },
      setTickets: (state, action) => {
        state.tickets = action.payload;
      }
    }
  });
  
  export const { setFrom, setTo, addTicket, updateTicket, setTickets,removeTicket } = multipalFlightSlice.actions;
  export default multipalFlightSlice.reducer;
  