class Sbi_Bank{
    min_balance=500;

    constructor(id,name,deposit){
        this.id=id;
        this.name=name;
        this.deposit=deposit;
    }

    detail(){
        console.log(this.id+this.name+this.deposit);

    }
}

let c1=new Sbi_Bank(123,'prashan',1000);

console.log(c1);
let c2=new Sbi_Bank(1,'airtel',20000);
console.log(c2);

