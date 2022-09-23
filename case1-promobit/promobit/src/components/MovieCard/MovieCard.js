import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MovieCardContainer, TextContainer, Title, Date } from './styled'
import { goToDetailsMoviePage } from '../../routes/coordinator'

export const MovieCard = (props) => {
  const navigate = useNavigate()

  return (
    <MovieCardContainer
      onClick={() => goToDetailsMoviePage(navigate)}
      key={props.id}>
        <img src={props.img} />
        <TextContainer>
          <Title>{props.title}</Title>
          <Date>{props.date}</Date>
        </TextContainer>
    </MovieCardContainer>
  )
}
