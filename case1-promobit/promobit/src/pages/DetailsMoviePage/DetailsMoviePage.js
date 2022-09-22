import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordinator'

export const DetailsMoviePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Detalhes Filme</h1>
            <button onClick={() => goToHomePage(navigate)}>Voltar para a home</button>
        </div>
    )
}