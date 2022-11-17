import {createStore} from 'redux';


const reducerFn = (state={counter:0},action) => {
    switch(action.type){
        case "Inc": return {counter: state.counter + 1}
        break;
        case "Dec": return {counter: state.counter - 1}
        break;
        default: return state;
    }

}


export const store = createStore(reducerFn)