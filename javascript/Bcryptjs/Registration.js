const bcrypt=require("bcrypt");

let user={
    Name:"Prashanth",
    email:"prashanth@gamail.com",
    password:"1234aa"
}

console.log(user);

const salt=bcrypt.genSaltSync(10);
let newPassword=bcrypt.hashSync(user.password,salt);

user={...user,password: newPassword}
console.log(user);

let result=bcrypt.compareSync("1234aa",user.password);

if(result){
    console.log("login successfull");
}
else{
    console.log("login failed");
}