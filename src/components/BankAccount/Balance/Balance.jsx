import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

function getSum(arr, type) {
  return arr
    .filter(el => el.type === type)
    .reduce((acc, el) => acc + Number(el.amount), 0);
}

const Balance = ({ transactions, balance }) => {
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
      <span>Balance: {balance}$</span>
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
  balance: PropTypes.number.isRequired,
};

Balance.defaultProps = {
  // bla: 'test',
};

export default Balance;
