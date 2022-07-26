import React from 'react'
import { Link, Outlet } from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home'
import AnimesContext from "./AnimesContext";
import { useGet } from './hooks/useGet';
import Footer from './components/Footer';

const App = () => {
  const [dataTop,dataRandom,dataPopular,dataAllAnime,dataManga,dataGeneros, dataRecom,loading,error] = useGet();
  const accion = dataAllAnime?.filter(d => d?.genres[0]?.name == "Action")
  const comedy = dataAllAnime?.filter(d => d?.genres[0]?.name == "Comedy")

  
    console.log("APPallanime", dataAllAnime)
    console.log("APPranom",dataRandom)
    console.log("APPtopanime", dataTop)
    console.log("APPpopular",dataPopular)
    console.log("APPaccion",accion)
    console.log("APPmanga",dataManga)
    console.log("APPcomedy", comedy)
    console.log("LOADING", loading)
    console.log("ERROR", error)
  return (
    <AnimesContext.Provider value={{ dataTop, dataRandom, dataPopular, dataAllAnime, dataManga, dataGeneros,dataRecom,loading,error,accion,comedy }}>
    <div className="bg-negro">
            <Header />
            <Outlet></Outlet>
            <Footer/>
    </div>
     </AnimesContext.Provider>
  )
}

export default App