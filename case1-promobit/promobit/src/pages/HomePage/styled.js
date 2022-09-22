import styled from 'styled-components'
import { secondaryColor, neutralColor } from '../../constants/colors'

export const NavBarContainer = styled.nav`
    position: absolute;
    width: 100%;
    height: 400px;
    top: 60px;
    background: ${secondaryColor};
`

export const Text = styled.h1`
    position: relative;
    width: 50%;
    left: 25%;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    color: ${neutralColor};
`

export const CardsContainer = styled.div`
    position: relative;
    top: 460px;
    width: 100%;
    height: 100vh;
`

export const MovieContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100vh;
`