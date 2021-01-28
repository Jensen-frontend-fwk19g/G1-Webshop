
const { Router } = require('express');
const router = new Router();
const { db } = require('../db');

router.get('/', (req, res) => {
    // res.status(200).
    // json({ message: "You can post this to the end point ! ",
    // app: "Express-Routes"})
    let outletItems = db.get('outlet').value();
    res.send({outlet: outletItems});
})

module.exports = router;
