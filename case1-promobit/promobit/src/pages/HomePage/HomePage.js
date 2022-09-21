import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToDetailsMoviePage } from '../../routes/coordinator'
import { NavBarContainer, Text } from './styled'
import { useRequestData } from '../../hooks/useRequestData'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import { BASE_URL } from '../../constants/urls'

export const HomePage = () => {
    const navigate = useNavigate()
    const apiKey = '0b14b275632acd0fc1cf3dedac88afaa'
    const [ movies, isLoading ] = useRequestData([], `${BASE_URL}/movie/popular?api_key=${apiKey}`)

    // base_url: http://image.tmdb.org/t/p/
    // size: "w45" "w92" "w154" "w185" "w300" "w500" "original"
    // file_path:
    // https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg

    console.log(movies)

    const renderedMovies = movies.results && movies.results.map((movie) => {
        const baseUrl = 'http://image.tmdb.org/t/p/'
        const size = 'w92'

        return (
            <MovieCard
                id={movie.id}
                img={`${baseUrl}${size}${movie.poster_path}`}
                title={movie.title}
                data={movie.release_date}
            />
        )
    })

    // console.log(movies)

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