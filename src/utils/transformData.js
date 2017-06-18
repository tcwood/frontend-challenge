import { forEach, startCase, values } from 'lodash';

export default function transformData(purchaseOrders) {
  const productMap = aggregateDuplicateProducts(purchaseOrders);
  const productList = values(productMap);
  return sortByOrderCountThenRevenue(productList).slice(0, 10);
}

function aggregateDuplicateProducts(purchaseOrders) {
  let productMap = {};
  forEach(purchaseOrders, ({ products }) => {
    forEach(products, ({ name, order_count, vendor_price }) => {
      const revenue = order_count * (vendor_price.value / (10 ** vendor_price.scale));
      // if have seen product previously, add to it's running orderCount and revenue
      if (productMap[name]) {
        productMap[name].revenue += revenue;
        productMap[name].orderCount += order_count;
      // if first instance of a product, initialize it's name, orderCount, and revenue
      } else {
        productMap[name] = {
          name: startCase(name.toLowerCase()),
          orderCount: order_count,
          revenue,
        };
      }
    });
  });
  return productMap;
}

function sortByOrderCountThenRevenue(products) {
  return products.sort((a, b) => (
    b.orderCount === a.orderCount ? b.revenue - a.revenue : b.orderCount - a.orderCount
  ));
}
