import authReducer from '../../reducers/auth';

test('Should set uid for login', () => {
    const uid = '987hjk';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid });
});

test('Should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'SomeUID' }, action);
    expect(state).toEqual({});
});