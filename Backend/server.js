const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const cartRoute = require('./routes/cart');
const productRoute = require('./routes/products');

app.use('/cart', cartRoute);
app.use('/products', productRoute);

const port = 3000;
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});