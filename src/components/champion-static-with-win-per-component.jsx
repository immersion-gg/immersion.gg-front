import PropTypes from 'prop-types'

import '../styles/champion-static-with-win-per-component.css'
import { useOpChampionContext } from '../views/champion-statistic-component';

const ChampionStaticWithWinPerComponent = (props) => {
  const { opChampionName, opChampion } = useOpChampionContext();
  console.log(opChampion);
  return (
    <div
      className={`champion-static-with-win-per-component-container ${props.rootClassName} `}
    >
      {
        opChampion &&
      <div className="champion-static-with-win-per-component-container01">
        <div className="champion-static-with-win-per-component-container02">
          <div className="champion-static-with-win-per-component-container03">
            <div className="champion-static-with-win-per-component-container04">
              <div className="champion-static-with-win-per-component-container05"></div>
              <div className="champion-static-with-win-per-component-container06">
                <img
                  alt={opChampionName}
                  src={opChampion.championImageUrl}
                  className="champion-static-with-win-per-component-profile-icon5212jpg"
                />
                <span className="champion-static-with-win-per-component-text">
                  <span className="">{opChampionName}</span>
                </span>
                <div className="champion-static-with-win-per-component-container07">
                  <span className="champion-static-with-win-per-component-text3">
                    {opChampion.totalMatch}판
                  </span>
                  <span className="champion-static-with-win-per-component-text2">
                    승률 {opChampion.winRate}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
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
