import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInputs = styled.input`
  margin: 20px;
  width: 200px;
`;

class PerguntaAberta extends React.Component {
  render() {
    return (
      <StyledForm action="#">
        <label for="nome">{this.props.pergunta}</label>
        <StyledInputs type="text" id="nome" />
      </StyledForm>
    );
  }
}

export default PerguntaAberta;