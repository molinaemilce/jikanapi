import { Card, CardContent, Container, Grid as Gridm } from '@mui/material';
import { textAlign } from '@mui/system';
import React from 'react'
import { useParams } from 'react-router-dom';
import { Grid } from 'swiper';
import { useGetDetail } from '../hooks/useGetDetail';
import HideImageIcon from '@mui/icons-material/HideImage';
import portadaDetail from '../assets/images/portadadetail.jpg';
import { useEffect } from 'react';
import Loading from '../components/Loading';
const DetailAnime = () => {
  const { id } = useParams();
  const [dataDetailID, dataDetailPersonaje] = useGetDetail(id)

  console.log("vista personajes:",dataDetailPersonaje)

  useEffect(()=>{

  },[dataDetailID,dataDetailPersonaje])
  return (
    <>
      {
        (dataDetailID?.length !== 0 || dataDetailPersonaje?.length !== 0) ? (
          <>
            <div className='detail' style={{backgroundImage:`url(${portadaDetail})`}}>
              <Container maxWidth="xl" className='detail__contenido' >
                <div className='detail__imagen'>
                  {dataDetailID?.images?.jpg?.large_image_url ? (
                    <img src={dataDetailID?.images?.jpg?.large_image_url}  />
                  ): (
                    <div className='personajes__image' style={{alignItems:"center",height:"100%"}}>
                           <HideImageIcon sx={{color:"grey"}}/>
                    </div>
                  )}
                  
                </div>
                <div className="detail__parrafo">
                  <h4>{dataDetailID?.title}</h4>
                  <p>
                    {dataDetailID?.synopsis}
                    { }
                  </p>

                </div>
              </Container>
            </div>
            <Container maxWidth="xl">
              <h5 className='titulo__big'>CHARACTER</h5>
              <Gridm container spacing={2} className="personajes" justifyContent={"center"}>
                { dataDetailPersonaje.length !== 0 ? dataDetailPersonaje?.map(p => (
                  <Gridm item xs={12} sm={4} md={2} xl={2}>
                    <Card>
                      {p?.character.images.webp.image_url ? (
                        <div className='personajes__image'>
                          <img src={p?.character.images.webp.image_url} alt="" />
                        </div>
                      ) : (
                        <div className='personajes__image'>
                          <HideImageIcon sx={{ color: "grey" }} />
                        </div>
                      )}

                      <CardContent sx={{ textAlign: "center" }} className="puntos-suspensivos bg-naranja">
                        {p.character.name || "N/A"}
                      </CardContent>
                    </Card>
                  </Gridm>
                ))  : <Loading/>}
              </Gridm>
            </Container>
          </>
        ) : (
          <div className='loading_container'>
            <div className="lds-dual-ring"></div>
            <span className='loading_container__texto'>Loading...</span>
         </div>
      )
      }

    </>
  )
}

export default DetailAnime