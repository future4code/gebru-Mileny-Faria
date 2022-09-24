import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordinator'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL, baseImage } from '../../constants/urls'
import { NavBarContainer, Image, Title, Text1, Text2, Text3, ContainerCast } from './styled'

export const DetailsMoviePage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const apiKey = '0b14b275632acd0fc1cf3dedac88afaa'
    const [ detailsMovie ] = useRequestData({}, `${BASE_URL}/movie/${params.id}?api_key=${apiKey}`)
    const [ cast ] = useRequestData({}, 'https://api.themoviedb.org/3/movie/629176/credits?api_key=0b14b275632acd0fc1cf3dedac88afaa')

    const size1 = 'w300'
    const size2 = 'w154'
    // const year = detailsMovie.release_date.split('-', 1)
    // const date = detailsMovie.release_date.split('-').reverse().join('/')

    const listCast = cast && cast.cast && cast.cast.map((actor) => {
        return(
            <ContainerCast>
                <img src={`${baseImage}${size2}${actor.profile_path}`} />
                <p>{actor.name}</p>
            </ContainerCast>
        )
    })

    console.log(listCast)

    return (
        <div>
            <NavBarContainer>
                <Image src={`${baseImage}${size1}${detailsMovie.poster_path}`} />
                <Title>{detailsMovie.title}</Title>
                <Text1>{detailsMovie.release_date}</Text1>
                <Text2> Sinopse </Text2>
                <Text3>{detailsMovie.overview}</Text3>
            </NavBarContainer>
            {listCast}
            <button onClick={() => goToHomePage(navigate)}>Voltar para a home</button>
            
        </div>
    )
}