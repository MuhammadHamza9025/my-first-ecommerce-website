import logo from './logo.svg';
import './App.css';
import array from './Component/Array';
import ResponsiveNav from './Component/ResponsiveNav';
import { useEffect, useState } from 'react';
import OurServices from './Component/OurServices';
import Cart from './Component/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
   

const [product,setproduct]=useState(array); // for pasing array to other components
const [cart,setcart]=useState([]);

const addtocart=(data)=>{
    
  
setcart([...cart,data])
console.log(data)
// alert('Item Added Sucessfully !')
}


  return (
  <>
  <BrowserRouter>
  <ResponsiveNav size={cart.length}></ResponsiveNav>
  
 
 
  <Routes>
  <Route path='/' element={< OurServices product={product}  addtocart={addtocart}></OurServices>}></Route>
 <Route path='/Cart' element={<Cart cart={cart} setcart={setcart} size={cart.length} ></Cart>}></Route>
  </Routes>
  </BrowserRouter>
  

  </>
  );
}

export default App;
