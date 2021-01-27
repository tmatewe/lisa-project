let numbers = document.querySelector("#numbers");
let button = document.querySelector(".btn-outline-dark");
let array = [
  1,
  2,
  3,
  4,
  5,
  6,
  8,
  9,
  10,
  12,
  13,
  14,
  15,
  16,
  18,
  20,
  23,
  24,
  25,
  26,
  28,
  30,
  31,
  34,
  35,
  36,
  38,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
];

let sortedArr = array.sort(() => 0.5 - Math.random());
console.log(sortedArr);

let sixSortedArr = [
  sortedArr[0],
  sortedArr[1],
  sortedArr[2],
  sortedArr[3],
  sortedArr[4],
  sortedArr[5],
];

sixSortedArr.forEach((num) => {
  numbers.innerHTML += `<button class="btn btn-danger btn-sm">${num}</button>`;
});

button.addEventListener("click", () => {
  location.reload();
});
