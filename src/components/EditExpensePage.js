import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveModal from './RemoveModal';

export class EditExpensePage extends React.Component {
    state = {
        removeButtonClicked: undefined
    };

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.setState(() => ({ removeButtonClicked: true }));

    };

    handleRemoveConfirm = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    handleRemoveCancel = () => {
        this.setState(() => ({ removeButtonClicked: undefined }));
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary button--hover-darken" onClick={this.onRemove}>Remove Expense</button>
                    <RemoveModal
                        removeButtonClicked={this.state.removeButtonClicked}
                        handleRemoveConfirm={this.handleRemoveConfirm}
                        handleRemoveCancel={this.handleRemoveCancel}
                    />
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id),
        removeButtonClicked: state.removeButtonClicked
    };
};

const mapDispatchToProps = (dispatch, props) => (
    {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);