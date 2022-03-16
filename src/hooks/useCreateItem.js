import React, { useEffect, useContext } from 'react'
import { CancelToken } from 'apisauce'
import { postItem } from '../api/apiItem'
import { AppContext } from '../context/AppContext'

export default function useCreateItem(item) {   
    let response
    const {user, setAlert} =useContext(AppContext)

    useEffect(
        ()=>{
            const source = CancelToken.source()
            const createItem=async()=>{
                response = await postItem(user.token, item, source.token);
                if (response){
                    setAlert({msg:`Item: ${item.name} Created`, cat:'success'})
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`Please Reauthorize Your Account`, cat:'warning'})
                    ///redirect to the login page
                }
            }
            if(item?.name){
                createItem();
            };
            return ()=>{source.cancel()}
        },[item]
    )
  
}