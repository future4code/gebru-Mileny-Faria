import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordinator'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL, baseImage } from '../../constants/urls'
import { CastCard } from '../../components/CastCard/CastCard'
import { NavBarContainer, Image, Title, Text1, Text2, Text3, ContainerListCast, Title2, ListCast } from './styled'

export const DetailsMoviePage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const apiKey = '0b14b275632acd0fc1cf3dedac88afaa'
    const [ detailsMovie ] = useRequestData({}, `${BASE_URL}/movie/${params.id}?api_key=${apiKey}&language=pt-BR`)
    const [ cast ] = useRequestData({}, `${BASE_URL}/movie/${params.id}/credits?api_key=${apiKey}&language=pt-BR`)

    const size1 = 'w300'
  
    // const year = detailsMovie.release_date.split('-', 1)
    // const date = detailsMovie.release_date.split('-').reverse().join('/')

    const listCast = cast && cast.cast && cast.cast.map((actor) => {
        return(
            <CastCard
                img={actor.profile_path}
                name={actor.name}
                id={actor.id}
            />
        )
    })

    return (
        <div>
            <NavBarContainer>
                <Image src={`${baseImage}${size1}${detailsMovie.poster_path}`} />
                <Title>{detailsMovie.title}</Title>
                <Text1>{detailsMovie.release_date}</Text1>
                <Text2> Sinopse </Text2>
                <Text3>{detailsMovie.overview}</Text3>
            </NavBarContainer>
            <ContainerListCast>
                <Title2>Elenco Original</Title2>
                <ListCast>{listCast}</ListCast>
            </ContainerListCast>
            {/* <button onClick={() => goToHomePage(navigate)}>Voltar para a home</button> */}
            
        </div>
    )
}