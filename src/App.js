import React, {useContext} from 'react';
import './App.css';
import Button from './components/Button';
import Error from './components/Error';
import NavBar from './components/NavBar';
import {getUser} from './api/apiBasicAuth';
import { postCategory } from './api/apiCategory';
import { getItemsByCat } from './api/apiItem';
import {CancelToken} from 'apisauce';
import LoginForm from './forms/LoginForm';
import CatForm from './forms/CatForm';
import AdminMenu from './components/AdminMenu';
import ItemForm from './forms/ItemForm';
import AdminSelectCat from './components/AdminSelectCat';
import CategoryBar from './components/CategoryBar';
import ItemBrowser from './components/ItemBrowser';
import SnackBar from './components/SnackBar';
import Cart from './components/Cart/Index';
import ShopBrowser from './views/ShopBrowser';
import AdminSelectItem from './components/AdminSelectItem';
import CartPage from './views/CartPage';
import AdminCategory from './views/AdminCategory';
import AdminItem from './views/AdminItems';
import {Routes, Route} from 'react-router-dom';
import Login from './views/Login';
import { AppContext } from './context/AppContext';
import Logout  from './views/Logout';
import RequireAdmin from './components/RequireAdmin';


const HomePage=()=>{return(<h1>Hi!</h1>)}


function App() {
  const {user}=useContext(AppContext)

  return (
    <>
      <SnackBar/>
      <NavBar>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/shop" element={<ShopBrowser/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>

          <Route path="/admincat" element={
          <RequireAdmin redirectTo={"/login"}>
            <AdminCategory/>
          </RequireAdmin>
        }/>
        
          <Route path="/adminitem" element={<RequireAdmin redirectTo={"/login"}><AdminItem/></RequireAdmin>}/>

        
        </Routes>

        
        {user?.is_admin?<AdminMenu/>:''}

      </NavBar>
    </>
  );
}

export default App;
// import React from 'react';
// import './App.css';
// import SimpleAccordian from './components/Accordian'
// import Button from './components/Button';
// import Error from './components/Error';
// import { ThemeProvider } from '@mui/material/styles';
// import rainbowTheme from './themes/rainbowTheme';
// import NavBar from './components/NavBar';
// import {putUser} from './api/apiUser';
// import {getUser} from './api/apiBasicAuth';
// import {postCategory} from './api/apiCategory';
// import {getBooks} from './api/apiBooks';
// import {CancelToken} from 'apisauce';
// import LoginForm from './forms/LoginForm';
// // import AppContextProvider from 'src\AppContext.js'

// import ItemForm from './forms/RegisterEditForm';
// // import AdminSelectCat from './components/AdminSelectCat';
// const handleClick = async () => {
//   const source = CancelToken.source();
//   const response_object = await getUser("e@email.com", "123abc", source.token);
//   console.log(response_object)
// }

// function App() {
//   return (
//       <NavBar>
//         <h1>My First React Page!</h1>
//          <div className="App">
//      <SimpleAccordian></SimpleAccordian>
//     </div>
//         <LoginForm />
//         <ItemForm/>

//       </NavBar>
//   // return (
//   //   <div className="App">
//   //     <SimpleAccordian></SimpleAccordian>
//   //   </div>
//   );
// }

// export default App;
// import React, {useContext} from 'react';
// import './App.css';
// import Button from './components/Button';
// import Error from './components/Error';
// import NavBar from './components/NavBar';
// import {getUser} from './api/apiBasicAuth';
// import { postCategory } from './api/apiCategory';
// import { getItemsByCat } from './api/apiUser';
// import {CancelToken} from 'apisauce';
// import LoginForm from './forms/LoginForm';
// import CatForm from './forms/CatForm';
// import AdminMenu from './components/AdminMenu';
// import ItemForm from './forms/ItemForm';
// import AdminSelectCat from './components/AdminSelectCat';
// import CategoryBar from './components/CategoryBar';
// import ItemBrowser from './components/ItemBrowser';
// import SnackBar from './components/SnackBar';
// import Cart from './components/Cart/Index';
// import ShopBrowser from './views/ShopBrowser';
// import AdminSelectItem from './components/AdminSelectItem';
// // import CartPage from './views/CartPage';
// import AdminCategory from './views/AdminCategory';
// import AdminItem from './views/AdminItems';
// import {Routes, Route} from 'react-router-dom';
// import Login from './views/Login';
// import { AppContext } from './context/AppContext';
// import Logout  from './views/Logout';
// import RequireAdmin from './components/RequireAdmin';



// const HomePage=()=>{return(<h1>Welcome to the show!</h1>)}


// function App() {
//   const {user}=useContext(AppContext)

//   return (
//     <>
      {/* <SnackBar/> */}
      {/* <NavBar> */}
        {/* <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/shop" element={<ShopBrowser/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>

          <Route path="/admincat" element={ */}
          {/* <RequireAdmin redirectTo={"/login"}>
            <AdminCategory/>
          </RequireAdmin>
        }/> */}
        
          {/* <Route path="/adminitem" element={<RequireAdmin redirectTo={"/login"}><AdminItem/></RequireAdmin>}/>

        
        </Routes> */}

        
        {/* {user?.is_admin?<AdminMenu/>:''} */}

      {/* </NavBar>
    </>
  );
}

export default App; */}