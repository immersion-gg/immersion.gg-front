import PropTypes from 'prop-types'

import MostChampionListItemComponent from './most-champion-list-item-component'
import '../styles/most-champion-list-component.css'
import {useState} from "react";

const queueTypes = ['전체', '솔로랭크', '자유랭크'];

const MostChampionListComponent = ({mostChampions, puuid}) => {
    const [selectedQueueType, setQueueType] = useState(queueTypes[0]);

    return (
        <div className="most-champion-list-component-most-champion-component">
            <div className="most-champion-list-component-list">
                {
                    queueTypes.map(it =>
                        <div key={it}
                             className={selectedQueueType === it ? 'most-champion-nav-item-selected' : 'most-champion-nav-item'}>
                            <button
                                className={selectedQueueType === it ? 'most-champion-nav-text-selected' : 'most-champion-nav-text'}
                                value={it}
                                onClick={e => setQueueType(e.target.innerText)}>
                                <span>{it}</span>
                            </button>
                        </div>)
                }
            </div>
            <div className="most-champion-list-component-div">
                {
                    mostChampions.map(it => <MostChampionListItemComponent key={it.championName} champion={it} puuid={puuid}/>)
                }
            </div>
        </div>
    )
}

MostChampionListComponent.defaultProps = {
    mostChampions: [],
    puuid: null
}

MostChampionListComponent.propTypes = {
    mostChampions: PropTypes.arrayOf,
    puuid: PropTypes.string
}

export default MostChampionListComponent
