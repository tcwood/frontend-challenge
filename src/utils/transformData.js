import { forEach, values } from 'lodash';

export default function transformData(purchaseOrders) {
  let productList = {};
  // Aggregate duplicate product information into productList object
  forEach(purchaseOrders, (purchaseOrder) => {
    forEach(purchaseOrder.products, ({ name, order_count, vendor_price }) => {
      const revenue = order_count * (vendor_price.value / (10 ** vendor_price.scale));
      if (productList[name]) {
        productList[name].order_count += order_count;
        productList[name].revenue += revenue;
      } else {
        productList[name] = {
          name,
          order_count,
          revenue,
        };
      }
    });
  });
  // Change object into an array and sort array by order count
  let sortedProducts = values(productList).sort((a, b) => b.order_count - a.order_count);
  return sortedProducts.slice(0, 10);
}
