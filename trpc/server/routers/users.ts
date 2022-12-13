import { t } from "../trpc"
import { z } from "zod"
import { randomUUID } from "crypto"

type User = {
  id: string
  name: string
  age: number
}

const USERS: User[] = [
  { id: "1", name: "Kyle", age: 27 },
  { id: "2", name: "Julie", age: 45 },
]

export const usersRouter = t.router({
  byId: t.procedure.input(z.string()).query(req => {
    return USERS.find(user => user.id === req.input)
  }),
  create: t.procedure
    .input(z.object({ name: z.string(), age: z.number() }))
    .mutation(req => {
      const { name, age } = req.input
      const user: User = { id: randomUUID(), name, age }
      USERS.push(user)
      return user
    }),
})
