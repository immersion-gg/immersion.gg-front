import PropTypes from 'prop-types'

import '../styles/each-champion-static.css'
import { useOpChampionContext } from '../views/champion-statistic-component';

const EachOpChampionStatic = (props) => {
  const {setOpChampion, setOpChampionName} = useOpChampionContext();

  const changeOpChampion = (champion, championName) => {
    setOpChampion(champion);
    setOpChampionName(championName);
  }

  return (
    <div className={`each-champion-static-container ${props.rootClassName} `}>
      <div className="each-champion-static-label">
        <div className="each-champion-static-divk7f3uw7">
          <div className="each-champion-static-spanbuiiz70">
            <span className="each-champion-static-text">
              <button onClick={()=>changeOpChampion(props.champion, props.championName)}>{props.championName}</button>
            </span>
          </div>
          <div className="each-champion-static-spanbuiiz701">
            <span className="each-champion-static-text02">
              <span className="">{props.champion.totalMatch}판</span>
            </span>
          </div>
        </div>
        <div className="each-champion-static-divk7f3uw11">
          <div className="each-champion-static-spank7f3uw12">
            <span className="each-champion-static-text04">
              <span className="">{props.champion.winRate}%</span>
            </span>
          </div>
        </div>
        <div className="each-champion-static-divk7f3uw1">
          <div className="each-champion-static-divsc1xwhuw10">
            <img
              alt={props.championName}
              src={props.champion.championImageUrl}
              className="each-champion-static-varuspng"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

EachOpChampionStatic.defaultProps = {
  text1: '4 경기',
  text3: '1.18',
  Varuspng_alt: 'Varuspng4230',
  Varuspng_src: '/external/varuspng4230-5m6-200h.png',
  SVG_src: '/external/svg4230-1m85.svg',
  text2: '0%',
  rootClassName: '',
  text4: '1.82',
  text: '바루스',
  SVG_alt: 'SVG4230',
}

EachOpChampionStatic.propTypes = {
  champion: PropTypes.shape({
    championName: PropTypes.string,
    totalMatch: PropTypes.number,
    winRate: PropTypes.number,
    kda: PropTypes.number,
    championImageUrl: PropTypes.string,
  }),
  championName: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  Varuspng_alt: PropTypes.string,
  Varuspng_src: PropTypes.string,
  SVG_src: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  SVG_alt: PropTypes.string,
}

export default EachOpChampionStatic
