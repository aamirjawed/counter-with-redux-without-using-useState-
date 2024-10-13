import {INCREASE_COUNT} from './counterTypes'
import { DECREASE_COUNT } from './counterTypes'

export const increaseCount = () => {
    return{
        type:INCREASE_COUNT
    }
}

export const decreaseCount = () => {
    return{
        type:DECREASE_COUNT
    }
}


