import React, { Component } from 'react';
import { Films } from '../ListOfFilm';
import Navigation from './Navigation';
import Footer from './Footer';
import FilmPresentation from './FilmPresentation';
import { Routes, Route } from "react-router-dom";
import Detail from './Detail';
import Contact from './Contact';
import About from './About';
import New from './New';


export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            films: Films
        };
    }
    render() {
        return (
          <main>
            <Navigation />
            <Routes>
              <Route
                path="/"
                element={<FilmPresentation films={this.state.films} />}
              />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/new" element={<New />}></Route>
            </Routes>
            <Footer />
          </main>
        );
    }
}
