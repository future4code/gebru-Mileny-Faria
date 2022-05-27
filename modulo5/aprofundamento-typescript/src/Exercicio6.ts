

const determinarIdadeHistorica = (ano: number, sigla?: string): string => {
    if(ano > 4000 && sigla === "AC") {
        return "Pré-história"
    } else if(ano <= 4000 && sigla === "AC" || ano < 476) {
        return "Idade Antiga"
    } else if(ano >= 476 && ano < 1453) {
        return "Idade Média"
    } else if(ano >= 1453 && ano < 1789) {
        return "Idade Moderna"
    } else if(ano >= 1789) {
        return "Idade Contemporânea"
    } else {
        return "Digite corretamente"
    }
    
}

console.log(determinarIdadeHistorica(1789, "AC"))

// 100.000 AC = Pré-história
// 4000 AC = Idade Antiga
// 476 DC = Idade Média
// 1453 DC = Idade Moderna
// 1789 DC = Idade Contemporânea
