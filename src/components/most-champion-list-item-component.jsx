import React from 'react'

import PropTypes from 'prop-types'

import '../styles/most-champion-list-item-component.css'

const MostChampionListItemComponent = ({champion}) => {
    return (
        <div className={`most-champion-list-item-component-divchampionbox`}>
            <img
                alt={champion.championName}
                src={champion.championImageUrl}
                className="most-champion-list-item-component-link-kaisapng"
            />
            <div className="most-champion-list-item-component-divname">
        <span className="most-champion-list-item-component-text">
          <span className="">{champion.championName}</span>
        </span>
            </div>
            <span className="most-champion-list-item-component-text02">
        <span className="">CS 186.5 (6.8)</span>
      </span>
            <span className="most-champion-list-item-component-text04">
        <span className="">{`${champion.killAvg}/${champion.deathAvg}/${champion.assistAvg}`}</span>
      </span>
            <span className="most-champion-list-item-component-text06">
        <span className="">{`${champion.kda} KDA`}</span>
      </span>
            <div className="most-champion-list-item-component-divcount">
        <span className="most-champion-list-item-component-text08">
          <span className="">{`${champion.winMatchCount} Played`}</span>
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
    champion: PropTypes.instanceOf
}

export default MostChampionListItemComponent
