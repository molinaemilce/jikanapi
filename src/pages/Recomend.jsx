import { Card, CardContent, Container, Grid } from '@mui/material';
import { textAlign } from '@mui/system';
import React,{useContext,} from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AnimesContext from '../AnimesContext';
import HideImageIcon from '@mui/icons-material/HideImage';


const Categories = () => {
    const { dataRecom,loading} = useContext(AnimesContext)
    console.log("data recomennnn",dataRecom)
    return (
        <Container maxWidth="xl" sx={{ paddingTop: "60px"}}>
            { !dataRecom ? (
                  <div className='loading_container'>
                  <div className="lds-dual-ring"></div>
                  <span className='loading_container__texto'>Loading...</span>
              </div>
            ): (
                <>
                 <h5 className='titulo__big'>Recommendations</h5>
                    <Grid container spacing={2} className="personajes" justifyContent={"center"}>
                {
                    dataRecom && dataRecom?.map(t=> (
                        <Grid item xs={12} sm={4} md={2} xl={2}>
                          
                                <Card>
                                { t?.entry[0]?.images?.jpg?.image_url ?  (
                                    <div className='personajes__image'>
                                        <img src={t?.entry[0]?.images?.jpg?.image_url} alt="" />
                                    </div>
                                ) : (
                                    <div className='personajes__image'>
                                        <HideImageIcon sx={{color:"grey"}}/>
                                    </div>
                                ) }
                                    <CardContent sx={{ textAlign: "center" }} className="puntos-suspensivos bg-naranja">
                                            {t?.entry[0]?.title || "N/A"}
                                    </CardContent>
                                </Card>
                         
                        </Grid>
                    ))
                }

            </Grid>
                </>
            )
            }
           
        </Container >
    )
}

export default Categories