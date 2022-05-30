const returnSentence = (name: string, birth: string): string => {
  const separates = birth.split("")

  if (separates[3] === "0") {
    switch (separates[4]) {
      case "1":
        return `Olá me chamo ${name}, nasci no dia ${separates[0]}${separates[1]} do mês de janeiro do ano de ${separates[6]}${separates[7]}${separates[8]}${separates[9]}`
      case "2":
        return `Olá me chamo ${name}, nasci no dia ${separates[0]}${separates[1]} do mês de fevereiro do ano de ${separates[6]}${separates[7]}${separates[8]}${separates[9]}`
      case "3":
        return `Olá me chamo ${name}, nasci no dia ${separates[0]}${separates[1]} do mês de março do ano de ${separates[6]}${separates[7]}${separates[8]}${separates[9]}`
      case "4":
        return `Olá me chamo ${name}, nasci no dia ${separates[0]}${separates[1]} do mês de abril do ano de ${separates[6]}${separates[7]}${separates[8]}${separates[9]}`
      case "5":
        return `Olá me chamo ${name}, nasci no dia ${separates[0]}${separates[1]} do mês de maio do ano de ${separates[6]}${separates[7]}${separates[8]}${separates[9]}`
      case "6":
        return `Olá me chamo ${name}, nasci no dia ${separates[0]}${separates[1]} do mês de junho do ano de ${separates[6]}${separates[7]}${separates[8]}${separates[9]}`
      case "7":
        return `Olá me chamo ${name}, nasci no dia ${separates[0]}${separates[1]} do mês de julho do ano de ${separates[6]}${separates[7]}${separates[8]}${separates[9]}`
      case "8":
        return `Olá me chamo ${name}, nasci no dia ${separates[0]}${separates[1]} do mês de agosto do ano de ${separates[6]}${separates[7]}${separates[8]}${separates[9]}`
      case "9":
        return `Olá me chamo ${name}, nasci no dia ${separates[0]}${separates[1]} do mês de setembro do ano de ${separates[6]}${separates[7]}${separates[8]}${separates[9]}`
      default:
        return "deu errado"
    }
  } else if (separates[3] === "1") {
    switch (separates[4]) {
      case "0":
        return `Olá me chamo ${name}, nasci no dia ${separates[0]}${separates[1]} do mês de outubro do ano de ${separates[6]}${separates[7]}${separates[8]}${separates[9]}`
      case "1":
        return `Olá me chamo ${name}, nasci no dia ${separates[0]}${separates[1]} do mês de novembro do ano de ${separates[6]}${separates[7]}${separates[8]}${separates[9]}`
      case "2":
        return `Olá me chamo ${name}, nasci no dia ${separates[0]}${separates[1]} do mês de dezembro do ano de ${separates[6]}${separates[7]}${separates[8]}${separates[9]}`
      default:
        return "deu errado de novo"
    }
  } else {
    return "deu erro"
  }
}

console.log(returnSentence("Mileny", "20/01/1983"))