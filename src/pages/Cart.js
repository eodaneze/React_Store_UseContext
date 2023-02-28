import React, {useContext} from 'react'
import { Cartcontext } from '../context/Context'

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state
  const dispatch = Globalstate.dispatch
  return <div className="cart">
         
         {state.map((item, index) => {
           return <div className='card' key={index}>
             <img src={item.image} alt="" />
             <p>{item.title}</p>
             <p>{item.quantity * item.price}</p>
             <div className="quantity">
                <button>+</button><p>{item.quantity}</p>
                <button>-</button>
             </div>
             <h2>X</h2>
           </div>
         })}
    </div>
}

  


export default Cart