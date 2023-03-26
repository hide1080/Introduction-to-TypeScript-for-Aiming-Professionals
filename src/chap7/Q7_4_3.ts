import { countWordInFile } from "./Q7_4_common.js"
import { join } from "path"
import { fileURLToPath } from "url"

const filePath = fileURLToPath(import.meta.url)
const targetPath = join(filePath, '..', 'hide.txt')

countWordInFile("hide", targetPath)
