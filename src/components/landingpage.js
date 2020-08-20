import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from '../imgs/logo-white-trans.png';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={logo}
              alt="logo"
              className="logo"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p> HTML/CSS | Bootstrap | JavaScript | React | Node.JS | MySQL | MongoDB
              </p>
              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/daniel-vega-b4151537/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/danielalexvega" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Spotify */}
                <a href="https://open.spotify.com/playlist/3lIt6K5O4GN4vIwnTZVdzL?si=6sRNXuHASRed9zw9HdjP-w" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-spotify"></i>
                </a>

                 {/* Bandcamp */}
                 <a href="https://desertculture.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-bandcamp" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default LandingPage;

