import React from "react";

function ModalCase({ film, handleClick }) {
  return (
    <div className="modal-show" onClick={handleClick}>
      <div
        id="modal1"
        className="modal"
        style={{ display: "block", top: "28%" }}
      >
        <div className="modal-content">
          <h4>Video for</h4>
          <p>
            <iframe
              width="100%"
              height="400px"
              src={film.clip}
              title={film.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscopel picture-in-picture"
              allowFullScreen
            />
            {film.title}
          </p>
        </div>
        <div className="modal-footer">
          <a className="modal-close red-text">Close</a>
        </div>
      </div>
    </div>
  );
}

export { ModalCase };
