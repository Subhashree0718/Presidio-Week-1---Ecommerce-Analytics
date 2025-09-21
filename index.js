const { updateTrending, getTopTrending, updateCoPurchase, getRecommendations } = require('./services/analyticsService');
const Category = require('../models/Category');
const { calculateCategorySales } = require('./services/categoryService');
const { placeOrder } = require('./services/orderService');

updateTrending('Laptop', 3);
updateTrending('Mouse', 5);

console.log("Top Trending Products:", getTopTrending());

updateCoPurchase(['Laptop','Mouse','Keyboard']);

console.log("Recommendations for Laptop:", getRecommendations('Laptop'));

// Sample categories & products
const laptopCategory = new Category(1, "Laptops");
laptopCategory.products = [{id:1}, {id:2}];
const productsMap = new Map([[1, 50000], [2, 1500]]);

console.log("Total Revenue for Laptops:", calculateCategorySales(laptopCategory, productsMap));

const orderItems = [
    {productId:1, productName:'Laptop', quantity:1},
    {productId:2, productName:'Mouse', quantity:1}
];

placeOrder(1, orderItems, (orderId) => {
    console.log("Order placed:", orderId);
});
