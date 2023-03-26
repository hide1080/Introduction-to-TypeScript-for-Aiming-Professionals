function map<T, U>(array: T[], callback: (arg: T) => U): U[] {
  const result: U[] = []
  for (const t of array) {
    result.push(callback(t))
  }
  return result
}

{
  const data = [1, 1, 2, 3, 5, 8, 13]
  const result = map(data, x => x * 10)
  console.log(result)
}

{
  const data = [1, -3, -2, 8, 0, -1]
  const result = map(data, x => x >= 0)
  console.log(result)
}

{
  const data = ["Kobayashi", "Hideki"]
  const result = map(data, (x: string) => x.length)
  console.log(result)
}
