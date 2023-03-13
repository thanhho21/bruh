import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon } from "react-materialize";
export default function Navigation () {
    const { theme, toggle, dark } = useContext( ThemeContext );
    return (
      <nav
        id="navigation"
        style={{ display: "flex", background: theme.background }}
      >
        <Navbar
          alignLinks="right"
          menuIcon={<Icon>menu</Icon>}
          options={{
            preventScrolling: true,
          }}
        >
          <NavItem>
            <Link to="/" style={{ color: theme.color }}>
              <Icon left>home</Icon> Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" style={{ color: theme.color }}>
              <Icon left>contacts</Icon>Contact
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" style={{ color: theme.color }}>
              <Icon left>info_outline</Icon>About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/new" style={{ color: theme.color }}>
              <Icon left>dvr</Icon>New
            </Link>
          </NavItem>
        </Navbar>
        <div
          className="mode"
          style={{
            marginRight: "2rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <a
            className="switch-mode"
            href="#!"
            onClick={toggle}
            style={{
              color: theme.color,
              textDecoration: "none",
              fontWeight: 700,
              outline: "none",
            }}
            data-testid="toggle-theme-btn"
          >
            Switch to {!dark ? "Dark" : "Light"} mode
          </a>
        </div>
      </nav>
    );
};
