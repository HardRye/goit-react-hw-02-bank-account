import React, { Component } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const messages = {
  outOfMoney: 'На счету недостаточно средств для проведения операции!',
  emptyField: 'Введите сумму для проведения операции!',
};

class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
    inputValue: '',
  };

  handleInput = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  handleTransaction = ({ target }) => {
    const { balance, inputValue } = this.state;

    if (Number(inputValue) <= 0) {
      return toast.error(messages.emptyField);
    }

    if (target.name !== 'Deposit' && Number(inputValue) > balance) {
      toast.error(messages.outOfMoney);
    } else {
      const newTransaction = {
        id: shortid.generate(),
        type: target.name,
        amount: inputValue,
        date: new Date().toLocaleString('en-US', { hour12: false }),
      };
      this.setState(prevState => ({
        transactions: [...prevState.transactions, newTransaction],
        balance:
          target.name === 'Deposit'
            ? prevState.balance + Number(newTransaction.amount)
            : prevState.balance - Number(newTransaction.amount),
      }));
    }

    this.reset();
  };

  reset = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    const { transactions, balance, inputValue } = this.state;

    return (
      <div className="dashboard">
        <Controls
          inputValue={inputValue}
          handleInput={this.handleInput}
          handleTransaction={this.handleTransaction}
        />
        <Balance balance={balance} transactions={transactions} />
        <TransactionHistory transactions={transactions} />
        <ToastContainer autoClose={2500} position="bottom-right" />
      </div>
    );
  }
}

export default Dashboard;
