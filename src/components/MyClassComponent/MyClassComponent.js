import './MyClassComponent.css';
import React from 'react';

export default class MyClassComponent extends React.Component {
  render() {
    return(
      <div className='MyClassComponent'>
        <span>Hello,</span>
        <span> class</span>
        <span> component</span>
      </div>
    )
  }
}