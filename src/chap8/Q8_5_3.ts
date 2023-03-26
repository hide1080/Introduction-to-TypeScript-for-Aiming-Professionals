import { countWordInFileAsync } from "./Q8_5_common.js"

const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration)
  })
}

Promise.race([
  countWordInFileAsync("hide", "./hide.txt"),
  sleepReject(1),
]).then(
  (result: number) => console.log("Complete:", result),
  (error: unknown) => console.log("Timeout")
)

Promise.race([
  countWordInFileAsync("hide", "./hide.txt"),
  sleepReject(3),
]).then(
  (result: number) => result,
  (error: unknown) => ""
).then(result =>
  console.log("Finished: ", result)
)
