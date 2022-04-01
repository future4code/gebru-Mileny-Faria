import styled from "styled-components";

export const ContainerProfile = styled.div`
  padding: 15px;
  display: grid;
  grid-template-rows: 400px 1fr;
`;

export const ContainerPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Blur = styled.img`
  background-image: url(${(props) => props.imagem});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(10px);
  border: 1px solid transparent;
  border-radius: 10px;
  width: 320px;
  height: 430px;
  position: absolute;
  z-index: 1;
  margin-top: 20px;
`;

export const Photo = styled.img`
  max-width: 300px;
  max-height: 400px;
  z-index: 2;
  border-radius: 10px;
`;

export const ContainerBio = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -130px;
  z-index: 3;
`;

export const NameAge = styled.div`
  margin-left: 40px;
  font-size: 1.5em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-shadow: 1px 2px 1px black;
  -webkit-text-stroke: 0.3px black;
  color: white;
`;

export const Bio = styled.p`
  margin: 15px 40px;
  font-size: 1em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-shadow: 1px 2px 1px black;
  -webkit-text-stroke: 0.3px black;
  color: white;
`;