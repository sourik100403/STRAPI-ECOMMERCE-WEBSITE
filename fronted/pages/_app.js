import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { useEffect,useState } from 'react'
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
  </Head>

  useEffect(() => {
    // console.log("useeffect here")
  },[]);
  const [cart, setCart] = useState([]);
  const [reloadKey,setReloadKey]=useState()
  const addToCart=(item,qty,price)=>{
    let newCart=cart
    for (let index = 0; index < qty; index++) {
      const element = qty;
      newCart.push([item,price])
    }
    setCart(newCart)
    setReloadKey(Math.random())
  }
  const removeFromCart=(item,qty)=>{
    let newCart=cart
    let index=newCart.indexOf(item)
    newCart.splice(index)
    setCart(newCart)

  }
  const clearCart=(item)=>{
    setCart([])

  }

  return<><Navbar key={reloadKey} cart={cart}/><Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} {...pageProps} /> <Footer/></>
}

export default MyApp
