let Employees = [{id:101,name:"Lokesh",sal:20000},{id:102,name:"kiran",sal:35000}];

let createEmployee =(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            Employees.push(emp);
            getEmployees();
        },3000);
    });
}

let getEmployees= ()=>{
    setTimeout(()=>{
        let rows = "";
        Employees.forEach(()=>{
            rows += `<tr><td>${Employees.id}</td>
            <td>${Employees.name}</td>
            <td>${Employees.sal}</td>
            </tr>`;
        });
        document.getElementById("Async").innerHTML = rows;
    },1000)
}

let data = async()=>{
    await createEmployee({id:122,name:"vashir",sal:29000});
    getEmployees();
}

