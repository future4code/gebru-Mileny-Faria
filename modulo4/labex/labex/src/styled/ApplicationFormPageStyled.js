import styled from "styled-components";

export const Imagem = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center top;
`;

export const Title = styled.h1`
  color: white;
  position: absolute;
  z-index: 3;
  margin-top: -50px;
  margin-left: 300px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const Input = styled.input`
  width: 400px;
  border-radius: 6px;
  padding: 5px;
  margin: 6px auto 0;
  position: relative;
`;

export const Select = styled.select`
  width: 400px;
  border-radius: 6px;
  padding: 10px;
  margin: 6px auto 0;
  position: relative;
`;

export const Option = styled.option`
  width: 400px;
  border-radius: 6px;
  padding: 10px;
  margin: 6px auto 0;
  position: relative;
`;

export const ButtonBack = styled.button`
  width: 100px;
  border-radius: 10px;
  padding: 5px;
  position: relative;
`;

export const ButtonSend = styled.button`
  width: 100px;
  border-radius: 10px;
  padding: 5px;
  position: relative;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: grey;
  width: 450px;
  position: absolute;
  top: 350px;
  left: 37.5%;
  border-radius: 6px;
`;
