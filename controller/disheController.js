const Dishe = require('../models/dishe');


let createDishe = (req, res, next) => {    
    let dishe = new Dishe({
        name : req.body.name,
        dishe_type : req.body.dishe_type,
        price: req.body.price
    })

    dishe.save((err, newDishe) => {
        if(err){
            res.json({
                ok: false,
                err
            })
        }

        res.status(201).json({
            ok : true,
            menu : newDishe
        })
    })
}

let showDishes = (req, res) => {
    Dishe.find({}, (err, data) => {
        if(err){
            return res.json({
                ok: false,
                err
            })
        }
        res.json(data);
    })
}


module.exports = {
    createDishe,
    showDishes
}