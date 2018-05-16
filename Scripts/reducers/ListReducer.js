import initialState from './InitialState';

export default (state = initialState, action ) => {
    switch(action.type) {
        case 'INCREASE_LIKES':
            return 
        default: 
            return state;
    }
}
