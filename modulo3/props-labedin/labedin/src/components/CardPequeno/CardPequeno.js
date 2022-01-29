import React from 'react';
import styled from 'styled-components'

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 70px;

`

const Imagem = styled.img`
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
`

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <Imagem src={props.imagem} />
            <p>{props.texto}</p>
        </SmallCardContainer>
    )
}

export default CardPequeno;