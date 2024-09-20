var emp = { id:101,name:"hello"}
   console.log(emp.id);
   console.log(emp.name);
//to add any value
emp.sal=60000
console.log(emp);

//to delete any value
delete emp.id;
console.log(emp);




//for in: to ilterate we use "for in" method

console.log("Using For in Method");
for ( var emps in emp) {
  console.log(emp[emps]);
}



let sizes = {
    id: 101,
    name: "test",
    city: ["Bangalore", "Hyderabad", "Mysore", "Delhi"],
  };
  
  console.log("Sizes Method");
  for (size in sizes) {
    console.log(sizes[size]);
  }
  
  console.log(sizes.city[0]);
  console.log(sizes.name);
  console.log(sizes.city[1]);




