import styled from "styled-components";
import FotoLogin from "../../img/FotoLogin.png";


export const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-around ;
  width:100vw;
  height:100vh;
  background-image: url(${FotoLogin});
  background-repeat: no-repeat;
  background-size:cover;
  color: #fff;

`

export const ContainerCardTrip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  width: 400px;
  height: 600px;
  background: rgba(0, 0, 0, 1);
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.3);

`

export const Img = styled.img`
  margin: 0 25px;
  width: 300px;
  border-radius: 15px;

`

export const Details = styled.h1`
  color: #ff0043;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 6px;
  margin: 30px 0;
  text-align: center;

`


export const Name = styled.h2`
  color: #ff0043;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 6px;

`

export const NamePlanet = styled.h4`
  color: #ff0043;
  margin-top: -10px ;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 6px;

`

export const DurationInDays = styled.h4`
  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 6px;
  
`

export const Date = styled.h4`
  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
  
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
  padding: 10px 20px;
  transition: 0.5s;
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


export const ButtonAdmin = styled.button`
  padding: 10px 20px;
  transition: 0.5s;
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

export const ButtonLogout = styled.button`
  padding: 10px 20px;
  transition: 0.5s;
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

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px ;

`

export const ContainerButtonsAproved = styled.div`
display: flex;
justify-content: space-around;

`

export const ButtonsAprovDesapr = styled.button`
  padding: 5px;
  transition: 0.5s;
  background: rgba(0, 0, 0, 3);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border: none;
    :hover {
      background: #ff0043;
      color: #fff;
      border-radius: 2px;
      box-shadow: 0 0 5px #ff0043, 0 0 25px #ff0043, 0 0 50px #ff0043,
        0 0 100px #ff0043;
    }
    
`

export const CardTitle = styled.div`
display: flex;
flex-direction: column;

`

export const TextCandidates = styled.p`
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 6px;
  margin: 30px 0;
  text-align: center;

`