import React from 'react';
import { Routes , Route , Link, Outlet } from "react-router-dom";
import accountSvg from "../src/icons/Account-SVG.svg";
import cartSvg from "../src/icons/Cart2-SVG.svg";
import loginSvg from "../src/icons/Login2-SVG.svg";
import telegramSvg from "../src/icons/Telegram-SVG.svg";
import instagramSvg from "../src/icons/Instagram-SVG.svg";
import emailSvg from "../src/icons/Email-SVG.svg";
import Home from './Pages/Home/home';
import Product from './Pages/Product/product';
import Test from './Pages/About-us/test';


export default function App() {

  const [account , setAccount] = React.useState(null)


  return (
    <>
      <nav className='nav-bar'>
        <h1 style={{ fontSize : "26px" , marginRight : "auto" }}>VK Boutique</h1>
        <Link to="/" className="anchor--txt">Home</Link>
        <Link to="/Products" className="anchor--txt">Products</Link>
        <Link to="/Contact-us" className="anchor--txt">Contact us</Link>
        <Link to="/About-us" className="anchor--txt">About us</Link>
        <Link to="/Cart" className="nav-anchor-btn"><img srcSet={cartSvg} /></Link>
        {account != null ? <Link to="/Account" className="nav-anchor-btn"><img srcSet={accountSvg} style={{width: "30px"}}/></Link> : <Link to="/Log-in" className="nav-anchor-btn"><img srcSet={loginSvg} /></Link>}
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Products' element={
          <>
            <h1>Products</h1>
            <Outlet />
          </>
          }>
          <Route index element={<h2>index</h2>} />
          <Route path="WomanClothing" element={<h2>Women's clothing</h2>} />
          <Route path="ManClothing" element={<h2>Men's clothing</h2>} />
          <Route path="Jewlery" element={<h2>Jewlery</h2>} />
          <Route path="Electronics" element={<h2>Electronics</h2>} />
        </Route>
        <Route path='/Product/:id' element={<Product />}/>
        <Route path='/Account' element={<h1>Account</h1>}/>
        <Route path='/Log-in' element={<h1>Log-in</h1>}/>
        <Route path='/Transactions/:id' element={<h1>Transactions</h1>}/>
        <Route path='/Cart' element={<h1>Cart</h1>}/>
        <Route path='/About-us' element={<Test />}/>
        <Route path='/Contact-us' element={<h1>Contact us</h1>}/>
      </Routes>
      <footer className='footer'>
          <div style={{ display : "flex" , gap : "32px" }}>
            <h3 style={{ fontSize : "26px" , marginRight : "48px" }}>VK Boutique</h3>
            <a className='footer--anchor' href=''>
              <img srcSet={telegramSvg} className='icon'/>
              <h3>Telegram</h3>
            </a>
            <a className='footer--anchor' href=''>
              <img srcSet={instagramSvg} className='icon'/>
              <h3>Instagram</h3>
            </a>
            <a className='footer--anchor' href=''>
              <img srcSet={emailSvg} className='icon'/>
              <h3>Email</h3>
            </a>
          </div>
          <div style={{ display : "flex" , gap : "24px" }}>
            <Link to="/" className="anchor--txt">Home</Link>
            <Link to="/Products" className="anchor--txt">Products</Link>
            <Link to="/Contact-us" className="anchor--txt">Contact us</Link>
            <Link to="/About-us" className="anchor--txt">About us</Link>
          </div>
          <p>All the rights belong to the VK Boutique website</p>
      </footer>
    </>
  )
};