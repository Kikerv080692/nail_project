import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

  export const clientsApi = createApi ({
    reducerPath: 'client',
    baseQuery: axiosBaseQuery({
        baseUrl: "http://localhost:4000/api",
      }),
      tagTypes: ['client'],
      endpoints: (builder) => ({
        getClientInfo: builder.query({
            query:({days, month, minutes, hours}) => ({
                 url: `/client?days=${days}&month=${month}&minutes=${minutes}&hours=${hours}`,
                 method: "GET",
            }),
            providesTags: ["client"],
        }),
        addClient: builder.mutation({
            query: (value) => ({
              url: "/client",
              method: "POST",
              data: value,
            }),
            invalidatesTags: ["client"],
          }),
      })
  })

  export const {useGetClientInfoQuery, useAddClientMutation } = clientsApi