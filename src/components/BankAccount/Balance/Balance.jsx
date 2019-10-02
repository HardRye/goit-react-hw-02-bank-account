import React from 'react';
import PropTypes from 'prop-types';
import { getSum } from '../helpers';
import styles from './Balance.module.css';

const Balance = ({ transactions }) => {
  return (
    <section className={styles.balance}>
      <span role="img" aria-label="deposit" className={styles.arrowUp}>
        ⬆️
        {getSum(transactions, 'Deposit')}$
      </span>
      <span role="img" aria-label="widthdrawal" className={styles.arrowDown}>
        ⬇️
        {getSum(transactions, 'Withdrawal')}$
      </span>
      <span>
        Balance:
        {getSum(transactions, 'Deposit') - getSum(transactions, 'Withdrawal')}$
      </span>
    </section>
  );
};

Balance.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Balance;
