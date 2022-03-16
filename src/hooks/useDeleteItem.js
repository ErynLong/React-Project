import React, { useEffect, useContext } from 'react'
import { CancelToken } from 'apisauce'
import { deleteItem } from '../api/apiItem'
import { AppContext } from '../context/AppContext'

export default function useDeleteCategory(item) {   
    let response
    const {user, setAlert} = useContext(AppContext)

    useEffect(
        ()=>{
            const source = CancelToken.source()
            const deleteCat=async()=>{
                response = await deleteItem(user.token, item.id, source.token);
                if (response){
                    setAlert({msg:`Item: ${item.name} Deleted`, cat:'success'})
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`Please Reauthorize Your Account`, cat:'warning'})
                    ///redirect to the login page
                }
            }
            if(item?.name){
                deleteCat();
            };
            return ()=>{source.cancel()}
        },[item]
    )
  
}