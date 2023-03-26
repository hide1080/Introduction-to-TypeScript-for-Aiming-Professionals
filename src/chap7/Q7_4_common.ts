import { readFileSync } from "fs";

export function countWordInFile(targetWord: string, filePath: string) {
  const content = readFileSync(filePath, { encoding: "utf-8" })

  let num = 0
  let pos = -1
    
  while ((pos = content.indexOf(targetWord, pos + 1)) >= 0) {
    num++
  }
  console.log("num: ", num)
}
