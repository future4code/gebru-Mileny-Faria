import styled from 'styled-components'
import { secondaryColor, neutralColor, textColor } from '../../constants/colors'

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

export const Title2 = styled.p`
    position: absolute;
    top: -100px;
    left: 20px;
    color: ${textColor};
    font-size: 28px;
    font-weight: bold;
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

export const ContainerListCast = styled.div`
    position: relative;
    top: 700px;
    left: 60px;
    display: flex;
    align-items: center;
    width: 100%;
`

export const ListCast = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    overflow-y: hidden;
    overflow-x: auto;
        ::-webkit-scrollbar {
        height: 8px;
        background: #DDDDDD;
        }
        ::-webkit-scrollbar-thumb {
        height: 8px;
        background: #ADADAD;
        }
`