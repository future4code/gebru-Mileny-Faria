import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToDetailsMoviePage } from '../../routes/coordinator'
import { NavBarContainer, Text } from './styled'

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <NavBarContainer>
                <Text>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Text>
            </NavBarContainer>
            <button onClick={() => goToDetailsMoviePage(navigate)}>Detalhes do Filme</button>
        </div>
    )
}