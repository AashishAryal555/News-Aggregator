import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import TexasNews from './components/TexasNews'
import Country from './components/Country'
import Language from './components/Language'
import About from './components/About'
import Search from './components/Search'

export default function Path() {
  return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TexasNews" element={<TexasNews />} />
        <Route path="/country/:countryCode" element={<Country />} /> 
        <Route path="/language/:languageCode" element={<Language />} />
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        
      </Routes>
  )
}
