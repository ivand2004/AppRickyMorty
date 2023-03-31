const express = require("express")
const app = express()
const PORT = 3001
const {router} = require("./routes/index")
const morgan = require("morgan")
const cors = require("cors")
const {sequelize} = require("./DB_connection")
const saveDataApi = require("./controllers/saveApiData")

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use("/rickandmorty", router)

sequelize.sync({force: true}).then(async () => { //El force:false me permite mantener los datos en la base de datos, el force: true, borra los datos y me da una tabla nueva
    await saveDataApi();
    app.listen(PORT, () => {
        console.log("Server raised in port " + PORT)
    })
});

// app.listen(PORT, () => {
//     console.log("Server raised in port " + PORT)
// })

