import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

const ContainerEtapa3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  text-align: center;
  font-size: 20px;
`;

class Etapa3 extends React.Component {
  render() {
    return (
      <ContainerEtapa3>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <PerguntaAberta pergunta={"7. Por que não terminou?"} />
        <PerguntaOpcoes
          pergunta={"8. Você fez algum curso?"}
          opcoes={["Nenhum", "Curso técnico", "Curso de Inglês"]}
        />
      </ContainerEtapa3>
    );
  }
}

export default Etapa3;