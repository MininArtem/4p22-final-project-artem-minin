import './Card.css';
import Button from '../Button/Button';

function Card() {
  return(
    <div className='card'>
      <img className='card__img' src='https://fikiwiki.com/uploads/posts/2022-02/1644968674_1-fikiwiki-com-p-krasivie-kartinki-4k-na-telefon-1.jpg' alt='logo' />
      <div className='card__container'>
        <h2 className='card__title'>Заголовок</h2>
        <p className='card__description'>Гора — форма рельефа, изолированное резкое поднятие местности.</p>
        <div className='card__price common__price'>300</div>
        <Button text='Купить'/>
      </div>
    </div>
  );
}

export default Card;