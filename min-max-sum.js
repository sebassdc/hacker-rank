const sumList = arr => arr.reduce((p, c) => p + c, 0)

const miniMaxSum = arr =>
  `${sumList(arr.sort().slice(0, 4))} ${sumList(arr.sort().slice(1))}`

console.log(miniMaxSum([1, 2, 3, 4, 5]))