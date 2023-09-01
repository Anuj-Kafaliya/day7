import React from 'react'
import '../style/Home.css'
import Cart from './Cart';
const ItemStore = () => {
 
  const itemList = JSON.parse(localStorage.getItem('items'));
  
  return (
    <div>
        <div className='cards'>
            {
                itemList?.map((item) => (
                    <div key={item.id}>
                        <Cart item={item} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ItemStore