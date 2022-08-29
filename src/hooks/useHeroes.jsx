import React from 'react'
import { useContext } from 'react'
import { SuperHeroContext } from '../heroes/context/SuperHeroContext'

export const useHeroes = () => {
    const{
        state: {data, isLoading,},
        actions: {getHeroById,getHeroByName,getHeroesByPublishers,getPublishers},
    } = useContext(SuperHeroContext)

  return {data, isLoading, getHeroById, getHeroByName, getHeroesByPublishers,getPublishers,}
}