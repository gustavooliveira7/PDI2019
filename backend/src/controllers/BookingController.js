const Booking = require('../models/Booking');

module.exports = {
    async store(req, res){
        const {usuario} = req.headers;
        const {spot_id} = req.params;
        const {date} = req.body;

        console.log(usuario);
        console.log(spot_id);
        console.log(date);


        const booking = await Booking.create({
            user : usuario,
            spot : spot_id,
            date,
        });

        await booking.populate('spot').populate('user').execPopulate();
        return res.json(booking);
    }
}