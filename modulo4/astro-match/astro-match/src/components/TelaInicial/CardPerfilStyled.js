import styled from "styled-components";

export const ContainerPerfil = styled.div`
  padding: 15px;
  display: grid;
  grid-template-rows: 400px 1fr;
`;

export const ContainerPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Blur = styled.img`
  background-image: url(${(props) => props.imagem});
  filter: blur(10px);
  border: 1px solid transparent;
  border-radius: 10px;
  width: 320px;
  height: 430px;
  position: absolute;
  z-index: 1;
  margin-top: 20px;
`;

export const ImagemStilo = styled.img`
  max-width: 300px;
  max-height: 400px;
  z-index: 2;
  border-radius: 10px;
`;

export const ContainerBio = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -90px;
  z-index: 3;
`;

export const NomeEIdade = styled.div`
  margin-left: 40px;
  font-size: 1.5em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-shadow: 0.2em 0.2em 0.3em black;
  color: white;
`;

export const TextoPerfil = styled.p`
  margin: 15px 40px;
  font-size: 1em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-shadow: 0.2em 0.2em 0.3em black;
  color: white;
`;