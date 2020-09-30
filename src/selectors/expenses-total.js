export default (expenses) => {
    return expenses.map((e) => e.amount).reduce((total, a) => total + a, 0);
}