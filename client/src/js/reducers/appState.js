const initialAppState = {
    defaultAuthState: 'none'
};

export default function appState(appState = initialAppState, action) {
    switch(action.type) {
        case 'SET_SIGNUP_FORM': {
            return {
                ...appState,
                authState: action.authState
            }
        }
        case 'SET_SIGNIN_FORM': {
            return {
                ...appState,
                authState: action.authState
            }
        }
        case 'SET_USER_PAGE': {
            return {
                ...appState,
                authState: action.authState
            }
        }
        default: {
            return appState
        }
    }
}