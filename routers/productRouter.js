const express = require('express');

class productRouter {
    constructor(productService) {
        this.productService = productService;
    }
    router() {
        let router = express.Router()
        router.get("/", this.getAllProducts.bind(this));
        router.get("/chairs", this.getChairs.bind(this));
        router.get("/tables", this.getTables.bind(this));
        router.get("/other-equipments", this.getOtherEquipments.bind(this));
        router.post("/", this.postAllProducts.bind(this));

        return router;
    }

    // getting all product datas
    getAllProducts(req, res) {
        return this.productService
            .listAllProducts()
            .then(data => {
                res.json(data)
            })
    }

    // getting chair datas
    getChairs(req, res) {
        return this.productService
            .listAllChairs()
            .then(data => {
                res.json(data)
            })
    }

    // getting table datas
    getTables(req, res) {
        return this.productService
            .listAllTables()
            .then(data => {
                res.json(data)
            })
    }

    // getting other equipments datas
    getOtherEquipments(req, res) {
        return this.productService
            .listAllOtherEquipments()
            .then(data => {
                res.json(data)
            })
    }



    // sending product datas to database
    postAllProducts(req, res) {
        return this.productService
            .add()
            .then(data => {
                res.json(data);
            })
            .catch(err => res.status(500).json(err));
    }
}

module.exports = productRouter;