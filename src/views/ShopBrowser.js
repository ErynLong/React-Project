import {useState} from 'react';
import CategoryBar from '../components/CategoryBar';
import ItemBrowser from '../components/ItemBrowser';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

export default function ShopBrowser() {
    const [category, setCat]=useState()

  return (
    <>
      <Typography variant='h3'>Browse Our Books</Typography>
      <Box sx={{display:"flex", alignContent:"center", justifyContent:"center", width:"100%"}}>
        <CategoryBar handleClick={(cat)=>{setCat(cat)}}/>
      </Box>

      <ItemBrowser categoryID={category?.id}/>
    </>
  )
}