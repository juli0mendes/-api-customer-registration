const express = require('express')
const app = express()
const router = require('./routes/serverRoutes') 
const port = 4000;

app.use(express.json());
app.use(router)

app.listen(port, () => {
  console.log(`Api rodando => http://localhost:${port}`)
})