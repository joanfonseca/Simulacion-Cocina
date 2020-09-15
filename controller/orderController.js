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

let showOrdersViews = (req, res) => {
    OrderView.find({}, (err, data) => {
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


let deliverOrder = async(req, res) => {
    Order.find({}, (err, data) => {
        if(err){
            return res.json({
                ok: false,
                err
            })
        }
        res.json(data);
    })
    Order.deleteMany({}, function(err, result) {
        if (err) {
          res.send(err);
        }
    });
}


module.exports = {
    showOrders,
    receiveOrder,
    deliverOrder,
    showOrdersViews
}