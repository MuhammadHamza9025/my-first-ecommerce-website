import React, { useState } from 'react'
import Res from './Res.css'

import { Link } from 'react-router-dom';

export default function ResponsiveNav({size}) {
    const [showmedia,set]=useState(false);
  return (
    <nav className="main">
        <div className="logo">
            <h3><span>M</span>uhammad<span>H</span>amza</h3>
</div>
<div className="menu-link">
    <ul className={showmedia ? "active" : "ul"}>
        <li><Link to="/">Home</Link></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    
    
</div>

<div className="fafa">
<Link to="/Cart"><i class="fa fa-shopping-cart"><sup>{size}</sup></i></Link>


</div>
<div className="hammenu" onClick={()=>set(!showmedia) }>
            <div className="ham"></div>
            <div className="ham"></div>
            <div className="ham"></div>
     </div>
    </nav>
    
  )
}
