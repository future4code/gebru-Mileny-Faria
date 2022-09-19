import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
import { DetailsMoviePage } from '../pages/DetailsMoviePage/DetailsMoviePage'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/movie' element={<DetailsMoviePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}