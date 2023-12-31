import { useState } from 'react'
import { useHistory } from "react-router-dom";

import { Helmet } from 'react-helmet'

import '../styles/home.css'

const Home = () => {
let history = useHistory();
const [inputSummonerName, setInputSummonerName] = useState('');

  const handleInputChange = (event) => {
    setInputSummonerName(event.target.value); // setInputSummonerName 업데이트
  };

   const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
        history.push({pathname: `/match-list-page/${inputSummonerName}`, state:{inputSummonerName}});
      }
    };

  const sendSummonerName = () => { //백엔드로 입력된 summonerName을 보낸다
        history.push({pathname: `/match-list-page/${inputSummonerName}`, state:{inputSummonerName}});
  };

  return (
    <div className="home-container">
      <Helmet>
        <title>Immersion.GG</title>
      </Helmet>
      <div className="home-container1">
        <div className="home-header-margin"/>
        <div className="home-search-wrapper">
          <img
            src="/external/immersiongg-logo.png"
            className="home-home-background"
          />
          <div className="home-search-form">
            <div className="home-form">
              <button className="home-button"  onClick={sendSummonerName}>
                <img
                  alt="iconggsvg6785"
                  src="/external/iconggsvg6785-k486.svg"
                  className="home-ggsvg"
                />
              </button>
              <div className="home-div">
                <span className="home-text">Search</span>
                <input className="home-input" type="text" name="inputSummonerName" placeholder="소환사명" value={inputSummonerName} onChange={handleInputChange} onKeyPress={handleKeyPress}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
