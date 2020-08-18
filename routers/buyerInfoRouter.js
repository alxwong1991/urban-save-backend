const express = require('express');

class buyerInfoRouter {
    constructor(buyerInfoService) {
        this.buyerInfoService = buyerInfoService;
        
    }
    router() {
        let router = express.Router()
        router.get("/", this.getBuyers.bind(this));
        router.post("/", this.postBuyers.bind(this));
        router.put("/", this.putBuyers.bind(this));
        
        return router;
      }
    
    // getting the buyer's datas
    getBuyers(req, res) {
        let user = req.user;
        return this.buyerInfoService
        .listBuyers(user)
        .then(data => {
            res.json(data)
        })
        .catch(err => res.status(500).json(err));
    }

    // posting the buyer's datas
    postBuyers(req, res) {
        let user = req.user;
        let content = req.body;
        return this.buyerInfoService
        .addBuyers(user, content)
        .then(data => {
            res.json(data)
        })
        .catch(err => res.status(500).json(err));
    }

    // updating the buyer's datas
    putBuyers(req, res) {
        let user = req.user;
        let content = req.body;
        return this.buyerInfoService
        .updateBuyers(user, content)
        .then(data => {
            res.json(data)
        })
        .catch(err => console.log(err)); 
    }
}

module.exports = buyerInfoRouter;