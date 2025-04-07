import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";

import App from './App.jsx'
import Home from './pages/Home.jsx';

import Add from './pages/Add.jsx';
import Search from './pages/Search.jsx';
import Continent from './pages/Continent.jsx';
import GetOne from './pages/GetOne.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Update from './pages/Update.jsx';

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
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/update/:id' element={<Update/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
