import {useEffect, useState, useContext } from 'react';
import {getItems, getItemsByCat} from '../api/apiItem';

import { CancelToken } from 'apisauce';

export default function useItems(categoryID=null) {
    const [items, setItems]=useState({});
    const source = CancelToken.source();

    useEffect(()=>{
        categoryID ? 
        (async()=>{
            const response = await getItemsByCat(categoryID, source.token);
            setItems(response);
        })()
        :
        (async()=>{
            const response = await getItems(source.token);
            setItems(response);
            
        })()
        return ()=>{source.cancel()}
    },[categoryID]

    )

  return items
}