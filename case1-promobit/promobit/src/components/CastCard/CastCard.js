import React from 'react'
import { CastContainer, Image, Name } from './styled'
import { baseImage } from '../../constants/urls'

export const CastCard = (props) => {
    const size = 'w154'

    return (
        <CastContainer key={props.id}>
            <Image src={`${baseImage}${size}${props.img}`}/>
            <Name>{props.name}</Name>
        </CastContainer>
    )
}