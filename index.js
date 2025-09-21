const { placeOrder } = require('./services/orderService');
const { getTopTrending, getRecommendations } = require('./services/analyticsService');

function main() {
    console.log("=== E-Commerce Analytics Platform ===");

    // Sample order
    const userId = 1;
    const orderItems = [
        {productId:1, productName:'Laptop', quantity:1},
        {productId:2, productName:'Mouse', quantity:1}
    ];

    placeOrder(userId, orderItems, (orderId) => {
        console.log("Order placed:", orderId);
        console.log("Top Trending Products:", getTopTrending());
        console.log("Recommendations for Laptop:", getRecommendations('Laptop'));
    });
}

main();
