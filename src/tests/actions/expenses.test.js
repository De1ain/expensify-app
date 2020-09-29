import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });

});

test('Should setup add expense actino object with default values ', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});