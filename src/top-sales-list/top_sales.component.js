import React from 'react';
import propTypes from 'prop-types';
import ListItem from './list_item';
import Styles from './top_sales.scss';

const TopSalesList = ({ topTen }) => (
  <div className={Styles.salesList}>
    <h1 className={Styles.title}>Top Sales Items</h1>
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

const { arrayOf, number, string, shape } = propTypes;

TopSalesList.propTypes = {
  topTen: arrayOf(
    shape({
      name: string.isRequired,
      revenue: number.isRequired,
    }),
  ).isRequired,
};

export default TopSalesList;

