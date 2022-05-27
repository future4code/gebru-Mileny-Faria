enum Genero {
	ACAO = "ação",
	DRAMA = "drama",
	COMEDIA = "comédia",
	ROMANCE = "romance",
	TERROR = "terror"
}

type Catalogo = {
    nome: string,
    anoLançamento: number,
    genero: Genero,
    pontuação: number
}

