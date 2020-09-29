import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Shoudl setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should setup sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('Should setup sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const text = 'asdasd';
    const action = { type: 'SET_TEXT_FILTER', text };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('Should set start date filter', () => {
    const date = moment(1024);
    const action = { type: 'SET_START_DATE', date };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(date);
});

test('Should set end date filter', () => {
    const date = moment(512);
    const action = { type: 'SET_END_DATE', date };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(date);
});