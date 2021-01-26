const { Router } = require('express');
const router = new Router();
const { db } = require('./../db');

router.post('/', (req, res) => {
    let order = req.body.id;
    db.get('cart').push(order);
    res.send({order: order})
})

router.delete('/', (req, res) => {

})

module.exports = router;
