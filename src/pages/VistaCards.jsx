import { Card, CardContent, Container, Grid } from '@mui/material';
import { textAlign } from '@mui/system';
import React,{useContext} from 'react'
import { useParams } from 'react-router-dom';
import AnimesContext from '../AnimesContext';
import HideImageIcon from '@mui/icons-material/HideImage';

const VistaCards = () => {

    const {dataManga,loading} = useContext(AnimesContext);
    console.log("data mangaa",dataManga)

    return (
    <Container  maxWidth="xl" sx={{paddingTop:"60px"}}>
        {
            !dataManga ? (
            <div className='loading_container'>
                <div className="lds-dual-ring"></div>
                <span className='loading_container__texto'>Loading...</span>
            </div>
            ) : (
                <>
                    
                    <h5 className='titulo__big'>Top Mangas</h5>
                    <Grid container  spacing={2} className="personajes" justifyContent={"center"}>
                    {dataManga && dataManga?.map(m=>(
                        <Grid item xs={12} sm={4} md={2} xl={2} >
                            <Card>
                                { m?.images.jpg.image_url ?  (
                                    <div className='personajes__image'>
                                        <img src={m?.images.jpg.image_url} alt="" />
                                    </div>
                                ) : (
                                    <div className='personajes__image'>
                                        <HideImageIcon sx={{color:"grey"}}/>
                                    </div>
                                ) }
                            
                                <CardContent sx={{textAlign:"center"}} className="puntos-suspensivos bg-naranja">
                                {m?.title  || "N/A"} 
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                </>
            )
        }
       
    </Container >
  )
}

export default VistaCards