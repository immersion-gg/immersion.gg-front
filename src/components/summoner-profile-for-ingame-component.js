import React, { useState } from 'react'
import { useLocation, useHistory } from "react-router-dom";

import PropTypes from 'prop-types'

import '../styles/summoner-profile-for-ingame-component.css'

const SummonerProfileForIngameComponent = (props) => {

let history = useHistory();
const location = useLocation();
const inputSummonerName = location.state.inputSummonerName;
console.log(inputSummonerName);

  const GoList = () => {
        history.push({pathname: `/match-list-page/${inputSummonerName}`, state:{inputSummonerName}});
  };


  return (
    <div
      className={`summoner-profile-for-ingame-component-divcontentheader ${props.rootClassName} `}
    >
      <div className="summoner-profile-for-ingame-component-divheaderprofileinfo">
        <div className="summoner-profile-for-ingame-component-divprofileicon">
          <img
            alt={props.profileIcon5212jpg_alt}
            src={props.profileIcon5212jpg_src}
            className="summoner-profile-for-ingame-component-profile-icon5212jpg"
          />
          <div className="summoner-profile-for-ingame-component-summonerlevel">
            <span className="summoner-profile-for-ingame-component-text">
              <span className="">121</span>
            </span>
          </div>
        </div>
        <div className="summoner-profile-for-ingame-component-divinfo">
          <div className="summoner-profile-for-ingame-component-list">
            <div className="summoner-profile-for-ingame-component-item">
              <div className="summoner-profile-for-ingame-component-div">
                <span className="summoner-profile-for-ingame-component-text02">
                  <span className="summoner-profile-for-ingame-component-text03">
                    S2022
                  </span>
                  <span className=""> gold 1</span>
                </span>
              </div>
            </div>
            <div className="summoner-profile-for-ingame-component-item1">
              <div className="summoner-profile-for-ingame-component-div1">
                <span className="summoner-profile-for-ingame-component-text05">
                  <span className="summoner-profile-for-ingame-component-text06">
                    S2021
                  </span>
                  <span className=""> gold 1</span>
                </span>
              </div>
            </div>
          </div>
          <div className="summoner-profile-for-ingame-component-divname">
            <div className="summoner-profile-for-ingame-component-heading1">
              <span className="summoner-profile-for-ingame-component-text08">
                <span className="">김석균</span>
              </span>
            </div>
          </div>
          <button className="summoner-profile-for-ingame-component-button">
            <span className="summoner-profile-for-ingame-component-text10">
              <span className="">Update</span>
            </span>
          </button>
          <span className="summoner-profile-for-ingame-component-text12">
            <span className="">Available in 85 Seconds.</span>
          </span>
        </div>
      </div>
      <div className="summoner-profile-for-ingame-component-navbar">
        <div className="summoner-profile-for-ingame-component-nav-list">
          <div className="summoner-profile-for-ingame-component-nav-total">
            <div className="summoner-profile-for-ingame-component-text-wrapper">
              <button className="summoner-profile-for-ingame-component-text14" onClick={GoList}>
                {props.text2}
              </button>
            </div>
          </div>
          <div className="summoner-profile-for-ingame-component-nav-champion">
            <span className="summoner-profile-for-ingame-component-text15" >
              {props.text}
            </span>
          </div>
          <div className="summoner-profile-for-ingame-component-nav-ingame">
            <span className="summoner-profile-for-ingame-component-text16">
              {props.text1}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

SummonerProfileForIngameComponent.defaultProps = {
  profileIcon5212jpg_alt: 'profileIcon5212jpg1810',
  text2: '종합',
  iconarrowrightsvg_src: '674df87e-fea1-4126-a42c-61d96f490186',
  rootClassName: '',
  riotlogomarkcircleoffwhite2xpng_alt: 'riotlogomarkcircleoffwhite2xpng1810',
  iconarrowrightsvg_alt: 'iconarrowrightsvg1810',
  pseudo_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/6598e7fc-775c-45b0-a3d2-e5ad98fcd8a1?org_if_sml=11694',
  iconbookmarksvg_alt: 'iconbookmarksvg1810',
  text: '챔피언',
  iconbookmarksvg_src: 'a388f432-5ee5-4ab9-916b-21e8151523a8',
  riotlogomarkcircleoffwhite2xpng_src: 'cd877376-4ac2-445b-9637-aceba61fa6bb',
  profileIcon5212jpg_src: 'eabcebc5-b2bc-4b63-b51b-9c4b46b9861b',
  pseudo_alt: 'pseudo1810',
  text1: '인게임 정보',
}

SummonerProfileForIngameComponent.propTypes = {
  profileIcon5212jpg_alt: PropTypes.string,
  text2: PropTypes.string,
  iconarrowrightsvg_src: PropTypes.string,
  rootClassName: PropTypes.string,
  riotlogomarkcircleoffwhite2xpng_alt: PropTypes.string,
  iconarrowrightsvg_alt: PropTypes.string,
  pseudo_src: PropTypes.string,
  iconbookmarksvg_alt: PropTypes.string,
  text: PropTypes.string,
  iconbookmarksvg_src: PropTypes.string,
  riotlogomarkcircleoffwhite2xpng_src: PropTypes.string,
  profileIcon5212jpg_src: PropTypes.string,
  pseudo_alt: PropTypes.string,
  text1: PropTypes.string,
}

export default SummonerProfileForIngameComponent
