import { readFile } from "fs/promises";

export async function countWordInFileAsync(
  targetWord: string, filePath: string): Promise<number> {

    const content = await readFile(filePath, { encoding: "utf-8" })

  let num = 0
  let pos = -1
    
  while ((pos = content.indexOf(targetWord, pos + 1)) >= 0) {
    num++
  }

  return num;
}
