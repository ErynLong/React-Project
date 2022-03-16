// import  apiClientNoAuth from './clientNoAuth'
// import apiClientTokenAuth from './clientTokenAuth'

// const endpoint = '/user'

// export const getItems = async (cancelToken) =>{
//     let error;
//     let items;

//     const response = await apiClientNoAuth(cancelToken).get(endpoint);
//     if (response.ok){
//         items=response.data.items
//     }else{
//         error = 'An Unexpected Error has Occured. Please Try Again'
//     }
    
//     return{
//         error,
//         items,
//     }
// }

// export const getItemsByCat = async(id, cancelToken)=>{
//     let error;
//     let items;

//     const response = await apiClientNoAuth(cancelToken).get(endpoint+'/category/'+id);
//     if (response.ok){
//         items=response.data.items
//     }else{
//         error = 'An Unexpected Error has Occured. Please Try Again'
//     }
    
//     return{
//         error,
//         items,
//     }
// }
// export const postItem = async(token, data, cancelToken)=>{
//     const response = await apiClientTokenAuth(token).post(endpoint,data);
//     return response.ok
// }


// export const putItem = async(token,id, data, cancelToken)=>{
//     const response = await apiClientTokenAuth(token).put(endpoint+'/'+id,data);
//     return response.ok
// }


// export const deleteItem = async(token, id, cancelToken)=>{
//     const response = await apiClientTokenAuth(token).delete(endpoint+'/'+id);
//     return response.ok
// }