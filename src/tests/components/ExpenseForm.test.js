import React from 'react';
import { shallow } from 'enzyme'
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('Should set note on input change', () => {
    const newNote = 'This is a new note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value: newNote }
    });
    expect(wrapper.state('note')).toBe(newNote);
});

test('Should set amount if valid input', () => {
    const newAmount = '450.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value: newAmount }
    });
    expect(wrapper.state('amount')).toBe(newAmount);
});

test('Should not set amount if invalid input', () => {
    const newAmount = '450.123';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target: { value: newAmount }
    });
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
});

test('Should call onSubmit prop for  valid form submission', () => {
    const { id, ...expense } = expenses[0];

    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('error')).toBe('');

    expect(onSubmitSpy).toHaveBeenLastCalledWith(expense);

    // expect(onSubmitSpy).toHaveBeenLastCalledWith({
    //     description: expenses[0].description,
    //     amount: expenses[0].amount,
    //     note: expenses[0].note,
    //     createdAt: expenses[0].createdAt
    // });
});

test('Should set new date onDateChange', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calendar focus onFocuChange', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});