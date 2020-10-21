import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('Should correctly render login page', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call starGoogletLogin on button click', () => {
    const startGoogleLogin = jest.fn();
    const wrapper = shallow(<LoginPage startGoogleLogin={startGoogleLogin} />);
    wrapper.find('button').at(0).simulate('click');
    expect(startGoogleLogin).toHaveBeenCalled();
});

test('Should call startGithubLogin on button click', () => {
    const startGithubLogin = jest.fn();
    const wrapper = shallow(<LoginPage startGoogleLogin={startGithubLogin} />);
    // console.log(wrapper.debug()); // for debugging purposes
    wrapper.find('button').at(0).simulate('click');
    expect(startGithubLogin).toHaveBeenCalled();
});