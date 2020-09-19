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
        id_order : req.body.id_order,
        dishes : req.body.dishes
    })

    console.log(req.body.dishes);

    let orderView = new OrderView({
        id_order : req.body.id_order,
        dishes : req.body.dishes
    })

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