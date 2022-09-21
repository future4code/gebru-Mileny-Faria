import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToDetailsMoviePage } from '../../routes/coordinator'
import { NavBarContainer, Text } from './styled'
import { useRequestData } from '../../hooks/useRequestData'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import { BASE_URL } from '../../constants/urls'

export const HomePage = () => {
    const navigate = useNavigate()
    const [ movies, isLoading ] = useRequestData([], `${BASE_URL}/movie/popular?api_key=0b14b275632acd0fc1cf3dedac88afaa`)

    const renderedMovies = movies.results && movies.results.map((movie) => {
        return (
            <MovieCard
                id={movie.id}
                img={movie.poster_path}
                title={movie.title}
                data={movie.release_date}
            />
        )
    })

    return (
        <div>
            <NavBarContainer>
                <Text>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Text>
            </NavBarContainer>
            <div>
                {isLoading ? <p>Carregando...</p> : <div>{renderedMovies}</div>}
            </div>
            <button onClick={() => goToDetailsMoviePage(navigate)}>Detalhes do Filme</button>
        </div>
    )
}