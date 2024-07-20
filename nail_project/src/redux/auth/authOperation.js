import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/api'

const setAuthHeaders = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
}

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try{
     const {data} = await axios.post('/auth/register', credentials)
     setAuthHeaders(data.dataUser.token)
     return data
    }catch(error) {
     return thunkAPI.rejectWithValue(error.message)
    }
 })
 
 export const login = createAsyncThunk('/auth/login', async(credentials, thunkAPI) => {
     try{
        const {data} = await axios.post('/auth/login', credentials) 
        setAuthHeaders(data.dataUser.token)
        return data
     }catch(error){
         return thunkAPI.rejectWithValue(error.message)
     }
 })

 export const logout = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
    try {
     await  axios.post('/auth/logout')
     clearAuthHeader()
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
 })