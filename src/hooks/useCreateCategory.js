import React, { useEffect, useContext } from 'react'
import { CancelToken } from 'apisauce'
import { postCategory } from '../api/apiCategory'
import { AppContext } from '../context/AppContext'

export default function useCreateCategory(category) {   
    let response
    const {user, setAlert} =useContext(AppContext)

    useEffect(
        ()=>{
            const source = CancelToken.source()
            const createCat=async()=>{
                response = await postCategory(user.token, category.name, source.token);
                if (response){
                    setAlert({msg:`Category: ${category.name} Created`, cat:'success'})
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`Please Reauthorize Your Account`, cat:'warning'})
                    ///redirect to the login page
                }
            }
            if(category?.name){
                createCat();
            };
            return ()=>{source.cancel()}
        },[category]
    )
  
}