function calculateCategorySales(category, productsMap) {
    let total = 0;
    for(const p of category.products) {
        total += productsMap.get(p.id) || 0;
    }
    for(const sub of category.subcategories) {
        total += calculateCategorySales(sub, productsMap);
    }
    return total;
}

module.exports = { calculateCategorySales };
