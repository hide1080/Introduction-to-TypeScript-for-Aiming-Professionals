{
  type User = {
    name: string,
    age: number,
    premiumUser: boolean,
  }

  const data: string = `
Taro,20,1
Hanako,18,1
John Smith,22,0
Mary Sue,21,1
`

  const users: User[] = []

  //個々にコードを足す
  for (const line of data.split("\n")) {
    if (line === "") {
      continue
    }
    console.log(`user: ${line}`)
    const [name, ageStr, premiumStr] = line.split(",")
    const age = Number(ageStr)
    const premiumUser = premiumStr === "1"
    users.push({
      name,
      age,
      premiumUser,
    })
  }

  console.log(users)

  for (const user of users) {
    if (user.premiumUser) {
      console.log(`${user.name} (${user.age})はプレミアムユーザーです。`)
    } else {
      console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`)
    }
  }
}