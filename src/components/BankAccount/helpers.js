const messages = {
  outOfMoney: 'На счету недостаточно средств для проведения операции!',
  emptyField: 'Введите сумму для проведения операции!',
};

const getSum = (arr, type) => {
  return arr
    .filter(el => el.type === type)
    .reduce((acc, el) => acc + Number(el.amount), 0);
};

export { getSum, messages };
