/**
 * @On(event = { "CREATE" }, entity = "test3_withgitSrv.Purchases")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(request) {
    const { Purchases, Customers } = cds.entities;

    // Calculate reward points as one tenth of the purchase value
    const rewardPoints = Math.floor(request.data.purchaseValue / 10);
    request.data.rewardPoints = rewardPoints;

    // Retrieve the related customer
    if (request.data.customer_ID) {
        const customer = await SELECT.one.from(Customers).where({ ID: request.data.customer_ID });

        if (customer) {
            // Update the total purchase value and total reward points of the customer
            const updatedCustomer = {
                totalPurchaseValue: (customer.totalPurchaseValue || 0) + request.data.purchaseValue,
                totalRewardPoints: (customer.totalRewardPoints || 0) + rewardPoints
            };

            // Update the customer record
            await UPDATE(Customers).set(updatedCustomer).where({ ID: request.data.customer_ID });
        }
    }
}