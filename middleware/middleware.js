var randomNormal = require('random-normal');

//postre = 500;
//fuerte = 1000;
//entrada = 800;

var cookOne = {
    starterDish: 1000,
    mainDish: 1000,
    dessert: 250
};

var cookTwo = {
    starterDish: 1000,
    mainDish: 1000
};

let doCook = (req, res, next)=>{
    let order  = req.body.dishes;
    let time = 0;
    order.forEach(element => {
        let dishe = element.dishe_type;        
        time += chooseCook(dishe);        
    });
    console.log(time);
    setTimeout(() => {
        console.log('Cocinando-------- ',order);
        next();
    }, time);
}

function timeOfCookOne(dishe){
    var result = 0;
    if(dishe == "entrada"){
        result = Math.floor(randomNormal({mean: cookOne.starterDish, dev: cookOne.starterDish * 0.2}));
    }
    if(dishe == "fuerte"){
        result = Math.floor(randomNormal({mean: cookOne.mainDish, dev: cookOne.mainDish * 0.2}));
    }
    if(dishe == "postre"){
        result = Math.floor(randomNormal({mean: cookOne.dessert, dev: cookOne.dessert * 0.2}));
    }
    console.log('cocinero 1 cocinó ', dishe, ' en ', result,' tiempo');
    return result;
}

function timeOfCookTwo(dishe){
    var result = 0;
    if(dishe == "entrada"){
        result = Math.floor(randomNormal({mean: cookTwo.starterDish, dev: cookOne.starterDish * 0.2}));
    }
    if(dishe == "fuerte"){
        result = Math.floor(randomNormal({mean: cookTwo.mainDish, dev: cookOne.mainDish * 0.2}));
    }
    console.log('cocinero 2 cocinó ', dishe, ' en ', result,' tiempo');
    return result;
}

function chooseCook(dishe){
    let random = Math.random();
    if(dishe == "postre"){
        return timeOfCookOne(dishe);
    }
    if(random < 0.5){
        return timeOfCookOne(dishe)
    }else{
        return timeOfCookTwo(dishe)
    }
}

module.exports = {
    doCook
}