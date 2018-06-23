const birthdayCakeCandles = ar =>
  ar.filter( e => e === Math.max(...ar)).length

console.log(birthdayCakeCandles([3, 3, 3, 3, 3, 3, 2]))