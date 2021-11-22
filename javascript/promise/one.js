let employees = [
    { id: 101, name: "Rahul Gangdhi", sal: 45000 },
    { id: 102, name: "Priyanka Vadra", sal: 55000 },
  ];
  
  let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        employees.push(emp);
        getEmployee();
      }, 2000);
    });
  };
  let getEmployee = () => {
    setTimeout(() => {
      let rows = "";
      employees.forEach((employee) => {
        rows += `<tr><td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.sal}</td>
        </tr>`;
      });
      document.getElementById("tbody").innerHTML = rows;
    }, 1000);
  };
  
  createEmployee({ id: 103, name: "Sonia Gandhi", sal: 50000 })
    .then(() => {
        getEmployee();
    })
    .catch((err) => {
      console.log(err);
    });