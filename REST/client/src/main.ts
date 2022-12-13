import axios from "axios"

const client = axios.create({ baseURL: "http://localhost:3000" })

async function main() {
  const result = await client
    .get("greetings", {
      params: { names: "Kyle" },
    })
    .then(res => res.data)
  console.log(result)

  // await client.get("error").catch(e => console.error(e.response.data))

  // const users = await Promise.all([
  //   client.get("users/byId", { params: { id: "1" } }).then(res => res.data),
  //   client.get("users/byId", { params: { id: "2" } }).then(res => res.data),
  //   client.get("users/byId", { params: { id: "3" } }).then(res => res.data),
  //   client.get("users/byId", { params: { id: "4" } }).then(res => res.data),
  //   client.get("users/byId", { params: { id: "5" } }).then(res => res.data),
  //   client.get("users/byId", { params: { id: "6" } }).then(res => res.data),
  // ])
  // console.log(users.map(user => user.name))

  // const newUser = await client
  //   .post("users/create", { name: "John", age: 12 })
  //   .then(res => res.data)
  // console.log(newUser)

  // const newUserGot = await client
  //   .get("users/byId", { params: { id: newUser.id } })
  //   .then(res => res.data)

  // console.log(newUserGot)
}

main()
