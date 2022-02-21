import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";

const ContainerEtapa2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  text-align: center;
  font-size: 20px;
`;

class Etapa2 extends React.Component {
  render() {
    return (
      <ContainerEtapa2>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <PerguntaAberta pergunta={"5. Qual curso?"} />
        <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
      </ContainerEtapa2>
    );
  }
}

export default Etapa2;