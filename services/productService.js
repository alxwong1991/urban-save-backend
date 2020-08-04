class productService {
    constructor(knex) {
        this.knex = knex;
    }

    // listing all product datas
    listAllProducts() {
        let query = this.knex
            .select("*")
            .from("products")
            .innerJoin("product_category", "product_category.product_id", "products.id")

        return query.then((rows) => {
            // console.log(rows);
            return rows
        })
    }

    // listing all chair datas
    listAllChairs() {
        let query = this.knex
            .select("*")
            .from("products")
            .innerJoin("product_category", "product_category.product_id", "products.id")
            .where("product_category.chair", true)

        return query.then((rows) => {
            // console.log(rows);
            return rows
        })
    }

    // lisiting all table datas
    listAllTables() {
        let query = this.knex
            .select("*")
            .from("products")
            .innerJoin("product_category", "product_category.product_id", "products.id")
            .where("product_category.table", true)

        return query.then((rows) => {
            // console.log(rows);
            return rows
        })
    }

    // listing all other equipment datas    
    listAllOtherEquipments() {
        let query = this.knex
            .select("*")
            .from("products")
            .innerJoin("product_category", "product_category.product_id", "products.id")
            .where("product_category.other_equipments", true)

        return query.then((rows) => {
            // console.log(rows);
            return rows
        })
    }


    // adding a new product
    addingProducts() {
        console.log("adding a new product")
    }

}


module.exports = productService;