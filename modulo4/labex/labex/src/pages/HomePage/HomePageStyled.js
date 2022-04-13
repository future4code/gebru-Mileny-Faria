import styled from "styled-components";
import FotoHomePage from "../../img/FotoHomePage.png";

export const ContainerHome = styled.div`
    position: absolute;
    width:100vw;
    height:100vh;
    background-image: url(${FotoHomePage});
    background-repeat: no-repeat;
    background-size:cover;

`

export const Logo = styled.img`
    position: absolute;
    width: 300px;
    margin-top: 40px;
    margin-left: 60px;

`

export const ContainerButtons = styled.div`
    display: flex;
    width: 300px;
    margin-top: 60px;
    justify-content: space-around;
    margin-left: 1000px;

`

export const Buttons = styled.div`
    padding: 10px 20px;
    color: #ff0043;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    :hover {
    background: #ff0043;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #ff0043, 0 0 25px #ff0043, 0 0 50px #ff0043,
        0 0 100px #ff0043;
    }

`