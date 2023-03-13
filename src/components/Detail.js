import React, { useState } from 'react'
import { Icon } from "react-materialize";
// import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import { useParams } from 'react-router-dom';
import { Films } from '../ListOfFilm';
import { ModalCase } from './ModalCase';

export default function Detail () {
        const [popup, setPopup] = useState(false);
        function handleClick() {
          setPopup(!popup);
        }
    const filmID = useParams();
    const film = Films.find( obj => {
        return obj.id == filmID.id;
    } );
    return (
      <div className="detail-container">
        <div className="product-card">
          <div className="badge">{film.title}</div>
          <div className="product-tumb" style={{ margin: "auto" }}>
            <img src={`../${film.image}`} alt="" />
          </div>

          <div className="product-details" style={{ textAlign: "center" }}>
            <h4>{film.year}</h4>
            <p>{film.nation}</p>
            <div className="product-bottom-details"></div>
            <div>{film.description}</div>
            <div
              onClick={handleClick}
              className="btn-floating waves-effect waves-light red"
            >
              <Icon>ondemand_video</Icon>
            </div>
          </div>
        </div>
        {popup && <ModalCase film={film} handleClick={handleClick} />}
      </div>
    );
// export default function Detail() {
//   return (
//     <div>Detail</div>
//   )
// }

    }