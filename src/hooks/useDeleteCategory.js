import React, { useEffect, useContext } from 'react'
import { CancelToken } from 'apisauce'
import { deleteCategory } from '../api/apiCategory'
import { AppContext } from '../context/AppContext'

export default function useDeleteCategory(category) {   
    let response
    const {user, setAlert} = useContext(AppContext)

    useEffect(
        ()=>{
            const source = CancelToken.source()
            const deleteCat=async()=>{
                response = await deleteCategory(user.token, category.id, source.token);
                if (response){
                    setAlert({msg:`Category: ${category.name} Deleted`, cat:'success'})
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`Please Reauthorize Your Account`, cat:'warning'})
                    ///redirect to the login page
                }
            }
            if(category?.name){
                deleteCat();
            };
            return ()=>{source.cancel()}
        },[category]
    )
  
}