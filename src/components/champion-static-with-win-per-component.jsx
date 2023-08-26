import PropTypes from 'prop-types'

import '../styles/champion-static-with-win-per-component.css'

const ChampionStaticWithWinPerComponent = (props) => {
  return (
    <div
      className={`champion-static-with-win-per-component-container ${props.rootClassName} `}
    >
      <div className="champion-static-with-win-per-component-container01">
        <div className="champion-static-with-win-per-component-container02">
          <div className="champion-static-with-win-per-component-container03">
            <div className="champion-static-with-win-per-component-container04">
              <div className="champion-static-with-win-per-component-container05"></div>
              <div className="champion-static-with-win-per-component-container06">
                <img
                  alt={props.profileIcon5212jpg_alt}
                  src={props.profileIcon5212jpg_src}
                  className="champion-static-with-win-per-component-profile-icon5212jpg"
                />
                <span className="champion-static-with-win-per-component-text">
                  <span className="">김석균</span>
                </span>
                <div className="champion-static-with-win-per-component-container07">
                  <span className="champion-static-with-win-per-component-text2">
                    승률 0%
                  </span>
                  <span className="champion-static-with-win-per-component-text3">
                    / 최근 0 경기
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="champion-static-with-win-per-component-item">
            <div className="champion-static-with-win-per-component-container08">
              <img
                alt="SVG4281"
                src="/external/svg4281-41kp.svg"
                className="champion-static-with-win-per-component-svg"
              />
              <img
                alt="SVG4277"
                src="/external/svg4277-pj57.svg"
                className="champion-static-with-win-per-component-svg1"
              />
            </div>
          </div>
          <div className="champion-static-with-win-per-component-container09"></div>
        </div>
      </div>
      <div className="champion-static-with-win-per-component-container10">
        <div className="champion-static-with-win-per-component-container11"></div>
        <div className="champion-static-with-win-per-component-container12">
          <span className="champion-static-with-win-per-component-text4">
            <span className="">3.27</span>
          </span>
          <span className="champion-static-with-win-per-component-text6">
            <span className="">KDA</span>
          </span>
        </div>
      </div>
    </div>
  )
}

ChampionStaticWithWinPerComponent.defaultProps = {
  profileIcon5212jpg_src: '/external/profileicon5212jpg1810-zel-200h-200h.png',
  profileIcon5212jpg_alt: 'profileIcon5212jpg1810',
  rootClassName: '',
}

ChampionStaticWithWinPerComponent.propTypes = {
  profileIcon5212jpg_src: PropTypes.string,
  profileIcon5212jpg_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ChampionStaticWithWinPerComponent
