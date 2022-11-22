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
        <Card image='https://fikiwiki.com/uploads/posts/2022-02/1644968674_1-fikiwiki-com-p-krasivie-kartinki-4k-na-telefon-1.jpg' title= 'Заголовок1' description='Гора — форма рельефа, изолированное резкое поднятие местности.' price='100'/>
        <Card image='https://fikiwiki.com/uploads/posts/2022-02/1644968674_1-fikiwiki-com-p-krasivie-kartinki-4k-na-telefon-1.jpg' title= 'Заголовок2' description='Гора — форма рельефа, изолированное резкое поднятие местности.' price='200'/>
        <Card image='https://fikiwiki.com/uploads/posts/2022-02/1644968674_1-fikiwiki-com-p-krasivie-kartinki-4k-na-telefon-1.jpg' title= 'Заголовок3' description='Гора — форма рельефа, изолированное резкое поднятие местности.' price='300'/>
        <Card image='https://fikiwiki.com/uploads/posts/2022-02/1644968674_1-fikiwiki-com-p-krasivie-kartinki-4k-na-telefon-1.jpg' title= 'Заголовок4' description='Гора — форма рельефа, изолированное резкое поднятие местности.' price='400'/>
        <Card image='https://fikiwiki.com/uploads/posts/2022-02/1644968674_1-fikiwiki-com-p-krasivie-kartinki-4k-na-telefon-1.jpg' title= 'Заголовок5' description='Гора — форма рельефа, изолированное резкое поднятие местности.' price='500'/>
        <Card image='https://fikiwiki.com/uploads/posts/2022-02/1644968674_1-fikiwiki-com-p-krasivie-kartinki-4k-na-telefon-1.jpg' title= 'Заголовок6' description='Гора — форма рельефа, изолированное резкое поднятие местности.' price='600'/>
        <Card image='https://fikiwiki.com/uploads/posts/2022-02/1644968674_1-fikiwiki-com-p-krasivie-kartinki-4k-na-telefon-1.jpg' title= 'Заголовок7' description='Гора — форма рельефа, изолированное резкое поднятие местности.' price='700'/>
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
