import { Container } from '@mui/material';
import React,{useContext, useEffect, useState} from 'react';
import '../assets/css/moviestmd.css';
import Header from '../components/Header';
import sinportada from '../assets/images/sinPortada.jpg';
import Slider from '../components/Slider';
import AnimesContext from "../AnimesContext";
import { Link, Outlet } from "react-router-dom";

const Home = () => {

    const { dataTop, dataRandom,dataPopular,accion,comedy} = useContext(AnimesContext)
    const [loading,setLoading] = useState(true)
    //     if(!dataTop &&  !dataRandom && !dataPopular && !dataAllAnime) return  <div className='loading_container'>
    //         <div className="lds-dual-ring"></div>
    //     <span className='loading_container__texto'>Loading...</span>
    // </div>
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },[1000])        
    },[loading]);
    useEffect(()=>{
            
    },[dataTop,dataRandom,dataPopular,accion,comedy]);

    console.log("randoooomm",dataRandom)
    console.log("toop", dataTop)
    console.log("populaaaar",dataPopular)
    console.log("accion",accion)
    console.log("rcomedy", comedy)
    return (

        <div style={{ backgroundColor: "black" }}>
            {/* Portada*/}

            {
                loading ? (
                    <div className='loading_container'>
                    <div className="lds-dual-ring"></div>
                    <span className='loading_container__texto'>Loading...</span>
                    </div>
                ) : (
                    <>
                    < Container maxWidth="xl" className="portada" disableGutters={true}>
                {
                    dataRandom ? (
                        <>
                            <img src={sinportada } alt="portada" className='portada__imagen' />
                            <Container className='portada__titulo'>
                                <h2>{dataRandom.title}</h2>
                                <p className='portada__p '>
                                    <span className='puntos-suspensivos'>
                                        {dataRandom.synopsis ||  "No description"}... 
                                    </span>
                                    <span style={{display:"flex"}}>
                                    <Link to={`/detail/${dataRandom?.mal_id}`} className="btn-portada">
                                        More detail
                                    </Link>
                                    </span>
                                    
                                
                                </p>
                                
                            </Container>
                        </>
                    ) : (
                        <div className='loading_container'>
                            <div className="lds-dual-ring"></div>
                            <span className='loading_container__texto'>Loading...</span>
                        </div>
                    )
                }

            </Container>
            {/* Portada fin*/}

            {/*Sliders con numeros y subtitulos opcionales */}
            <Container maxWidth="xl">
                {
                    comedy && dataTop && dataPopular && accion ? (
                        <>
                            <Slider typeNumber={false} subtitule="Comedy" data={comedy} />
                            <Slider typeNumber={true} subtitule="Top Animes" data={dataTop} />

                            <Slider typeNumber={false} subtitule="Popular" data={dataPopular} />
                            <Slider typeNumber={false} subtitule="Accion" data={accion} />
                        </>
                        
                    ): (
                        <div className='loading_container'>
                            <div className="lds-dual-ring"></div>
                            <span className='loading_container__texto'>Loading...</span>
                        </div>
                    )
                }
               
                

            </Container>
                    </>
                )
            }
            
        </div >

    )
}

export default Home;