/** Add the payment and refund related methods */
export class Payment {
  /**
   * Add a payment to the order
   * @param {Order} order - The order object
   * @param {Payment} payment - The payment object
   */
  addPayment(order: Order, payment: Payment): void {
    /* Add the payment to the order: code */
    order.payments.push(payment);
    order.totalPaid += payment.amount;
  }

  /**
   * Refund the payment
   * @param {Order} order - The order object
   * @param {Payment} payment - The payment object
   */
  refundPayment(order: Order, payment: Payment): void {
    // Refund the payment
  }
}