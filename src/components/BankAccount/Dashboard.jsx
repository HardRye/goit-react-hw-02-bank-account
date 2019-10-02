import React, { Component } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { getSum, messages } from './helpers';

class Dashboard extends Component {
  state = {
    transactions: [],
    inputValue: '',
  };

  handleInput = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };

  handleTransaction = ({ target: { name } }) => {
    const { inputValue, transactions } = this.state;
    const balance =
      transactions.length === 0
        ? 0
        : getSum(transactions, 'Deposit') - getSum(transactions, 'Withdrawal');

    if (Number(inputValue) <= 0) {
      toast.error(messages.emptyField);
    } else if (name !== 'Deposit' && Number(inputValue) > balance) {
      toast.error(messages.outOfMoney);
    } else {
      const newTransaction = {
        id: shortid.generate(),
        type: name,
        amount: inputValue,
        date: new Date().toLocaleString('en-US', { hour12: false }),
      };

      this.setState(prevState => ({
        transactions: [...prevState.transactions, newTransaction],
      }));
    }

    this.reset();
  };

  reset = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    const { transactions, inputValue } = this.state;

    return (
      <div className="dashboard">
        <Controls
          inputValue={inputValue}
          handleInput={this.handleInput}
          handleTransaction={this.handleTransaction}
        />
        <Balance transactions={transactions} />
        <TransactionHistory transactions={transactions} />
        <ToastContainer autoClose={2500} position="bottom-right" />
      </div>
    );
  }
}

export default Dashboard;
