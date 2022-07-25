import React,{useState,useEffect} from 'react'
import axios from "axios";
import {apiDetailID} from '../APIs/API';


export const useGetDetail = (params) => {
    const [dataDetailID,setDataDetailID] = useState([]);
    const [dataDetailPersonaje,setDataDetailPersonaje] = useState([]);
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)

    const getApiDetailID= async (params) => {
        try{
            const {data} = await apiDetailID.get(params)
            setDataDetailID(data.data)
    
            // setTimeout(() => {
            //     setLoading(false)
            // }, 2000);
        }  catch (error) {
        setError(true)
        }
    }
    const getApiDetailPersonaje= async (params) => {
        try{
            const url = axios.create({
                baseURL : `https://api.jikan.moe/v4/anime/${params}/characters`
            })
            const {data} = await url.get();
            setDataDetailPersonaje(data.data.slice(0,20))
    
            // setTimeout(() => {
            //     setLoading(false)
            // }, 2000);
        }  catch (error) {
        setError(true)
        }
    }
    
    useEffect(()=>{
        console.log("asasas",params)
        getApiDetailID(params);
        getApiDetailPersonaje(params);
    },[])
  return [dataDetailID,dataDetailPersonaje];
}