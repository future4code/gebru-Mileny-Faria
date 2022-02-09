import React from "react";
import styled from "styled-components";

const ContainerEtapa3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    text-align: center;
    font-size: 20px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledInputs = styled.input`
    margin: 20px;
    width: 200px;
`;

const StyledButton = styled.button`
    margin: 20px auto;
    width: 120px;
`;

class Etapa3 extends React.Component {
  render () {
    return (
        <ContainerEtapa3>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <StyledForm action="#">
            <label for="nome">7. Por que não terminou?</label>
            <StyledInputs type="text" id="nome" />
            
            <p>8. Você fez algum curso?</p>
            <div>
                <select name="curso">
                    <option value="nenhum">Nenhum</option>
                    <option value="tecnico">Curso técnico</option>
                    <option value="ingles">Curso de Inglês</option>
                </select>
            </div>
        </StyledForm>
      </ContainerEtapa3>
    );
  }
}

export default Etapa3;