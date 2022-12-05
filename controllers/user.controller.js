module.exports.findAll = (req,res)=>{

res.send("Tüm Kullanıcılar")
}


module.exports.create = (req, res)=>{
const name = req.body.name
 res.send(`${name} isimli kullanıcı eklendi`)

}
