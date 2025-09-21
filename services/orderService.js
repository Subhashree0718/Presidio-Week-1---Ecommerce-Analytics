const db = require('../utils/db');
const { updateTrending, updateCoPurchase } = require('./analyticsService');

function placeOrder(userId, orderItems, callback){
    db.beginTransaction(err => {
        if(err) throw err;
        db.query('INSERT INTO Orders(user_id) VALUES(?)', [userId], (err, result) => {
            if(err) return db.rollback(() => { throw err; });
            const orderId = result.insertId;
            const values = orderItems.map(oi => [orderId, oi.productId, oi.quantity]);
            db.query('INSERT INTO OrderItems(order_id, product_id, quantity) VALUES ?', [values], (err, result) => {
                if(err) return db.rollback(() => { throw err; });
                
                // Update analytics
                orderItems.forEach(oi => updateTrending(oi.productName, oi.quantity));
                updateCoPurchase(orderItems.map(oi => oi.productName));
                
                db.commit(err => {
                    if(err) return db.rollback(() => { throw err; });
                    callback(orderId);
                });
            });
        });
    });
}

module.exports = { placeOrder };
