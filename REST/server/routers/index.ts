import express from "express"
const router = express.Router()

router.get<{ names: string }>("/greetings", (req, res) => {
  res.send(`Hello ${req.query.names}`)
})

router.get<{ name: string }>("/error", (req, res) => {
  res.status(500).send("This is an error message")
})

export default router
