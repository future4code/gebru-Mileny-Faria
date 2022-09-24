import styled from 'styled-components'
import { secondaryColor, neutralColor } from '../../constants/colors'

export const NavBarContainer = styled.nav`
    position: absolute;
    width: 100%;
    height: 450px;
    top: 60px;
    background: ${secondaryColor};
`

export const Image = styled.img`
    position: relative;
    top: 50px;
    left: 80px;
    border-radius: 5px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 1.5);
`

export const Title = styled.p`
    position: absolute;
    margin-top: 0;
    top: 50px;
    left: 400px;
    color: ${neutralColor};
    font-size: 32px;
`

export const Text1 = styled.p`
    position: absolute;
    margin-top: 0;
    top: 100px;
    left: 400px;
    color: ${neutralColor};
    font-size: 18px;
`

export const Text2 = styled.p`
    position: absolute;
    margin-top: 0;
    top: 200px;
    left: 400px;
    color: ${neutralColor};
    font-size: 20px;
    font-weight: bold;
`

export const Text3 = styled.p`
    position: absolute;
    margin-top: 0;
    top: 230px;
    left: 400px;
    color: ${neutralColor};
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.005em;
`

export const ContainerCast = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    top: 650px;
`