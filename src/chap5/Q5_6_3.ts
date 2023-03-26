function createUser(name: string, age: number) {
  if (name === "") {
    throw new Error("name is empty.")
  }

  return (message: string): string => {
    return `${name} (${age}) : ${message}`
  }
}

const message = createUser("Taro", 26)
console.log(message("Hello!"))
