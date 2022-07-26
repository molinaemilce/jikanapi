import React, { useRef, useState } from "react";

import { Grid } from '@mui/material';
import imagen from '../assets/images/portada.jpg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import required modules
// import required modules
import { Pagination, Navigation } from "swiper";

import { Link, Outlet } from "react-router-dom";

const Slider = ({data, typeNumber = false,subtitule=""}) => {
    return (
        <div className="slider">
            {/* Encabezados*/}
            {
                subtitule && (
                        <div>
                            <h3 className='subtitulo'>{subtitule}</h3>
                        </div>
                )
            }
            <Swiper
                slidesPerView={1}
                spaceBetween={typeNumber ? 0 : 10}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                    type: "custom"
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    425: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                    900: {
                        slidesPerView: 6,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                }}
            >
                <Grid container>
                    {
                    
                    typeNumber ? (
                        data?.map((d,i)=>{
                            return <SwiperSlide className="bg-negro ">
                                <Link to={`/detail/${d.mal_id}`} className="swipper_link color-text">
                                    <Grid item xs={12} sm={4} md={2} xl={2} className={typeNumber ? "bg-negro slider__items slider__number" : "bg-negro slider__items"} >

                                        <span className={i + 1 == 10 ? "slider__numberdiez" : ""}>{i + 1}</span>
                                        <img src={d.images.jpg.large_image_url} className="slider__imagen shadow-box" style={{ left: `${i + 1 == 10 ? '93px' : '73px'}` }} />

                                    </Grid>
                                </Link> | {" "}
                           
                        </SwiperSlide>
                        })
                       
                    ) : (
                            data.map(d => {
                                    return <SwiperSlide className="bg-negro shadow-box">
                                         <Link to={`/detail/${d?.entry?.mal_id ? d?.entry?.mal_id:  d?.mal_id }`} className="color-text" style={{width:"100%"}}>
                                        <Grid item xs={12} sm={4} md={2} xl={2} className={typeNumber ? "bg-negro slider__items slider__number" : "bg-negro slider__items"} >
                                          <img src={d?.entry?.images?.jpg.image_url || d?.images?.jpg?.image_url} className="slider__imagen" />
                                        </Grid>
                                        </Link> | {" "}
                                    </SwiperSlide>
                         })   
                       
                    )
                    
                    }
                        
                </Grid>
            </Swiper>

        </div>
    )
}

export default Slider