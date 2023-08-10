import React, { useState } from 'react'
import cartstyle from './cartstyle.css'

export default function Cart({cart,size,setcart}) { //use  setcart and render it from array.js to remove cart

 

  const removecart=(id)=>{
    const val=cart.filter((value)=>value.id !==id)
    setcart(val);
  
  }
    
  return (
   <>
   <p>{`There are Total ${size } in cart`}
   </p>
   <section>{
    cart.map((value)=>{
return(
 
   
        <>
        <div className="cartcontainer">
          <div className="picds">
            <div className="cartpic"><img src={value.imgsrc} alt="" /></div>
            <div className="carttitle"><strong>{value.title}</strong></div>
            </div>
           
            <div className="cartpara">{`${value.price}/-`}</div>
            <i className="fa fa-trash-o" onClick={()=>removecart(value.id)}></i>
            {/* <div className="btn"><button}>Add to Cart</button></div */}
        </div>
  <hr />
    
        </>

)
    }
    )
   }
   </section>

   <br />
   <h3> 
    {`Total Price ${
      cart.map(val=>val.price).reduce((total,value)=>parseInt(total)+parseInt(value),0)
    } /- Rs.` }
   </h3>

   </>
  )
}
