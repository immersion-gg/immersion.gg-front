import React from 'react'

import PropTypes from 'prop-types'

import '../styles/champion-static-component.css'

const ChampionStaticComponent = (props) => {
  return (
    <div
      className={`champion-static-component-container ${props.rootClassName} `}
    >
      <div className="champion-static-component-container01">
        <div className="champion-static-component-container02">
          <div className="champion-static-component-container03">
            <div className="champion-static-component-container04">
              <div className="champion-static-component-container05"></div>
              <div className="champion-static-component-container06">
                <img
                  alt={props.profileIcon5212jpg_alt}
                  src={props.profileIcon5212jpg_src}
                  className="champion-static-component-profile-icon5212jpg"
                />
                <span className="champion-static-component-text">김석균</span>
                <div className="champion-static-component-container07"></div>
              </div>
            </div>
          </div>
          <div className="champion-static-component-item">
            <div className="champion-static-component-container08">
              <img
                alt="SVG4281"
                src="/external/svg4281-41kp.svg"
                className="champion-static-component-svg"
              />
              <img
                alt="SVG4277"
                src="/external/svg4277-pj57.svg"
                className="champion-static-component-svg1"
              />
            </div>
          </div>
          <div className="champion-static-component-container09"></div>
        </div>
      </div>
      <div className="champion-static-component-container10">
        <div className="champion-static-component-container11"></div>
        <div className="champion-static-component-container12">
          <span className="champion-static-component-text1">
            <span className="">3.27</span>
          </span>
          <span className="champion-static-component-text3">
            <span className="">KDA</span>
          </span>
        </div>
      </div>
    </div>
  )
}

ChampionStaticComponent.defaultProps = {
  profileIcon5212jpg_src: '/external/profileicon5212jpg1810-zel-200h-200h.png',
  profileIcon5212jpg_alt: 'profileIcon5212jpg1810',
  rootClassName: '',
}

ChampionStaticComponent.propTypes = {
  profileIcon5212jpg_src: PropTypes.string,
  profileIcon5212jpg_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ChampionStaticComponent
