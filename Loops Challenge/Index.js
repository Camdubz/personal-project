// for (var i=0; i<=100; i++) {
//     console.log(i);
// }

// for (var i=0; i <=100; i+=3) {
//     console.log(i);
// }

// var total = 0;

// for (var num=1; num<100; num++) {
//     total = total + num;
    
// }

// console.log("This is your total: " + total);

// var fruits = ["mongo", "banana", "apple", "cherry", "mangostein"];

// for (var i=0; i<fruits.length; i++)
// console.log(fruits[i]);

var data = {
    name: "john",
    age: 28,
    'maritalStatus': true

}

console.log(data["age"]);

for (var elem in data) {
    console.log(elem, data[elem]);
}