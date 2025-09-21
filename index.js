const { updateTrending, getTopTrending, updateCoPurchase, getRecommendations } = require('./services/analyticsService');

updateTrending('Laptop', 3);
updateTrending('Mouse', 5);

console.log("Top Trending Products:", getTopTrending());

updateCoPurchase(['Laptop','Mouse','Keyboard']);

console.log("Recommendations for Laptop:", getRecommendations('Laptop'));
