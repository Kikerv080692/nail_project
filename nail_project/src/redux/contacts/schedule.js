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
    baseUrl: "https://backendfornails.onrender.com/api",
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
    }),
    getBookSchedule: builder.query({
      query: ({days, month}) => ({
        url: `/schedule/booked?days=${days}&month=${month}`,
        method: "GET",
      }),
      providesTags: ["schedule"],
    }),
    addClient: builder.mutation({
      query: (value) => ({
        url: "/book",
        method: "POST",
        data: value,
      }),
      invalidatesTags: ["schedule"],
    }),
  }),
});

export const { useGetScheduleQuery, useAddScheduleMutation, useDeleteScheduleTimeMutation, useAddClientMutation } = scheduleApi;
