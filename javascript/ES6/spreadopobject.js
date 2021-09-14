let login={
    name:"prashanth",
    email:"prashanth@gmail.com",
    password:"1234"
}

let details={
    email:"prashanth@gmail.com",
    address:"96,Marathalli",
    city:"Bangalore"
}

let login_details={...login,...details}
console.log(login_details)