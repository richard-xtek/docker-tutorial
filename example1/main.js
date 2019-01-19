import http from "http";
import express from 'express'
function runApp() {
  const app = express()

  app.use('/', (req, res, next) => {
    const content = process.env.CONTENT || 'Empty'
    return res.json({ content })
  })

  const server = http.createServer(app)

  const PORT = process.env.PORT || 3000
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}

runApp()