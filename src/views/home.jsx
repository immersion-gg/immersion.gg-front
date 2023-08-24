import React from 'react';

import { Helmet } from 'react-helmet';

import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-container1">
        <div className="home-header-margin"></div>
        <div className="home-search-wrapper">
          <img
            src="/external/fc9a4aeddcf438c0b4faa8556253fadcpng6784-0klk-300h.png"
            alt="fc9a4aeddcf438c0b4faa8556253fadcpng6784"
            className="home-home-background"
          />
          <div className="home-search-form">
            <div className="home-form">
              <button className="home-button">
                <img
                  src="/external/iconggsvg6785-k486.svg"
                  alt="iconggsvg6785"
                  className="home-ggsvg"
                />
              </button>
              <div className="home-div">
                <span className="home-text">Search</span>
                <div className="home-input">
                  <div className="home-divplaceholder">
                    <span className="home-text1">
                      <span>Name1, Name2, ...</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
