const express = require('express');
const {
  createExpense,
  getExpenses,
  getExpense,
  removeExpense,
  updateExpense,
} = require('../controllers/expenses.controller.js');
const expensesRouter = express.Router();

expensesRouter.get('/', getExpenses);
expensesRouter.post('/', createExpense);
expensesRouter.get('/:id', getExpense);
expensesRouter.delete('/:id', removeExpense);
expensesRouter.delete('/', removeExpense);
expensesRouter.patch('/:id', updateExpense);
expensesRouter.patch('/', updateExpense);

module.exports = { expensesRouter };
