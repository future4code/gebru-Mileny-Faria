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