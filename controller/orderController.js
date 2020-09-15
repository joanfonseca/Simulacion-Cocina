const Order = require('../models/Order');
const OrderView = require('../models/OrderView');

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

let receiveOrder = (req, res, next) => {    
    let order = new Order({
        name : req.body.name,
        type: req.body.type,
        price: req.body.price
    })

    let orderView = new OrderView({
        name : req.body.name,
        type: req.body.type,
        price: req.body.price
    })

    console.log(order);

    order.save((err, newOrder) => {
        if(err){
            res.json({
                ok: false,
                err
            })
        }

        res.status(201).json({
            ok : true,
            order : newOrder
        })
    })

    orderView.save((err, newOrderView) => {
        if(err){
            res.json({
                ok: false,
                err
            })
        }
    })
}


let deleteOrder = async(req, res) => {
    Order.deleteMany({}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
    });
}


module.exports = {
    showOrders,
    receiveOrder,
    deleteOrder
}