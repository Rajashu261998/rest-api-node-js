const {UserModdel} = require("../model/user.model")

const getUser = async (req, res, next) =>{
    let users;
    try{
        users = await UserModdel.find()
        next()
    }
    catch(err){
        console.log(err)
    }
    if(!users){
        return res.status(404).json({"msg":"No users found "})
    }
    return res.status(200).json({users})
}

module.exports={
    getUser
}