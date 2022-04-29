import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();

  const routeToOrder = () => {
    history.push('/pizza');
  }
  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://source.unsplash.com/IfQlwNqJqV8'
        alt=''
      />
      <button id='order-pizza'
        onClick={routeToOrder}
        className='md-button shop-button'
      >
        Order now!
      </button>
    </div>
  )
}