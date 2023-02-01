import logo from './logo.svg';
import './App.css';
import Details from './Details';

function App() {
  const names = ['Jacky', 'Henrik', 'Syver', 'Morten']
  const numbers = [1, 2, 3, 4]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Details name={names[0]} number={numbers[0]}/>
        <Details name={names[1]} number={numbers[1]}/>
        <Details name={names[2]} number={numbers[2]}/>
        <Details name={names[3]} number={numbers[3]}/>
      </header>
    </div>
  );
}

export default App;
