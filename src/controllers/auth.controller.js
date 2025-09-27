const jwt = require ("jsonwebtoken");
const { findUserByUserName, isValidPassword, saveUser } = require("../models/repositories/user.repository");

const postAuthLogin = async (req, res) => {
    const { body } = req;
    const { username, password } = body;

    const user = await findUserByUserName(username);
    if (!user) {
        res.status(400).json({message: "Credenciales invalidas"});
        return;
    }

    const isValidPass = await isValidPassword(password, user.password);

    if(!isValidPass){
        res.status(401).json({message: "Credenciales invalidas"});
        return;
    }

    const token = jwt.sign({ id: user.id, username: user.username },
    process.env.AUTH_SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });

    }


const postAuthSignup = async (req, res) => {
    const { body } = req;
    const { username, name, password, email } = body;

    const user = await findUserByUserName(username);

    if(user){
        res.status(400).json({message: "Nombre de usuario ya en uso"})
        return;
    }

    try {
        await saveUser(name, username, password, email);
        res.status(201).json({message: "usuario registrado exitosamente"})
    } catch (error) {
        res.status(500).json({message: "Ha ocurrido un error inesperado"})
    }
    
}

module.exports = {
    postAuthLogin,
    postAuthSignup
}