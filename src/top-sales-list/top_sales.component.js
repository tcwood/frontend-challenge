import React from 'react';
import ListItem from './list_item';
import Styles from './top_sales.scss';

const TopSalesList = ({ topTen }) => (
  <div className={Styles.salesList}>
    <div className={Styles.title}>Top Sales Items</div>
    {
      topTen.map(({ name, revenue }, i) => (
        <ListItem
          key={name}
          name={name}
          revenue={revenue}
          i={i}
        />
      ))
    }
  </div>
);

export default TopSalesList;

