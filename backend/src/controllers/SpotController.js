const User =  require('../models/User');
const Spot = require('../models/Spot');

module.exports={
    async index (req, res){
        const { tech } = req.query;

        const spots = await Spot.find({techs: tech});
        
        return res.json(spots);
    },
  
    async store(req, res){
        const {filename} = req.file;
        const {company, techs, price} = req.body;
        const {usuario} = req.headers;

        console.log(usuario);
        

        //verificar se usuario existe
        const userFind = await User.findById(usuario);

        if (!userFind){
            return res.status(400).json({
                error : 'User does not exists',
            })
        }

        const spot = await Spot.create({
            user: usuario,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot);
    }
}