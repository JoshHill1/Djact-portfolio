import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/">Home</Link>
        </li>
        <li style={styles.li}>
          <Link to="/about">About</Link>
        </li>
        <li style={styles.li}>
          <Link to="/projects">Projects</Link>
        </li>
        <li style={styles.li}>
          <Link to="/blog">Blog</Link>
        </li>
        <li style={styles.li}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    background: '#333',
    padding: '0.5rem 1rem',
  },
  ul: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  li: {
    marginRight: '1rem',
  },
};

export default NavBar;
