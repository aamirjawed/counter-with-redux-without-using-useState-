import {createStore} from 'redux'
import countReducer from './counter/counterReducers'


const store = createStore(countReducer)

export default store