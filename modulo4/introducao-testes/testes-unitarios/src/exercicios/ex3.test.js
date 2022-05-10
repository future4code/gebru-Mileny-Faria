import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna true para arrays repetidos", () => {
        const temRepetido = checaItensDuplicados([1, 2, 3, 4, 5])
        expect(temRepetido).toContain(true)
    }) 
});
