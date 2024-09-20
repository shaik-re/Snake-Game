class Account{
    acc_id;
    acc_name;
    acc_bal;
    min_bal = 1000;

    constructor(id, name, bal){
        console.log("My Constructor Method");
        this.acc_id = id;
        this.acc_name=name;
        this.acc_bal=bal;
    }

    getbal(){
        console.log("My Get Method");
        return this.acc_bal
    }
}

let a1 = new Account(101,"Mona",115000);
console.log (a1.getbal());