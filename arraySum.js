function simpleArraySum(ar) {
  return ar.reduce((p, n) => p + n, 0)
}

console.log(simpleArraySum([1, 2, 3])) // 6