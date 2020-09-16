let doCook = (req, res, next)=>{
    let order = req.body;
    console.log('Cocinando....')
    setTimeout(() => {
        console.log('-------- ',order);
        next();
    }, 1000);    
}

function esperar(){
    setTimeout(() => {
        console.log('Cocinando....')
    }, 10000);
}


module.exports = {
    doCook
}