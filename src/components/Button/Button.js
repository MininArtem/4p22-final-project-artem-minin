import './Button.css';

function Button(props) {
  return(
    <button className="common__button">{ props.text }</button>
  )
}

export default Button;