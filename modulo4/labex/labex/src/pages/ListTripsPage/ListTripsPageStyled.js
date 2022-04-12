import styled from "styled-components";
import FotoLogin from "../../img/FotoLogin.png";


export const ContainerListTrips = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${FotoLogin});
  background-repeat: no-repeat;
  background-size:cover;

`

export const ListRender = styled.div` 
  display: flex;
  justify-content: start;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
  height: 500px;
  padding-bottom: 60px;
  ::-webkit-scrollbar {
    height: 4px;
    background: black;
    
  }
  ::-webkit-scrollbar-thumb {
    height: 4px;
    background: #ff0043;
  }

`

export const Loading = styled.h1`
  left: 0;
  right: 0;
  margin: 50% auto;
  animation: is-rotating 1s infinite;
  border: 6px solid #ff0043;
  border-radius: 50%;
  border-top-color: #fff;
  height: 50px;
  width: 50px;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }

`

export const ButtonHome = styled.button`
  margin-top: -500px;
  padding: 10px 20px;
  transition: 0.5s;
  height: 70px;
  background-color: transparent;
  border: none;
  :hover {
    background: #ff0043;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #ff0043, 0 0 25px #ff0043, 0 0 50px #ff0043,
      0 0 100px #ff0043;
  }

`
