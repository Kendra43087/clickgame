import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
export { default } from "./Character";
import Arrow from 'react-icons/lib/fa/caret-right';

const Score = props => (
    <div className="gameScore">
      <h3 className="score">Your Score <Arrow /> {props.total}</h3>
      <h3 className="status">{props.status}</h3>
    </div>
  );
  export default Score;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

