class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.subcategories = [];
        this.products = [];
    }
}
module.exports = Category;
