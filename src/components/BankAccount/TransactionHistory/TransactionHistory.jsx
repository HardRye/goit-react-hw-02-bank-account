import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.head}>
      <tr>
        <th className={styles.type}>Transaction</th>
        <th className={styles.amount}>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody className={styles.body}>
      {transactions.map(el => (
        <tr className={styles.bodyItem} key={el.id}>
          <td className={styles.type}>{el.type}</td>
          <td className={styles.amount}>{el.amount}$</td>
          <td>{el.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

TransactionHistory.defaultProps = {
  // bla: 'test',
};

export default TransactionHistory;
