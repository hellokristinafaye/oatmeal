// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (const cat of cats) {
//     console.log(cat);
// }

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map();

console.log(upperCats);
// oh I see b/c toUpperCase is a string method, and wouldn't work on an array.  So you gotta make it its own function to make it work on an array. 