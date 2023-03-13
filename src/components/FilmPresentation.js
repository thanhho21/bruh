import React from 'react';
// import { useState } from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';





export default function FilmPresentation ( { films } ) {
    // const [film, setFilm] = useState( {} );
    return (
        <div className='container'>
            <div className='list-card'>
                {films.map( ( film ) => (
                    <div className='column' key={film.id}>
                        <div className="movie-card">
                            <img src={film.image} alt='' />
                            <h3 className="card-title">{film.title}</h3>
                            <p className="card-year">{film.year}</p>
                            <p className="card-nation">{film.nation}</p>
                            <div className='card-detail'>
                                <Link to={`detail/${film.id}`} className='openDetail' style={{ color: 'white' }}>
                                    <span>Detail</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ) )}
            </div>
            {/* <div id='popup1' className='overlay'>
                <div className='popup'>
                    <img src={film.image} alt="" />
                    <h2>{film.title}</h2>
                    <a className='close' href='#'>&#10006;</a>
                    <div className='content'>
                        <p>{film.nation}</p>
                        <time>{film.year}</time>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
