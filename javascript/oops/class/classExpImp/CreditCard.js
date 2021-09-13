const Address=require("./Address");

class CreditCard{
    constructor(cc_No,address){
        this.cc_No=cc_No;
        this.address=address;
    }
}

let cc=new CreditCard(444,new Address(99,"marathahalli","Noida","UP"));
console.log(cc.address.state);