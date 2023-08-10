import React, { useState ,useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurServices({product,addtocart}) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const [items,setitems]=useState(product); //For Category Buttons Always use items in map and procucts in function
    const [search ,setsearch]=useState('') //For Search

    const filteritem=(category)=>{
const update=product.filter((currentdata)=>{
return currentdata.category===category;
})
setitems(update);
    }
  return (
   <>

<div className="search">
    <input type="text"  placeholder='Enter Your Items Here ...' onChange={(e)=>{setsearch(e.target.value)}}/>
</div>
<div className="buttons">
    <button onClick={()=>filteritem('Development')}>Development</button>
    <button  onClick={()=>filteritem('Marketing')}>Marketing</button>
    <button  onClick={()=>setitems(product)}>All</button>
</div>

      <section>
   {items
.filter((val)=>{
    if(search===''){
        return val;
    }
    else if(val.title.toLowerCase().includes(search.toLowerCase().trim())) {
        return val;
    }
})

   .map((val)=>{
return(

 
    
    <div className="mainconatiner">
        <div className="container"  data-aos="fade-up" >
            <div className="pic"><img src={val.imgsrc} alt="" /></div>
            <div className="title"><strong>{val.title}</strong></div>
            <div className="para">{val.para}</div>
            <div className="btn"><button onClick={()=>addtocart(val)}>Add to Cart</button></div>
        </div>
    </div>
    
   
)
   })
   }
    </section>
   </>
  )
}
