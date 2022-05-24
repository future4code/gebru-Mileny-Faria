const validateStudent = (age: number, schooling: string, hours: number, mode: string): boolean => {
    if(age > 18 && schooling === "sim") {
        if(mode === "integral" && hours >= 40) {
            return true
        } else if(mode === "noturno" && hours >= 20) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(validateStudent(19, "sim", 20, "integral"))