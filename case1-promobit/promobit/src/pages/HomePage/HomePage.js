import React from 'react'
import { NavBarContainer, Text, CardsContainer, MovieContainer } from './styled'
import { useRequestData } from '../../hooks/useRequestData'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import { BASE_URL } from '../../constants/urls'

export const HomePage = () => {
    const apiKey = '0b14b275632acd0fc1cf3dedac88afaa'
    const [ movies, isLoading ] = useRequestData([], `${BASE_URL}/movie/popular?api_key=${apiKey}`)

    // base_url: http://image.tmdb.org/t/p/
    // size: "w45" "w92" "w154" "w185" "w300" "w500" "original"
    // file_path:
    // https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg

    const renderedMovies = movies.results && movies.results.map((movie) => {
        const baseUrl = 'http://image.tmdb.org/t/p/'
        const size = 'w154'

        return (
            <MovieCard
                id={movie.id}
                img={`${baseUrl}${size}${movie.poster_path}`}
                title={movie.title}
                date={movie.release_date}
            />
        )
    })

    return (
        <div>
            <NavBarContainer>
                <Text>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Text>
            </NavBarContainer>
            <CardsContainer>
                {isLoading ? <p>Carregando...</p> : <MovieContainer>{renderedMovies}</MovieContainer>}
            </CardsContainer>
        </div>
    )
}