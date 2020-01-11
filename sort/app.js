/********Array sort() method*********/
// default order: ascending.
// sorts array in place (doesn't create a copy).
// sort in alphabetical order.
// return the sorted array.

//Examples:
const arr = ["carrot", "apple", "banana"];
arr.sort();

/* const arr = ["carrot", "apple", "Banana"];
arr.sort(); */

/* const arr = [3, 10, 2];
arr.sort(); */

//Compare Function

/* const arr = [3, 10, 2, 2];
arr.sort(function (a, b) {
    if (a < b) return -1;
    if (a > b) return +1;
    return 0;
}); */

/* const arr = [3, 10, 2, 2];
arr.sort(function(a, b) {
  return a - b
}); */

/* const arr = [
  { name: "Islam", age: 20 },
  { name: "Ahmed", age: 32 },
  { name: "Nabil", age: 24 }
]; */

/* arr.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
}); */

/* arr.sort(function (a, b) {
    return a.age - b.age;
}); */








