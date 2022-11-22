import './Card.css';

function Card() {
  return(
    <div className='card'>
      <img className='card__img' src='https://fikiwiki.com/uploads/posts/2022-02/1644968674_1-fikiwiki-com-p-krasivie-kartinki-4k-na-telefon-1.jpg' alt='logo' />
      <div className='card__container'>
        <h2 className='card__title'>Заголовок</h2>
        <p className='card__description'>Гора — форма рельефа, изолированное резкое поднятие местности с выраженными склонами и подножием или вершина в горной стране.</p>
        <div className='card__price'>300р.</div>
        <button className='bye-button'>Купить</button>
      </div>
    </div>
  );
}

export default Card;