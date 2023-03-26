const fizzBuzz = (upTo: number): void => {
  for (let i = 1; i <= upTo; i++) {
    let buf: number | string
    if (i % 3 == 0 && i % 5 == 0) {
      buf = 'FizzBuzz'
    } else if (i % 3 == 0) {
      buf = 'Fizz'
    } else if (i % 5 == 0) {
      buf = 'Buzz'
    } else {
      buf = i
    }
    console.log("fizzBuzz result: ", buf)
  }
}

fizzBuzz(100)

const fizzBuzzHorizon = (upTo: number): void => {
  let buf: (number | string)[] = []
  for (let i = 1; i <= upTo; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      buf.push('FizzBuzz')
    } else if (i % 3 == 0) {
      buf.push('Fizz')
    } else if (i % 5 == 0) {
      buf.push('Buzzz')
    } else {
      buf.push(i)
    }
  }
  console.log("fizzBuzzHorizon result: ", buf.join(' '))
}

fizzBuzzHorizon(100)