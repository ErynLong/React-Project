// import  apiClientNoAuth from './clientNoAuth'

// const endpoint = '/book'

// export const getBooks = async (cancelToken) =>{
//     let error;
//     let books;

//     const response = await apiClientNoAuth(cancelToken).get(endpoint);
//     if (response.ok){
//         books=response.data
//     }else{
//         error = 'An Unexpected Error has Occured. Please Try Again'
//     }
//     return{
//         error,
//         books,
//     }
// }