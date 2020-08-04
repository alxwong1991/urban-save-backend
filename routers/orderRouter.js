const express = require('express');

class orderRouter {
    constructor(orderService) {
        this.orderService = orderService;
    }
    router() {
        let router = express.Router()
        router.get("/chair-order", this.getChairsOrders.bind(this));
        router.post("/chair-order", this.postChairsOrders.bind(this));
        router.put("/chair-order/id:", this.putChairsOrderes.bind(this));
        router.delete("/chair-order/id:", this.deleteChairsOrders.bind(this));
        router.get("/table-order", this.getTablesOrders.bind(this));
        router.post("/table-order", this.postTablesOrders.bind(this));
        // router.put("/chair-order/id:", this.putChairsOrderes.bind(this));
        // router.delete("/chair-order/id:", this.deleteChairsOrders.bind(this));


        return router;
    }

    // handling chair order routers


    getChairsOrders(req, res) {
        console.log("getChairsOrders")
        return this.orderService
            .listChairsOrders()
            .then((data) => {
                res.json(data)
            })
            .catch((err) => console.log(err))
    }
    

    postChairsOrders(req, res) {
        let order_info = req.body

        return this.orderService
            .addChairsOrders(order_info)
            .then((data) => {
                console.log("using .then in router");
                res.json(data)
            })
            .catch((err) => console.log(err))

    }


    putChairsOrderes(req, res) {
        let order_id = req.params.id
        let order_amend = req.body

        return this.orderService
            .updateChairsOrders(order_id, order_amend)
            .then((data) => {
                res.json(`${data} chair product modified`)
            })
            .catch((err) => console.log(err))
    }


    deleteChairsOrders(req, res) {
        let order_product_id = req.params.id
        let order_remove = req.body

        return this.orderService
            .deleteChairsOrders(order_product_id, order_remove)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => console.log(err));
    }


    // handling table order routers


    getTablesOrders(req, res) {
        console.log("getTablesOrders")
        return this.orderService
            .listTablesOrders()
            .then((data) => {
                res.json(data)
            })
            .catch((err) => console.log(err))
    }

    postTablesOrders(req, res) {
        let order_info = req.body

        return this.orderService
            .addChairsOrders(order_info)
            .then((data) => {
                console.log("using .then in router");
                res.json(data)
            })
            .catch((err) => console.log(err))

    }

}

module.exports = orderRouter;