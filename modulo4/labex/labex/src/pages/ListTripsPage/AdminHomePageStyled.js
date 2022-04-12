import styled from "styled-components";
import FotoAppForm from "../../img/FotoAppForm.png";


export const ContainerAdmin = styled.div`
  position: absolute;
  display: flex;
  align-items: start;
  justify-content: end;
  width:100vw;
  height:100vh;
  background-image: url(${FotoAppForm});
  background-repeat: no-repeat;
  background-size:cover;

`


export const ButtonHome = styled.button`
  padding: 10px 20px;
  transition: 0.5s;
  /* margin-top: 30px; */
  /* left: 20px; */
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


export const ListTrip = styled.button`
  background-color: transparent;
  border: none;
  color: #ff0043;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  overflow: hidden;
  transition: 0.5s;
  padding: 10px 20px;
    :hover {
    background: #ff0043;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #ff0043, 0 0 25px #ff0043, 0 0 50px #ff0043,
      0 0 100px #ff0043;
  }

`


export const ContainerListTrips = styled.div`
  margin-top: 150px;
  margin-right: 400px;
  margin-left: 30px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.8);
  padding: 30px;
  max-height: 50vh ;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 4px;
    background: black;
    
  }
  ::-webkit-scrollbar-thumb {
    width: 4px;
    background: #ff0043;
  }
`


export const Delete = styled.div`
  padding: 5px;
    :hover {
      background: #ff0043;
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px #ff0043, 0 0 25px #ff0043, 0 0 50px #ff0043,
        0 0 100px #ff0043;
    }
    
`


export const BoxList = styled.div`
  display: flex;
  align-items: center;
  /* width: 430px; */
  overflow: auto;
    ::-webkit-scrollbar {
    width: 6px;
    background: black;
    border: solid 0.5px #ff0043;
  }
  ::-webkit-scrollbar-thumb {
    width: 6px;
    background: #ff0043;
  }
  ::-webkit-scrollbar-button {
    width: 6px;
    background: #ff0043;
  }

`


export const ButtonCreateTrip = styled.button`
  width: 300px;
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  color: #ff0043;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  /* margin-top: 50px; */
  letter-spacing: 4px;
    :hover {
      background: #ff0043;
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px #ff0043, 0 0 25px #ff0043, 0 0 50px #ff0043,
        0 0 100px #ff0043;
    }

`


export const ButtonDetailsTrip = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  color: #ff0043;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 55px;
  letter-spacing: 4px;
    :hover {
      background: #ff0043;
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px #ff0043, 0 0 25px #ff0043, 0 0 50px #ff0043,
        0 0 100px #ff0043;
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


export const ButtonLogout = styled.button`
  padding: 10px 20px;
  transition: 0.5s;
  /* margin-top: 30px; */
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


export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-right: 20px;

`

