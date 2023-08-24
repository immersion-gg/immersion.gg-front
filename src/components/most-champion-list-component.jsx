import React, { useState} from 'react'

import MostChampionListItemComponent from './most-champion-list-item-component'
import '../styles/most-champion-list-component.css'
import PropTypes from "prop-types";

const MostChampionListComponent = ({mostChampions}) => {
    const queueTypes = ['전체', '솔로랭크', '자유랭크'];
    const [selectedQueueType, setQueueType] = useState(queueTypes[0]);

    return (
        <div className="most-champion-list-component-most-champion-component">
            <div className="most-champion-list-component-list">
                {
                    queueTypes.map(it =>
                        <div key={it}
                             className={selectedQueueType === it ? 'most-champion-item-selected' : 'most-champion-item'}>
                            <button
                                className={selectedQueueType === it ? 'most-champion-text-selected' : 'most-champion-text'}
                                value={it}
                                onClick={e => setQueueType(e.target.innerText)}>
                                <span>{it}</span>
                            </button>
                        </div>)
                }
            </div>
            <div className="most-champion-list-component-div">
                {
                    mostChampions.map(it => <MostChampionListItemComponent key={it.championName} champion={it}/>)
                }
                <div className="most-champion-list-component-link">
          <span className="most-champion-list-component-text6">
            <span>더 보기+다른 시즌 보기</span>
          </span>
                    <img
                        className="most-champion-list-component-iconarrowrightsvg"
                        src="/external/iconarrowrightsvg1812-4nng.svg"
                    />
                </div>
            </div>
        </div>
    )
}

MostChampionListComponent.propTypes = {
    mostChampions: PropTypes.arrayOf
}

export default MostChampionListComponent
