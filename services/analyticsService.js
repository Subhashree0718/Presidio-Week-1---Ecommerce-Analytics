const productFrequency = new Map();

function updateTrending(productName, quantity) {
    productFrequency.set(productName, (productFrequency.get(productName) || 0) + quantity);
}

function getTopTrending(n = 5) {
    return [...productFrequency.entries()]
           .sort((a,b) => b[1] - a[1])
           .slice(0,n);
}

module.exports = { updateTrending, getTopTrending };
