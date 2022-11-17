import { useSelector,useDispatch } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div className="App">
      <h1>counter {counter}</h1>
      <button onClick={() => dispatch({type:"Inc"})}>Increment</button>
      <button onClick={() => dispatch({type:"Dec"})}>Decrement</button>
    </div>
  );
}

export default App;
