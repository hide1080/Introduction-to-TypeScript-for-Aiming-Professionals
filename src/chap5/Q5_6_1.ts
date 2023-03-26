class User {
  readonly name: string
  readonly age: number

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("name is empty.")
    }
    this.name = name
    this.age = age
  }

  getMessage(message: string): string {
    return `${this.name} (${this.age}) : ${message}`
  }
}

const taro = new User("Taro", 26)
console.log(taro.getMessage("Hello!"))
