import { connect } from 'react-redux'
import {increaseCount, decreaseCount} from '../redux/index'

function Counter(props) {
    return (
        <div>
            <h1>Counter with Redux</h1>
            <h2>Count: {props.count}</h2>
            <button onClick={props.increase}>+1</button>
            <button onClick={props.decrease}>-1</button>
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        count: state.count
    }
}

const mapDispatchtoProps = dispatch => {
    return{
        
        increase: () => dispatch(increaseCount()),
        
        decrease: () => dispatch(decreaseCount())
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Counter)