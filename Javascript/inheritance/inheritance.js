class Account{
    acc_id;
    acc_name;
    acc_bal;

    constructor(id,name){
        console.log("My Parent class");
        this.acc_id=id;
        this.acc_name=name;
    }
}



class Savings extends Account{
    constructor(id,name,bal){
      super(id,name) ; 
        console.log("Child Class Constructor");
        this.acc_bal=bal;
    }

    getbal(){
        console.log("My get balance Account");
        return this.acc_bal;
    }
}


let s1 = new Savings(101,"Mona",112000);
   s1.getbal();
   console.log(s1);








