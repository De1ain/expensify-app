import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startFacebookLogin, startGithubLogin } from '../actions/auth';

export const LoginPage = ({ startGoogleLogin, startGithubLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <button className="button button--shadow button--login button--google" onClick={startGoogleLogin}>
                <img className="button--icon" src="/images/google-icon.jpeg" />
                <span>Login with Google</span>
            </button>
            <button className="button button--shadow button--login button--github" onClick={startGithubLogin}>
                <img className="button--icon" src="/images/github-icon-darkBg.png" />
                <span>Login with GitHub</span>
            </button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin()),
    startGithubLogin: () => dispatch(startGithubLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);