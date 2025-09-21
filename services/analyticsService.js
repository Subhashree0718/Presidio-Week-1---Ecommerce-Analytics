const productFrequency = new Map();
const coPurchase = new Map();

function updateTrending(productName, quantity) {
    productFrequency.set(productName, (productFrequency.get(productName) || 0) + quantity);
}

function getTopTrending(n = 5) {
    return [...productFrequency.entries()]
        .sort((a,b) => b[1] - a[1])
        .slice(0,n);
}

function updateCoPurchase(orderProducts) {
    for(let i=0;i<orderProducts.length;i++){
        for(let j=i+1;j<orderProducts.length;j++){
            const a = orderProducts[i], b = orderProducts[j];
            if(!coPurchase.has(a)) coPurchase.set(a,new Map());
            const mapA = coPurchase.get(a);
            mapA.set(b,(mapA.get(b) || 0)+1);
            if(!coPurchase.has(b)) coPurchase.set(b,new Map());
            const mapB = coPurchase.get(b);
            mapB.set(a,(mapB.get(a) || 0)+1);
        }
    }
}

function getRecommendations(productName) {
    if(!coPurchase.has(productName)) return [];
    const map = coPurchase.get(productName);
    const total = [...map.values()].reduce((a,b)=>a+b,0);
    return [...map.entries()]
        .filter(([k,v]) => v/total > 0.3)
        .sort((a,b)=>b[1]-a[1])
        .map(([k])=>k)
        .slice(0,3);
}

module.exports = { updateTrending, getTopTrending, updateCoPurchase, getRecommendations };
