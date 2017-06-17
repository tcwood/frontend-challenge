import React from 'react';
import propTypes from 'prop-types';
import Styles from './top_sales.scss';

const ListItem = ({ name, revenue, i }) => (
  <div className={Styles.listItem}>
    <div className={Styles.indNumber}>{i + 1}</div>
    <div className={Styles.content}>
      <p className={Styles.medText}>{name}</p>
      <p className={Styles.smallText}>${revenue}</p>
    </div>
  </div>
);

const { number, string } = propTypes;

ListItem.propTypes = {
  name: string.isRequired,
  revenue: number.isRequired,
  i: number.isRequired,
};

export default ListItem;
