import React from "react";
import { Tabs, Tab, Row, Container } from "react-materialize";
import { Link } from "react-router-dom";
import { Films } from './../ListOfFilm';
function New() {
  return (
    <div
      className="detail-container"
      style={{ display: "block", padding: "5rem" }}
    >
      <Tabs className="tab-demo z-depth-1 tabs-fixed-width" scope="tabs-23">
        <Tab
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="player 1"
        >
          <Container>
            <Row>
              <div className="list-card">
                {Films.map((film) => (
                  <div className="column" key={film.id}>
                    <div className="movie-card">
                      <img src={film.image} alt="" />
                      <h3 className="card-title">{film.title}</h3>
                      <p className="card-year">{film.year}</p>
                      <p className="card-nation">{film.nation}</p>
                      <div className="card-detail">
                        <Link
                          to={`detail/${film.id}`}
                          className="openDetail"
                          style={{ color: "white" }}
                        >
                          <span>Detail</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Row>
          </Container>
        </Tab>
        <Tab
          active
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="player 2"
        >
          <Container>
            <Row>
              <div className="list-card">
                {Films.map((film) => (
                  <div className="column" key={film.id}>
                    <div className="movie-card">
                      <img src={film.image} alt="" />
                      <h3 className="card-title">{film.title}</h3>
                      <p className="card-year">{film.year}</p>
                      <p className="card-nation">{film.nation}</p>
                      <div className="card-detail">
                        <Link
                          to={`detail/${film.id}`}
                          className="openDetail"
                          style={{ color: "white" }}
                        >
                          <span>Detail</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Row>
          </Container>
        </Tab>
        <Tab
          //   disabled
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="player 3"
        >
          <Container>
            <Row>
              <div className="list-card">
                {Films.map((film) => (
                  <div className="column" key={film.id}>
                    <div className="movie-card">
                      <img src={film.image} alt="" />
                      <h3 className="card-title">{film.title}</h3>
                      <p className="card-year">{film.year}</p>
                      <p className="card-nation">{film.nation}</p>
                      <div className="card-detail">
                        <Link
                          to={`detail/${film.id}`}
                          className="openDetail"
                          style={{ color: "white" }}
                        >
                          <span>Detail</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Row>
          </Container>
        </Tab>
        <Tab
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="player 4"
        >
          <Container>
            <Row>
              <div className="list-card">
                {Films.map((film) => (
                  <div className="column" key={film.id}>
                    <div className="movie-card">
                      <img src={film.image} alt="" />
                      <h3 className="card-title">{film.title}</h3>
                      <p className="card-year">{film.year}</p>
                      <p className="card-nation">{film.nation}</p>
                      <div className="card-detail">
                        <Link
                          to={`detail/${film.id}`}
                          className="openDetail"
                          style={{ color: "white" }}
                        >
                          <span>Detail</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </div>
  );
}

export default New;
