import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";

import App from './App.jsx'
import Home from './pages/Home.jsx';

import Add from './pages/Add.jsx';
import Search from './pages/Search.jsx';
import Continent from './pages/Continent.jsx';
import GetOne from './pages/GetOne.jsx';

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/add' element={<Add />}/>
        <Route path='/getone/:id' element={<GetOne />} />
        <Route path='/search/:name' element={<Search/>} />
        <Route path='/continent/:continent' element={<Continent/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
