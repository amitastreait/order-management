/** Order Related Method */
Meteor.methods({
    /**
     * Create new order
     *
     * @param {Object} data - Order data
     * @return {String} Order ID
     */
    'order.create': function (data) {
        // Check if user is logged in
        if (!this.userId) {
            throw new Meteor.Error('error-not-logged-in', 'You are not logged in');
        }

        // Check if user is admin
        if (!Roles.userIsInRole(this.userId, 'admin')) {
            throw new Meteor.Error('error-not-authorized', 'You are not authorized to create order');
        }

        // Check data
        if (!data || !data.customerId || !data.items || !data.items.length === 0) {
            throw new Meteor.Error('error-invalid-data', 'Invalid data');
        }

        // Check customer
        const customer = Customers.findOne(data.customerId);
        if (!customer) {
            throw new Meteor.Error('error-invalid-customer', 'Invalid customer');
        }

        // Create order
        const order = {
            customerId: data.customerId,
            items: data.items,
            total: data.total,
            status: 'pending',
            createdAt: new Date()
        };

        return Orders.insert(order);
    }
});