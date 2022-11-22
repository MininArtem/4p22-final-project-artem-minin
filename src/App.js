import './App.css';
import MyComponent from './components/MyComponent/MyComponent';
import MyClassComponent from './components/MyClassComponent/MyClassComponent';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyClassComponent />
      <Card />
    </div>
  );
}

export default App;
