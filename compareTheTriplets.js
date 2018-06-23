function solve(A, B) {
  const f = e => e > 0 ? 1 : 0
  return [
    A.reduce((p, c, i) => f(c - B[i]) + p, 0),
    B.reduce((p, c, i) => f(c - A[i]) + p, 0)
  ]
}

console.log(solve([5, 6, 7], [3, 6, 10])) // 1 1
console.log(solve([5, 7, 7], [3, 6, 10])) // 2 1