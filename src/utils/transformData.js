import { forEach, startCase, values } from 'lodash';

export default function transformData(purchaseOrders) {
  let productList = {};
  // Aggregate duplicate product information into productList object
  forEach(purchaseOrders, ({ products }) => {
    forEach(products, ({ name, order_count, vendor_price }) => {
      const revenue = order_count * (vendor_price.value / (10 ** vendor_price.scale));
      // if have seen product previously, add to it's running orderCount and revenue
      if (productList[name]) {
        productList[name].revenue += revenue;
      // if first instance of a product, initialize it's name, orderCount, and revenue
      } else {
        const titleCaseName = startCase(name.toLowerCase());
        productList[name] = {
          name: titleCaseName,
          revenue,
        };
      }
    });
  });
  // Change object into an array and sort array by order count
  let sortedProducts = values(productList).sort((a, b) => b.revenue - a.revenue);
  return sortedProducts.slice(0, 10);
}
