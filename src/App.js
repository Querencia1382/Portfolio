import React from 'react';
import { BrowserRouter , Routes , Route , Link} from "react-router-dom"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>E-commerce</h1>}/>
        <Route path='/Products' element={<h1>Products</h1>}/>
        <Route path='/Product/:id' element={<h1>Product</h1>}/>
        <Route path='/Account' element={<h1>Account</h1>}/>
        <Route path='/Sign-In' element={<h1>Sign-In</h1>}/>
        <Route path='/Transactions' element={<h1>Transactions</h1>}/>
        <Route path='/Cart' element={<h1>Cart</h1>}/>
        <Route path='/About-us' element={<h1>About us</h1>}/>
        <Route path='/Contact-us' element={<h1>Contact us</h1>}/>
      </Routes>
    </BrowserRouter>
  )
};

