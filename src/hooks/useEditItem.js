import React, { useEffect, useContext } from 'react'
import { CancelToken } from 'apisauce'
import { putItem } from '../api/apiItem'
import { AppContext } from '../context/AppContext'

export default function useEdititem(item) {   
    let response
    const {user, setAlert} =useContext(AppContext)

    useEffect(
        ()=>{
            const source = CancelToken.source()
            const editItem=async()=>{
                response = await putItem(user.token, item.id, item, source.token);
                if (response){
                    setAlert({msg:`Item: ${item.name} Edited`, cat:'success'})
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`Please Reauthorize Your Account`, cat:'warning'})

                }
            }
            if(item?.name){
                editItem();
            };
            return ()=>{source.cancel()}
        },[item]
    )
  
}