// index, show, store, update, destroy
const User = require('../models/User');
module.exports = {
    async index(req, res) {
        const users = await User.find();

        return res.json(users);
    },
   
    async destroy(req, res) {
        const {user_id} = req.headers;
        const user = await User.findById(user_id);

        if (!user){
            return res.status(400).json({
                error : 'User does not exists',
            })
        } else {
            await User.findByIdAndDelete(user_id);
            return res.status(200).json({
                Return : 'User deleted!',
            })
        }        
    },

    async store(req, res) {
        const { email } = req.body;
        let user = await User.findOne({email});

        if (!user){
            user = await User.create({email});
        }
        // const user = await User.create({email});
        return res.json(user);
    }
};