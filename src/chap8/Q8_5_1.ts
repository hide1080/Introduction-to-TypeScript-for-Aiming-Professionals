import { countWordInFileAsync } from "./Q8_5_common.js"

const num = await countWordInFileAsync("hide", "./hide.txt")

console.log("num: ", num)
  