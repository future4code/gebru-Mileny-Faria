import React from 'react'
import { Router } from './routes/Router'
import { Header } from './components/Header/Header'

export const App = () => {
  return (
    <div>
      <Header />
      <Router />
    </div>
  )
}
