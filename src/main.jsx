import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import DetailAnime from './pages/DetailAnime';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import VistaCards from './pages/VistaCards';
import Categories from './pages/Recomend';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path='/detail/:id' element={<DetailAnime />}> </Route>
            {/* <Route index element={<div className='App' style={{ padding: "1rem" }}>Select an invoice</div>} />
            <Route path=':invoiceId' element={<Invoice />} /> */}
          {/* </Route> */}
          <Route path='/topmangas' element={<VistaCards />}> </Route>
          <Route path='/recommendations' element={<Categories />}> </Route>
          <Route path='*' element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
