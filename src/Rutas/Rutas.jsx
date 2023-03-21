import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contenedor from '../componentes/Contenedor'
import IssueIdPage from '../componentes/IssueIdPage'

function Rutas() {
  return (

    <Routes>
      <Route path="/" element={<Contenedor />} />
      <Route path="/issues/:id" element={<IssueIdPage />} />

      <Route path="*" element={<Contenedor />} />
    </Routes>

  )
}

export default Rutas