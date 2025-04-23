import express from 'express'
import tipRoutes from './routes/tip.routes.js'
import cors from 'cors'

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200
}

app.use('/api/tip', cors(corsOptions), tipRoutes)

app.listen(3000, () => {
    console.log('Servidor funcionando!')
})