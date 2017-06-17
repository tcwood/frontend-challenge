import React from 'react';
import Styles from './top_sales.scss';

const ListItem = () => (
  <div className={Styles.listItem}>
    <div className={Styles.indNumber}>1</div>
    <div className={Styles.content}>
      <p className={Styles.medText}>Doublelicious</p>
      <p className={Styles.smallText}>$1360.93</p>
    </div>
  </div>
);


// export default TopSalesList;
// write top sales list component here



class TopSalesList extends React.Component {
  render() {
    return (
      <div className={Styles.salesList}>
        <div className={Styles.title}>Top Sales Items</div>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    );
  }
}

export default TopSalesList;

