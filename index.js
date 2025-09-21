const { updateTrending, getTopTrending } = require('./services/analyticsService');

updateTrending('Laptop', 3);
updateTrending('Mouse', 5);

console.log("Top Trending Products:", getTopTrending());
