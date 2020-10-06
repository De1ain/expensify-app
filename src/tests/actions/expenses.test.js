import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const middleware = [thunk];
const createMockStore = configureMockStore(middleware);

test('Should setup remove expense action aobject', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense(
        '12345xyz',
        {
            note: 'This is the updated note'
        });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '12345xyz',
        updates: {
            note: 'This is the updated note'
        }
    });
});

test('Should setup add expense actino object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is good',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        expect(1).toBe(2);
        done();
    });
});

test('Should add expense with defaults to database and store', () => {

});

// test('Should setup add expense actino object with default values ', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     });
// });