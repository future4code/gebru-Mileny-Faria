import styled from "styled-components"

export const Container = styled.div`
background: #0E0F17;
width: 100vw;
height: 100vh;
`


export const ContainerCard = styled.div`
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
`;

export const Titulo = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-family: sans-serif;
`;

export const ContainerInput = styled.div`
  position: relative;
`;


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
`;

export const Button = styled.button`
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
`;

export const Span = styled.span`
  position: absolute;
  display: block;
  :nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff0043);
    animation: btn-anim1 1s linear infinite;
    @keyframes btn-anim1 {
      0% {
        left: -100%;
      }
      50%,
      100% {
        left: 100%;
      }
    }
  }
  :nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #ff0043);
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
    @keyframes btn-anim2 {
      0% {
        top: -100%;
      }
      50%,
      100% {
        top: 100%;
      }
    }
  }
  
  
`;

export const ButtonHome = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ff0043;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 530px;
  margin-left: 400px;
  letter-spacing: 4px;
  :hover {
    background: #ff0043;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #ff0043, 0 0 25px #ff0043, 0 0 50px #ff0043,
      0 0 100px #ff0043;
  }
`;

export const ButtonBack = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ff0043;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 500px;
  margin-left: 350px;
  letter-spacing: 4px;
  :hover {
    background: #ff0043;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #ff0043, 0 0 25px #ff0043, 0 0 50px #ff0043,
      0 0 100px #ff0043;
  }
`;