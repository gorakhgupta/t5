import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Images from './Images';
function Card(props)
{return (
    <>
  <div className="cards">
  <div className="card">
  {/* <Images imgsrc={props.mysrc}/> */}
      <img src={props.mysrc} alt="myPic" className="card_img" />
      <div className="card_info">
     
          <span className="card_category">{props.sname} </span>
          <h3 className="card-title">{props.mytitle}</h3>
          <a href="https://www.google.com" target="_blank">
              <button> Watch Now </button>
          </a>

      </div>

  </div>

</div>
</>
);
}
export default Card;
