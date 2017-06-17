import React from 'react';
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

export default ListItem;
