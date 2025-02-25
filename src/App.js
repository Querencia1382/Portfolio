import React from 'react';
import { BrowserRouter , Routes , Route , Link} from "react-router-dom"


export default function App() {

  const [account , setAccount] = React.useState(null)


  return (
    <BrowserRouter>
    <nav className='nav-bar'>
      <Link to="/" className="nav-anchor">Home</Link>
      <Link to="/Products" className="nav-anchor">Products</Link>
      <Link to="/Contact-us" className="nav-anchor">Contact-us</Link>
      <Link to="/About-us" className="nav-anchor">About-us</Link>
      <Link to="/Cart" className="nav-anchor">Cart</Link>
      {account != null ? <Link to="/Account" className="nav-anchor">Account</Link> : <Link to="/Sign-in" className="nav-anchor">Log-in</Link>}
    </nav>
      <Routes>
        <Route path='/' element={<h1>E-commerce</h1>}/>
        <Route path='/Products' element={<h1>Products</h1>}/>
        <Route path='/Products/:id' element={<h1>Product</h1>}/>
        <Route path='/Account' element={<h1>Account</h1>}/>
        <Route path='/Sign-in' element={<h1>Sign-in</h1>}/>
        <Route path='/Transactions' element={<h1>Transactions</h1>}/>
        <Route path='/Cart' element={<h1>Cart</h1>}/>
        <Route path='/About-us' element={<h1>About us</h1>}/>
        <Route path='/Contact-us' element={<h1>Contact us</h1>}/>
      </Routes>
    </BrowserRouter>
  )
};

