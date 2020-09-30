import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should correctly render ExpensesSummary component with 0 expenses', () => {
    const wrapper = shallow(<ExpensesSummary />);
    expect(wrapper).toMatchSnapshot();
}); 

test('Should correctly render ExpensesSummary component with 1 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpensesSummary component with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={123456789} />);
    expect(wrapper).toMatchSnapshot();
});