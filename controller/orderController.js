const Order = require('../models/Order');

let showOrders = (req, res) => {
    Order.find({}, (err, data) => {
        if(err){
            return res.json({
                ok: false,
                err
            })
        }
        res.json(data);
    })
}

let saveOrder = (req, res) => {    
    let order = new Order({
        name : req.body.name,
        type: req.body.type,
        price: req.body.price
    })

    console.log(order);

    order.save((err, newOrder) => {
        if(err){
            return res.json({
                ok: false,
                err
            })
        }

        return res.status(201).json({
            ok : true,
            order : newOrder
        })
    })
}


module.exports = {
    showOrders,
    saveOrder
}