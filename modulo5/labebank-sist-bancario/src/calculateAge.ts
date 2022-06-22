export const age = (birth_date: string): number => {

    let currentYear = new Date().getFullYear()
    let currentMonth = new Date().getMonth()
    let birth_day: number =+ birth_date.split('/')[0]
    let birth_month: number =+ birth_date.split('/')[1]
    let birth_year: number =+ birth_date.split('/')[2]

    let age: number = currentYear - birth_year

    if(currentMonth < birth_month) {
        age--
    } else {
        if(currentMonth === birth_month) {
            if(new Date().getDate() < birth_day) {
                age--
            }
        }
    }

    return age
}