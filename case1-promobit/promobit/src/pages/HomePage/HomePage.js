import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToDetailsMoviePage } from '../../routes/coordinator'

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => goToDetailsMoviePage(navigate)}>Detalhes do Filme</button>
        </div>
    )
}