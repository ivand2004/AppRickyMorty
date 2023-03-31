const {User} = require("../DB_connection")

const login = async (req, res) => {
    let {email, password} = req.body;
    if(!email || !password) return res.status(400).json({message: "Faltan datos"})
    try {
        let user = await User.findOne({where: {email: email}})
        if(!user) return res.status(404).json({message: "Usuario no encontrado"})
        if(user.password !== password) return res.status(403).json({message: "Password incorrecta"})
        return res.status(200).json({access:true})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


module.exports = login