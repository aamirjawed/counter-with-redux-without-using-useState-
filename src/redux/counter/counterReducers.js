import {INCREASE_COUNT, DECREASE_COUNT} from './counterTypes.js'

const initialState = {
    count:0
}

const countReducer =(state = initialState, action) =>{
    switch(action.type){
        case INCREASE_COUNT:
            return{
            ...state,
            count:state.count+1
        }
        case DECREASE_COUNT:
            return{
            count:state.count-1
        }

        default: return state
    }
}

export default countReducer