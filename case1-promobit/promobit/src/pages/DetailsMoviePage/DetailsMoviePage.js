import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordinator'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { Title } from './styled'

export const DetailsMoviePage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const apiKey = '0b14b275632acd0fc1cf3dedac88afaa'
    const [ detailsMovie, isLoading ] = useRequestData({}, `${BASE_URL}movie/${params.id}?api_key=${apiKey}`)

    console.log(detailsMovie)
    // poster_path / title / release_date / genres.name / popularity
    // overview

    // const movie = detailsMovie && detailsMovie.maps((m) => {
    //     return (
    //         <div>
    //             <h1>m.title</h1>
    //         </div>
    //     )
    // })

    return (
        <div>
            <h1>Detalhes Filme</h1>
            {isLoading ? <p>Carregando...</p> : <Title>{detailsMovie.title}</Title>}
            {isLoading ? <p>Carregando...</p> : <Title>{detailsMovie.overview}</Title>}
            <button onClick={() => goToHomePage(navigate)}>Voltar para a home</button>
        </div>
    )
}