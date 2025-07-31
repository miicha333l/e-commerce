// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: '#222',
      color: '#fff',
      textAlign: 'center',
      padding: '25px 0',
      marginTop: 40
    }}>
      <div style={{ marginBottom: 10 }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={{ width: 24, verticalAlign: 'middle' }} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" style={{ width: 24, verticalAlign: 'middle' }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style={{ width: 24, verticalAlign: 'middle' }} />
        </a>
      </div>
      <p style={{ margin: 0 }}>© {year} Mon Site E-commerce. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
