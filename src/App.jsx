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


    console.log("APPrandoooomm",dataRandom)
    console.log("APPtoop", dataTop)
    console.log("APPpopulaaaar",dataPopular)
    console.log("APPaccion",accion)
    console.log("APPrcomedy", comedy)
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