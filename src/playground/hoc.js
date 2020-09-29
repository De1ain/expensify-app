// Higher order component - A component (HOC) - that renders another component
// Reuse code
// render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    )
};
const AdminInfo = withAdminWarning(Info);



const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? (
                <WrappedComponent {...props} />
            ) : (
                    <p>User is not authenticated</p>
                )}
        </div>)
};
const AuthInfo = requireAuth(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info="These are the details" />, document.getElementById('app'));