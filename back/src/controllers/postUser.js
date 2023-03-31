const {User} = require("../DB_connection");

const postUser = async (req, res) => {
    let {email, password} = req.body;
    if(!email || !password) return res.status(400).json({message: "Faltan datos"})
    try {
       let user = await User.findOrCreate({where :
            {email, password}
        })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = postUser