import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MovieCardContainer, TextContainer, Title, Date } from './styled'
import { goToDetailsMoviePage } from '../../routes/coordinator'

export const MovieCard = (props) => {
  const navigate = useNavigate()

  const date = props.date.split('-').reverse().join(' ')

  return (
    <MovieCardContainer
      onClick={() => goToDetailsMoviePage(navigate, props.id)}
      key={props.id}>
        <img src={props.img} />
        <TextContainer>
          <Title>{props.title}</Title>
          <Date>{date}</Date>
        </TextContainer>
    </MovieCardContainer>
  )
}
