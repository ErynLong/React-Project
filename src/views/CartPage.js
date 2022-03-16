import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'
import Cart from '../components/Cart/Index'
import Typography from '@mui/material/Typography';

export default function CartPage() {
    
    const {cart} = useContext(AppContext)
    if (cart.length<=0){
        return(
      <Typography variant='h3'>Your Cart is Empty</Typography>
        )
    }
  return (
    <>    
        <Typography variant='h3'>Your Cart</Typography>
        <Cart/>
    </>

  )
}