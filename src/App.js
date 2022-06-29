import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Let's get started!</h2>
        <ExpenseItem></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
