import React from 'react'
import ram from '../assets/rick-and-morty-cover.jpg'

export default function WelcomePage() {
  return (
    <section className='welcome-page'>
      <header>
        <h3>A React Frontend for the Rick & Morty API</h3>
        <img
          //className='main-img ui centered medium circular image'
          className='main-img ui centered image'
          src={ram}
          alt='rick and morty'
        />
      </header>
    </section>
  )
}
