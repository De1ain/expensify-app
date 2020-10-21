import { firebase, googleAuthProvider, facebookAuthProvider, githubAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startGoogleLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
};

export const startFacebookLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    }
};

export const startGithubLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(githubAuthProvider);
    }
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}