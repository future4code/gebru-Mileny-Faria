import React from 'react'
import { HeaderContainer, ImageLogo } from './styled'
import Vector from '../../assets/Vector.png'

export const Header = () => {
    return(
        <HeaderContainer>
            <ImageLogo src={Vector}/>
        </HeaderContainer>
    )
}