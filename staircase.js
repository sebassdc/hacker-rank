const staircase = n =>
  Array.from(Array(n), (_, i) => i+1)
    .map(
      e => Array(e)
        .fill('#')
        .join('')
        .padStart(n, ' ')
    ).join('\n')

console.log(staircase(6))