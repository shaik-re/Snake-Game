var i = "hello";
//length

console.log(i);
console.log(i.length);

//include
console.log(i.includes("e"));

//replace
var b=i.replace("good", "morning");
console.log(b);

//replaceall
var e = i.replaceAll("hello", "morning");
    console.log(e);

//lowercase
var f= e.toLocaleLowerCase();
console.log(f);

var g = e.toLocalUpperCase();
console.log(g);



var f = "GoodMorning";
//substring
//Here 5 is the index of f and 9 is the length of the string
console.log(f.substring(5, 9));

