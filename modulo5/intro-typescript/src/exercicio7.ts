const toConvert = (dna: string): string => {
    const substituicao: any = {
        A: "U",
        T: "A",
        C: "G",
        G: "C"
    }
    const rna = dna.replace(/A|T|C|G/g, function(item){
        let it = substituicao[item]
        let itemLista = it.replace(/(?:^|\s)\S/g, function(element: any) {
            return element.toUpperCase()})
        return itemLista
    })

    return rna
}

console.log(toConvert("ATTGCTGCGCATTAACGACGCGTA"))