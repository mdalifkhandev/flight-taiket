import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import flightReducer from './features/fligts/fligthSlice';
import multipalFlightsReducer from './features/fligts/flightMultipalSlice';
import { baseApi } from './api/baseApi';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    conuter: counterReducer,
    flights: flightReducer,
    multipalFlights: multipalFlightsReducer, // Use the same reducer for multipal flights
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(baseApi.middleware)
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
