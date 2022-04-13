import styled from "styled-components";
import FotoLogin from "../../img/FotoLogin.png";


export const ContainerLoginPage = styled.div`
  position: absolute;
  width:100vw;
  height:100vh;
  background-image: url(${FotoLogin});
  background-repeat: no-repeat;
  background-size:cover;

`


export const ContainerBoxLogin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;

`


export const Title = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-family: sans-serif;

`


export const ContainerInput = styled.div`
  position: relative;

`


export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #ff0043;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  font-family: sans-serif;
    :focus-within {
      top: -20px;
      left: 0;
      color: #ff0043;
      font-size: 12px;
    }
    :valid {
      top: -20px;
      left: 0;
      color: #ff0043;
      font-size: 12px;
    }

`


export const ButtonLogIn = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ff0043;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
    :hover {
      background: #ff0043;
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px #ff0043, 0 0 25px #ff0043, 0 0 50px #ff0043,
        0 0 100px #ff0043;
    }

`


export const ButtonHome = styled.button`
  padding: 10px 20px;
  transition: 0.5s;
  margin-top: 50px;
  margin-left: 1100px;
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

