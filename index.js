let numbers = document.querySelector("#numbers");
let button = document.querySelector(".btn-outline-dark");
let array = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
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
