import './App.css';
import MyComponent from './components/MyComponent/MyComponent';
import MyClassComponent from './components/MyClassComponent/MyClassComponent';
import Card from './components/Card/Card';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyClassComponent />
      <div className='card_container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='App-newsletter'>
        <h2>Подписаться на новости компании</h2>
        <input placeholder='email' type='email' />
        <Button text='Подписаться'/>
      </div>
    </div>
  );
}

export default App;
