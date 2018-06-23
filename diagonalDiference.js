function diagonalDifference(a) {
  const d1 = a.reduce((p, c, i) => c[i] + p, 0)
  const d2 = a.reduce((p, c, i) => c[a.length - i - 1] + p, 0)
  return Math.abs(d1 - d2)
}


console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]])) // 15