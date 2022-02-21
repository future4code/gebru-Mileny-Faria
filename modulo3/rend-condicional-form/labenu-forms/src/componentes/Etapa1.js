import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

const ContainerEtapa1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  text-align: center;
  font-size: 20px;
`;

class Etapa1 extends React.Component {
  render() {
    return (
      <ContainerEtapa1>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
        <PerguntaAberta pergunta={"2. Qual sua idade?"} />
        <PerguntaAberta pergunta={"3. Qual seu email?"} />
        <PerguntaOpcoes
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        />
      </ContainerEtapa1>
    );
  }
}

export default Etapa1;
