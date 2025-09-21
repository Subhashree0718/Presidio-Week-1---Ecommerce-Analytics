const db = require('../utils/db');

async function getTopUsers(limit = 10) {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT u.id AS user_id, u.name, COUNT(o.id) AS total_orders, SUM(oi.quantity * p.price) AS total_spent
            FROM Users u
            JOIN Orders o ON u.id = o.user_id
            JOIN OrderItems oi ON o.id = oi.order_id
            JOIN Products p ON oi.product_id = p.id
            GROUP BY u.id, u.name
            ORDER BY total_orders DESC
            LIMIT ?;
        `;
        db.query(query, [limit], (err, results) => {
            if(err) return reject(err);
            resolve(results);
        });
    });
}

module.exports = { getTopUsers };
