import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/NavBar'
import { SuperHeroProvider } from '../context/SuperHeroProvider'
import { HeroByPublisherPage } from '../pages/HeroByPublisherPage'
import { HeroesPage } from '../pages/HeroPage'
import { SearchPage } from '../pages/SearchPage'


export const HeroesRoutes = () => {
  return (
    <>
    <SuperHeroProvider> 
    <Navbar/>
    <div className='container'>
    <Routes>

      <Route path='/:publisher' element={<HeroByPublisherPage/>}/>
      <Route path='search' element={<SearchPage/>}/>
      <Route path='hero/:heroId' element={<HeroesPage/>}/>

      <Route path='/' element={<Navigate to='/marvel'/>}/>
    </Routes>
    </div>
    </SuperHeroProvider>
    </>
  )
}