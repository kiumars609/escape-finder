import React from 'react'
import "./style.css";
import Card from './Card';

export default function Cards() {
  return (
    <>
    <div className="container-fluid show-cards">
        <div className="row">
            <Card />
        </div>
    </div>
    </>
  )
}
