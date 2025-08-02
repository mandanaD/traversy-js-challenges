function calculateTotalSalesWithTax(products, taxRate) {
    const productsPrice = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    const taxPrice = (productsPrice * taxRate) / 100;
    return parseFloat(productsPrice + taxPrice).toFixed(2);
}

module.exports = calculateTotalSalesWithTax;
