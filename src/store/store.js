import { applyMiddleware, combineReducers, compose, createStore} from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk'
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;//Ese compose importa tambien

const reducers =combineReducers({

    auth: authReducer,//Este si lo hicimos nosotros esta en los reducers
    ui: uiReducer
})

export const store = createStore(reducers, 
    composeEnhancers(

        applyMiddleware(thunk)
    ));//Esto es pura carpinteria
