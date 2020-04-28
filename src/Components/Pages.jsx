import React from "react";
import {Link,NavLink,withRouter} from "react-router-dom";
const Pages =(props)=>{
    const PageNumber =[]
    for(let i=1;i<=props.totalPages;i++){
        PageNumber.push(i);
    }
    console.log(props.totalPages)
    return (
    <div className="nav-wrapper row ">
      <ul className='pagination center' style={{marginTop:10}}>
        {PageNumber.map(number => (
          <li key={number} className='waves-effect' style={{background:"white"}}>
              <Link onClick={()=>props.paginate(number)} className='page-link'to="/">{number}</Link>
          </li>
        ))}

      </ul>
    </div>
    )
}
export default Pages

