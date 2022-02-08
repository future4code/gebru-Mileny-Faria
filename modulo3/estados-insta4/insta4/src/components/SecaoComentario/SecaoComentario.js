import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		comentarios: [""],
		inputComentario: "",
		valorInputComentario: ""
	}

	adicionaComentario = () => {
		const novoComentario = {
		  comentarios: this.state.valorInputComentario
		};
	
		const novosComentarios = [...this.state.comentarios, novoComentario];
	
		this.setState({comentarios: novosComentarios});
		this.setState({inputComentario: ""})
	  };

	onChangeComentario = (event) => {
		this.setState({inputComentario: event.target.value})
	}

	render() {
		const listaDeComentarios = this.state.comentarios.map((comentario) => {
			return (
			<div>
				<InputComentario
				placeholder={'Comentário'}
				value={this.state.inputComentario}
				onChange={this.onChangeComentario}
				/>
				<button onClick={this.props.aoEnviar} onClick={this.adicionaComentario}>Enviar</button>
				</div>
			);
		}
	);

		return <CommentContainer>
			{listaDeComentarios}
		</CommentContainer>
	}
}
