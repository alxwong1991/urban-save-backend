// add packages
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// require database
const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

// require auths
const jwt = require('jwt-simple');
const authClass = require('./auth/authentication')(knex)
// const bearerToken = require('express-bearer-token');

// setting up built-in middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

// setting up buyers
const BuyerInfoRouter = require('./routers/buyerInfoRouter');
const BuyerInfoService = require('./services/buyerInfoService');
const buyerInfoService = new BuyerInfoService(knex);

// setting up products
const ProductRouter = require('./routers/productRouter');
const ProductService = require('./services/productService');
const productService = new ProductService(knex);

// setting up orders
const OrderRouter = require('./routers/orderRouter');
const OrderService = require('./services/orderService');
const buyerInfoService = require('./services/buyerInfoService');
const orderService = new OrderService(knex);

// setting up routers

// product router
app.use("/api/products", (new ProductRouter(productService)).router());

// order router
app.use("/api/orders", (new OrderRouter(orderService)).router());

// buyers router
app.use(authClass.initialize())
app.use("/api/login", (new BuyerInfoRouter(buyerInfoService)).router());

app.post("/api/login/buyer", (req, res) => {

    if (req.body.email && req.body.password) {
        const email = req.body.email;
        const password = req.body.password;

        const user = users.find((u)=> {
            return u.email === email && u.password === password;
        });
        if (user) {
            let payload = {
                id: user.id,
                is_seller: user.is_seller,

                tokenCreatedDate: new Date().getTime()
            };
            const token = jwt.encode(payload, config.jwtSecret);
            res.json({
                token: token
            });
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401); 

    }
});



    // create a port
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log('Backend is listening on port ' + port);
    });

    // testing server
    app.get("/", (req, res) => {
        res.send('Welcome to Urban Save')
    });