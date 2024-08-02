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

export const scheduleApi = createApi({
  reducerPath: "schedule",
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:4000/api",
  }),
  tagTypes: ["schedule"],
  endpoints: (builder) => ({
    getSchedule: builder.query({
      query: ({days, month}) => ({
        url: `/schedule?days=${days}&month=${month}`,
        method: "GET",
      }),
      providesTags: ["schedule"],
    }),
    addSchedule: builder.mutation({
      query: (value) => ({
        url: "/schedule",
        method: "POST",
        data: value,
      }),
      invalidatesTags: ["schedule"],
    }),
    deleteScheduleTime: builder.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["schedule"]
    })
  }),
});

export const { useGetScheduleQuery, useAddScheduleMutation, useDeleteScheduleTimeMutation } = scheduleApi;
