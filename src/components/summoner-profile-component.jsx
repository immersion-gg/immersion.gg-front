import React from 'react'

import PropTypes from 'prop-types'

import '../styles/summoner-profile-component.css'

const SummonerProfileComponent = (props) => {
  return (
    <div
      className={`summoner-profile-component-divcontentheader ${props.rootClassName} `}
    >
      <div className="summoner-profile-component-divcssiswinf">
        <img
          alt={props.pseudo_alt}
          src={props.pseudo_src}
          className="summoner-profile-component-pseudo"
        />
        <div className="summoner-profile-component-divheaderprofileinfo">
          <div className="summoner-profile-component-divprofileicon">
            <img
              alt={props.profileIcon5212jpg_alt}
              src={props.profileIcon5212jpg_src}
              className="summoner-profile-component-profile-icon5212jpg"
            />
            <div className="summoner-profile-component-summonerlevel">
              <span className="summoner-profile-component-text">
                <span className="">121</span>
              </span>
            </div>
          </div>
          <div className="summoner-profile-component-divinfo">
            <div className="summoner-profile-component-list">
              <div className="summoner-profile-component-item">
                <div className="summoner-profile-component-div">
                  <span className="summoner-profile-component-text02">
                    <span className="summoner-profile-component-text03">
                      S2022
                    </span>
                    <span className=""> gold 1</span>
                  </span>
                </div>
              </div>
              <div className="summoner-profile-component-item1">
                <div className="summoner-profile-component-div1">
                  <span className="summoner-profile-component-text05">
                    <span className="summoner-profile-component-text06">
                      S2021
                    </span>
                    <span className=""> gold 1</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="summoner-profile-component-divname">
              <div className="summoner-profile-component-heading1">
                <span className="summoner-profile-component-text08">
                  <span className="">김석균</span>
                </span>
              </div>
              <img
                alt={props.iconbookmarksvg_alt}
                src={props.iconbookmarksvg_src}
                className="summoner-profile-component-iconbookmarksvg"
              />
            </div>
            <div className="summoner-profile-component-link">
              <img
                alt={props.riotlogomarkcircleoffwhite2xpng_alt}
                src={props.riotlogomarkcircleoffwhite2xpng_src}
                className="summoner-profile-component-riotlogomarkcircleoffwhite2xpng"
              />
              <div className="summoner-profile-component-span">
                <span className="summoner-profile-component-text10">
                  <span className="">
                    Link with your Riot account and set your profile.
                  </span>
                </span>
              </div>
              <img
                alt={props.iconarrowrightsvg_alt}
                src={props.iconarrowrightsvg_src}
                className="summoner-profile-component-iconarrowrightsvg"
              />
            </div>
            <button className="summoner-profile-component-button">
              <span className="summoner-profile-component-text12">
                <span className="">Update</span>
              </span>
            </button>
            <span className="summoner-profile-component-text14">
              <span className="">Available in 85 Seconds.</span>
            </span>
          </div>
        </div>
      </div>
      <div className="summoner-profile-component-navbar">
        <div className="summoner-profile-component-nav-list">
          <div className="summoner-profile-component-nav-total">
            <div className="summoner-profile-component-text-wrapper">
              <span className="summoner-profile-component-text16">
                {props.text2}
              </span>
            </div>
          </div>
          <div className="summoner-profile-component-nav-champion">
            <span className="summoner-profile-component-text17">
              {props.text}
            </span>
          </div>
          <div className="summoner-profile-component-nav-ingame">
            <span className="summoner-profile-component-text18">
              {props.text1}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

SummonerProfileComponent.defaultProps = {
  riotlogomarkcircleoffwhite2xpng_alt: 'riotlogomarkcircleoffwhite2xpng1810',
  profileIcon5212jpg_alt: 'profileIcon5212jpg1810',
  riotlogomarkcircleoffwhite2xpng_src:
    '/external/riotlogomarkcircleoffwhite2xpng1810-e3zj-200h.png',
  pseudo_alt: 'pseudo1810',
  text2: '종합',
  iconarrowrightsvg_src: '/external/iconarrowrightsvg1810-szvp.svg',
  profileIcon5212jpg_src: '/external/profileicon5212jpg1810-zel-200h.png',
  rootClassName: '',
  iconbookmarksvg_alt: 'iconbookmarksvg1810',
  text: '챔피언',
  text1: '인게임 정보',
  iconbookmarksvg_src: '/external/iconbookmarksvg1810-q6g.svg',
  pseudo_src: '/external/pseudo1810-yol-300h.png',
  iconarrowrightsvg_alt: 'iconarrowrightsvg1810',
}

SummonerProfileComponent.propTypes = {
  riotlogomarkcircleoffwhite2xpng_alt: PropTypes.string,
  profileIcon5212jpg_alt: PropTypes.string,
  riotlogomarkcircleoffwhite2xpng_src: PropTypes.string,
  pseudo_alt: PropTypes.string,
  text2: PropTypes.string,
  iconarrowrightsvg_src: PropTypes.string,
  profileIcon5212jpg_src: PropTypes.string,
  rootClassName: PropTypes.string,
  iconbookmarksvg_alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  iconbookmarksvg_src: PropTypes.string,
  pseudo_src: PropTypes.string,
  iconarrowrightsvg_alt: PropTypes.string,
}

export default SummonerProfileComponent
