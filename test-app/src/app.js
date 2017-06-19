import React from 'react';
import ReactDOM from 'react-dom';
import request from 'request';
import TopSalesList from '../../dist/TopSalesList/index';
import transformData from '../../dist/Utils/transformData';

request.get('http://localhost:3000/PurchaseOrders', function (error, response, body) {
  const topTen = transformData(JSON.parse(body));
  ReactDOM.render(<TopSalesList topTen={topTen} />, document.getElementById('top-sales'));
});
