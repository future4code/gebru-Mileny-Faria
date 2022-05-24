const operation = (num1: number, num2: number): void => {
    const sum = num1 + num2
    console.log(`A soma de ${num1} e ${num2} é ${sum}`)
    const sub = num1 - num2
    console.log(`A subtração de ${num1} e ${num2} é ${sub}`)
    const mult = num1 * num2
    console.log(`A multiplicação de ${num1} e ${num2} é ${mult}`)

    if(sum > sub && sum > mult) {
        console.log(`O número maior é ${sum}`)
    } else if(sub > mult) {
        console.log(`O número maior é ${sub}`)
    } else {
        console.log(`O número maior é ${mult}`)
    }   
}

operation(5, 20)