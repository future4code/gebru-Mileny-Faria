import styled from "styled-components";

export const Container = styled.div`
background-color: black;
width: 100vw;
height: 100vh;
`

export const LogoStyled = styled.img`
        width: 300px;
        position: absolute;
        margin-top: 50px;
        margin-left: 120px;
`

export const ButtonTrips = styled.button`
        /* position: relative; */
        margin: 50px 200px auto auto;
        font-family: "Gill Sans Extrabold", Helvetica, sans-serif;;
        font-size: 20px;
        letter-spacing: 8px;
        background-color: transparent;
        color: white;
        border: none;
        padding: 10px;
        :hover{
                -webkit-transform: scale(1.3);
                -ms-transform: scale(1.3);
                transform: scale(1.3);
                background:#0c2f50;
                opacity:0.5;
                border-radius: 10px;
        }
`

export const ButtonLogin = styled.button`
        position: fixed;
        margin-top: 0px;
        margin-left: 0px;
        font-family: "Gill Sans Extrabold", Helvetica, sans-serif;;
        font-size: 20px;
        letter-spacing: 8px;
        background-color: transparent;
        color: white;
        border: none;
        padding: 10px;
        :hover{
                -webkit-transform: scale(1.3);
                -ms-transform: scale(1.3);
                transform: scale(1.3);
                background:#0c2f50;
                opacity:0.5;
                border-radius: 10px;
        }
`