import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import TexasNews from './components/TexasNews'
import Country from './components/Country'
import Language from './components/Language'
import HotNews from './components/HotNews'

export default function Path() {
  return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/texas" element={<TexasNews />} />
        <Route path="/country/:countryCode" element={<Country />} /> 
        <Route path="/language/:languageCode" element={<Language />} />
        <Route path="/hot" element={<HotNews />} />
        
      </Routes>
  )
}
