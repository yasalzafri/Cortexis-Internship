import logo from './logo.svg';
import './App.css';
import Flashcard from './component/flashcard';

function App() {
  return (
    <div className='background'>
      <div className='title'>
        <h1>Flash Card</h1>
        <h3 className='subtitle'>Click On The Button To Reveal Answer</h3>
      </div>
      <Flashcard />
    </div>
  );
}

export default App;
