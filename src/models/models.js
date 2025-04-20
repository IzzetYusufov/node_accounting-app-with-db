'use strict';

const { User } = require('./User.model');
const { Expense } = require('./Expense.model');

User.hasMany(Expense, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Expense.belongsTo(User, {
  foreignKey: 'userId',
});

User.sync({ force: true });
Expense.sync({ force: true });

module.exports = {
  models: {
    User,
    Expense,
  },
};
