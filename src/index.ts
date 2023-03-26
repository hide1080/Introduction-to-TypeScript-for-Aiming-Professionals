import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('数値を入力してください: ', (line) => {
  const num = Number(line)
  console.log(`${num} が入力されました。num + 1000 = ${num + 1000}`)
  rl.close()
})

const n = 1
const s = '1'
