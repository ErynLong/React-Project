import {useContext} from 'react';
import CartItem from './CartItem';
import { AppContext } from '../../context/AppContext';


export default function Cart() {
  const {cart} = useContext(AppContext)

  return (
    <>
    {
      [...new Set(cart.map(JSON.stringify))]
        .map(JSON.parse)?.map((item)=><CartItem key={item.id} item={item}/>)
    }
    </>
  )
}