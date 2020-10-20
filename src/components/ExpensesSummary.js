import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ expenseCount, expensesTotal, hiddenExpenseCount }) => {
    const expenseWord = (expenseCount === 1) ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('0,0.00');
    const existWord = (hiddenExpenseCount === 0 || hiddenExpenseCount === 1) ? 'is' : 'are';
    const pluralS = (hiddenExpenseCount === 1) ? '' : 's';

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {expenseWord} totalling: <span>₪{formattedExpensesTotal}</span>
                </h1>
                <p className="page-header__title">In addition, there {existWord} <span>{hiddenExpenseCount}</span> hidden expense{pluralS}</p>
                <div className="page-header__actions">
                    <Link className="button button--hover-darken" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const hiddenExpenses = state.expenses.length - visibleExpenses.length;
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        hiddenExpenseCount: hiddenExpenses
    };
};

export default connect(mapStateToProps)(ExpensesSummary);