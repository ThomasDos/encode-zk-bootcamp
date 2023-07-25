function findModulo(element: number, prime: number) {
  const modulo = element % prime
  console.log(`The modulo of ${element} is ${modulo}`)
  return modulo
}

export default findModulo

findModulo(-13, 5)
