import React from 'react'
import Bar from '../components/Bar'
import AddItem from '../components/AddItem'
import ItemStore from '../components/ItemStore'
import '../style/Home.css'

const Home = () => {
  return (
    <div>
      <Bar />
      <div className='Add'>
        <AddItem />
      </div>
      <div className='itemStore'>
        <ItemStore />
      </div>
    </div>
  );
}

export default Home