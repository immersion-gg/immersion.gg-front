import PropTypes from 'prop-types'

import '../styles/most-champion-list-item-component.css'
import {useHistory} from "react-router-dom";

const MostChampionListItemComponent = ({champion, puuid}) => {
    const history = useHistory();
    const GoChampionPage = (champion, puuid) => {
      history.push({
        pathname: `/champion-statistic-component/${champion.championName}`,
        state: {champion, puuid}
      });
    }

  return (
      <div className={`most-champion-list-item-component-divchampionbox`}>
        <img
            alt={champion.championName}
            src={champion.championImageUrl}
            className="most-champion-list-item-component-link-kaisapng"
        />
        <div className="most-champion-list-item-component-divname">
        <span className="most-champion-list-item-component-text">
          <button onClick={()=>GoChampionPage(champion, puuid)}>{champion.championName}</button>
        </span>
        </div>
        <span className="most-champion-list-item-component-text02">
        <span className="">CS 186.5 (6.8)</span> { /* TODO 없음 */}
      </span>
        <span className="most-champion-list-item-component-text04">
        <span className="">{`${champion.killAvg}/${champion.deathAvg}/${champion.assistAvg}`}</span>
      </span>
        <span className="most-champion-list-item-component-text06">
        <span className="">{`${champion.kda} KDA`}</span>
      </span>
        <div className="most-champion-list-item-component-divcount">
        <span className="most-champion-list-item-component-text08">
          <span className="">{`${champion.totalMatch} Played`}</span>
        </span>
        </div>
        <div className="most-champion-list-item-component-divcss1nuoroq">
        <span className="most-champion-list-item-component-text10">
          <span className="">{`${champion.winRate}%`}</span>
        </span>
        </div>
      </div>
  )
}

MostChampionListItemComponent.propTypes = {
  champion: PropTypes.shape({
      championName: PropTypes.string,
      championImageUrl: PropTypes.string,
      killAvg: PropTypes.number,
      deathAvg: PropTypes.number,
      assistAvg: PropTypes.number,
      kda: PropTypes.number,
      totalMatch: PropTypes.number,
      winRate: PropTypes.number
  }),
  puuid: PropTypes.string
}

export default MostChampionListItemComponent
