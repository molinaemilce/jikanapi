import React,{useState,useEffect} from 'react'
import {apiAnimeTop,apiRandom,apiPopular,apiAllAnime,apiTopManga,apiGeneros, apiRecom} from '../APIs/API';

export const useGet = () => {
    const [dataTop,setDataTop] = useState([]);
    const [dataRandom,setDataRandom] =useState([]);
    const [dataPopular,setDataPopular] =useState([]);
    const [dataAllAnime,setDataAllAnime] =useState([]);
    const [dataGeneros,setDataGeneros] =useState([]);
    const [dataRecom,setDataRecom] =useState([]);
    const [dataManga,setDataManga] = useState([]);
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)

    //1" api  con axios
    //devuelve un body parseado
    const getTopAnime = async (valor) => {
        try{
            const {data} = await apiAnimeTop.get()
            
            
            setDataTop(data.data.slice(0,10))
          
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }  catch (error) {
        setError(true)
        }
    }
    const getApiRandom = async () => {
        try{
            const {data} = await apiRandom.get()
            setDataRandom(data.data)
    
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }  catch (error) {
        setError(true)
        }
    }
    const getApiPopular = async () => {
        try{
            const {data} = await apiPopular.get()
            setDataPopular(data.data)
    
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }  catch (error) {
        setError(true)
        }
    }
    const getApiAllAnime= async () => {
        try{
            const {data} = await apiAllAnime.get()
            setDataAllAnime(data.data)
    
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }  catch (error) {
        setError(true)
        }
    }
    const getApiTopManga= async () => {
        try{
            const {data} = await apiTopManga.get()
            setDataManga(data.data.slice(0,10))
    
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }  catch (error) {
        setError(true)
        }
    }
    const getApiGeneros= async () => {
        try{
            const {data} = await apiGeneros.get()
            setDataGeneros(data.data.slice(0,20))
    
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }  catch (error) {
        setError(true)
        }
    }
    const getApiRecom= async () => {
        try{
            const {data} = await apiRecom.get()
            setDataRecom(data.data.slice(0,15))
    
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }  catch (error) {
        setError(true)
        }
    }
    useEffect(()=>{
        getTopAnime();
        getApiRandom();
        getApiPopular();
        getApiAllAnime();
        getApiTopManga();
        getApiGeneros();
        getApiRecom();
    },[])
  return [dataTop,dataRandom,dataPopular,dataAllAnime,dataManga,dataGeneros, dataRecom,loading,error]
}

