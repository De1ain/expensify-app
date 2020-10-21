import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startFacebookLogin, startGithubLogin } from '../actions/auth';

export const LoginPage = ({ startGoogleLogin, startGithubLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <button className="button button--shadow button--login" onClick={startGoogleLogin}>
                <img src="/images/google-icon.jpeg" className="button--icon" />
                <span>Login with Google</span>
            </button>
            <button className="button button--shadow button--login" onClick={startFacebookLogin} disabled>
                <img src="/images/facebook-icon.jpg" className="button--icon" />
                <span>Login with Facebook</span>
            </button> 
            <button className="button button--shadow button--login" onClick={startGithubLogin}>
                <img src="/images/github-icon.png" className="button--icon" />
                <span>Login with GitHub</span>
            </button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startGithubLogin: () => dispatch(startGithubLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);