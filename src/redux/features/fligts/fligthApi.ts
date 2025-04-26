import { baseApi } from "../../api/baseApi";

const flightApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFligthData: builder.query<any,void>({
      query: () => ({
        url: '/data.json',
        method: 'GET',
      })
    })
  }),
  overrideExisting:false
})

export const { useGetFligthDataQuery } = flightApi