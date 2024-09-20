let emp={id:101,name:"Mona"}
let details = {Email:"mona@gmail.com",Location:"Benglore"}

let emp1={...emp}
console.log(emp);
console.log(emp1);

let data={...emp1,...details}
   console.log(data);