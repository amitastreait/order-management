const axios = require('axios');

/** Create the utility methods for placing the orders */
async function placeOrder(orderDetails) {
    try {
        const response = await axios.post('/api/orders', orderDetails);
        return response.data;
    } catch (error) {
        console.error('Error placing order:', error);
        throw error;
    }
}

async function getOrderStatus(orderId) {
    try {
        const response = await axios.get(`/api/orders/${orderId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching order status:', error);
        throw error;
    }
}

module.exports = {
    placeOrder,
    getOrderStatus
};