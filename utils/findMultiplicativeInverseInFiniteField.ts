function findMultiplicativeInverseInFiniteField(element: number, prime: number) {
  let inverse: number = 0
  for (let i = 1; i < prime; i++) {
    if ((element * i) % prime === 1) {
      inverse = i
      break
    }
  }

  console.log(`The multiplicative inverse of ${element} in the field of ${prime} is ${inverse}`)

  return inverse
}

findMultiplicativeInverseInFiniteField(3, 7)

export default findMultiplicativeInverseInFiniteField
