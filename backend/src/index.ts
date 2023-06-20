import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.get('/ping', (req, res) => {
    console.log("Hello Stranger :)")
    res.setHeader("Contet-Type", "applicaton/json")
    res.send("ping");
})

app.get('/hola/:nombre/:apellido', (req, res) => {
    const { nombre, apellido } = req.params

    console.log("Solicitando tus nombre")

    res.setHeader("Contet-Type", "applicaton/json")
    res.send({ nombre, apellido});
})