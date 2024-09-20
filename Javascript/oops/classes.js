class Account{
    accbal;
    min_bal=1000;

    openAccount(){
        return "your Account opened successfully";
    }

    deposit(amount){
       //this keyword is used to re
        return this.accbal = this.min_bal+amount;
    }

    getbal(){
        return this.accbal;
    }

    withdraw(amount){
        return this.accbal-amount;

    }
}


let a1 = new Account();
let open = a1.openAccount();
console.log(open);
console.log(a1.deposit(4000));
console.log(a1.getbal());
console.log(a1.withdraw(2000));
