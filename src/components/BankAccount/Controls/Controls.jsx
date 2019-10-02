import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ inputValue, handleInput, handleTransaction }) => (
  <section className={styles.controls}>
    <input
      type="number"
      className={styles.input}
      value={inputValue}
      onChange={handleInput}
    />
    <button
      type="button"
      className={styles.buttonDeposit}
      name="Deposit"
      onClick={handleTransaction}
    >
      Deposit
    </button>
    <button
      type="button"
      className={styles.button}
      name="Withdrawal"
      onClick={handleTransaction}
    >
      Withdraw
    </button>
  </section>
);

Controls.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleTransaction: PropTypes.func.isRequired,
};

export default Controls;
