import React from "react";
const Pages =(props)=>{
    const PageNumber =[]
    for(let i=1;i<=props.totalPages;i++){
        PageNumber.push(i);
    }
    console.log(props.totalPages)
    return (
    <div className="nav-wrapper">
      <ul className='pagination'>
        {PageNumber.map(number => (
          <li key={number} className='waves-effect'>
            <a onClick={()=>props.paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}

      </ul>
    </div>
    )
}
export default Pages

