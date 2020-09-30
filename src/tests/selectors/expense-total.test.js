import { TestScheduler } from 'jest';
import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const total = expensesTotal([]);
    expect(total).toBe(0);
});

test('Should correctly add up a single expenses', () => {
    const total = expensesTotal([expenses[0]]);
    expect(total).toBe(195);
});

test('Should correctly add up multiple expenses', () => {
    const total = expensesTotal(expenses);
    expect(total).toBe(114195);
});