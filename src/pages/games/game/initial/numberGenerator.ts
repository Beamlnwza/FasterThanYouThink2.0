const numberGenerator = (range: number): number[] => {
  const numbers: number[] = []
  while (numbers.length < range) {
    const number = Math.floor(Math.random() * 10)
    numbers.push(number)

    //check if last number is condition
    if (condition(numbers)) {
      numbers.pop()
    }
  }
  return numbers
}

const condition = (numbers: number[]): boolean => {
  let numberdict: { [key: string]: number } = {}
  numbers.forEach((number) => {
    numberdict[number] = numberdict[number] ? numberdict[number] + 1 : 1
  })

  if (numberdict[numbers[numbers.length - 1]] > 2) {
    return true
  }

  if (numbers[numbers.length - 1] === 0) {
    if (numberdict['0'] >= 2) {
      return true
    }
  }

  return false
}

export default numberGenerator
