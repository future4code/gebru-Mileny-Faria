type List = {
    name: string,
    email: string,
    role: string

}

const list: List[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const returnEmails = (array: List[]): List[] => {
    return list.filter((user) => {
        if(user.role === "admin") {
            return user
        }
    })

}

console.log(returnEmails(list))