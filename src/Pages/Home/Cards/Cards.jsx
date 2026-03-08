import React from 'react'
import "./style.css";
import Card from '../../../Components/Card/Card';

export default function Cards() {
  return (
    <>
    <div className="row col-12 col-md-10 mx-auto show-cards bg-danger">
        {/* <div className="row bg-danger d-flex"> */}
            
        {/* </div> */}
        <div className="col-12 col-md-4"><Card /></div>
        <div className="col-12 col-md-4"><Card /></div>
        <div className="col-12 col-md-4"><Card /></div>
    </div>
    </>
  )
}
