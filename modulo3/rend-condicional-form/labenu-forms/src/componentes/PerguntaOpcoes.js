import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled.select`
  display: flex;
  text-align: center;
  font-size: 15px;
  margin: 20px auto;
`;

const StyledOption = styled.option`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class PerguntaOpcoes extends React.Component {
  opcoes = this.props.opcoes.map((opcao) => {
    return <StyledOption>{opcao}</StyledOption>;
  });

  render() {
    return (
      <StyledForm action="#">
        <label>
          {this.props.pergunta}
          <StyledSelect>{this.opcoes}</StyledSelect>
        </label>
      </StyledForm>
    );
  }
}

export default PerguntaOpcoes;