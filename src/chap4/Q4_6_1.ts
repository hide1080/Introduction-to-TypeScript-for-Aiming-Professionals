const fizzBuzz4 = (): void => {
  for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i)
    console.log(message)
  }
}

const getFizzBuzzString = (i: number) => {
  if (i % 3 == 0 && i % 5 == 0) {
    return 'FizzBuzz'
  } else if (i % 3 == 0) {
    return 'Fizz'
  } else if (i % 5 == 0) {
    return 'Buzz'
  } else {
    return i
  }
}

const sequence = (from: number, to: number): number[] => {
  const result: number[] = []
  for (let i = from; i <= to; i++) {
    result.push(i)
  }
  return result
}

fizzBuzz4()
