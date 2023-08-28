import React from 'react'

import PropTypes from 'prop-types'

import '../../styles/ingame-participant-item-component.css'
import IconSlotComponent from "../match-list/icon-slot-component";

const IngameParticipantItemComponent = (props) => {
  const { participant } = props;
  const { championStatistic, summoner } = participant;
  const summonerRank = summoner.tiers.filter(it=>it.queueType==="RANKED_SOLO_5x5");
  const getSummonerTier = () => {
    const {tier, rank, leaguePoints} = summonerRank[0];

    if(!tier) return 'Unranked';

    return `${tier} ${rank}(${leaguePoints})`
  }

  console.log(props);

  return (
    <div className="ingame-participant-item-component-row">
      <div className="ingame-participant-item-component-data">
        <div className="ingame-participant-item-component-link">
          <img
            src={props.participant.championImageUrl}
            className="ingame-participant-item-component-oriannapng"
          />
        </div>
      </div>
      <IconSlotComponent
          iconUrls={[participant.spell1ImageUrl, participant.spell2ImageUrl]}
          imageSize={"18px"}
          showsVertical
      />
      <IconSlotComponent
          iconUrls={[participant.perkImageUrl1, participant.perkImageUrl1]}
          i mageSize={"18px"}
          showsVertical
      />
      <div className="ingame-participant-item-component-data3">
        <div className="ingame-participant-item-component-link1">
          <span className="ingame-participant-item-component-text">{participant.summonerName}</span>
        </div>
        <div className="ingame-participant-item-component-divsummonerlevel">
          <span className="ingame-participant-item-component-text02">{`레벨 ${participant.summoner.summonerLevel}`}</span>
        </div>
      </div>
      <div className="ingame-participant-item-component-data4">
        <img
          src={getTierImageUrl(summonerRank[0].tier)}
          className="ingame-participant-item-component-silverpng"
        />
      </div>
      <div className="ingame-participant-item-component-data5">
        <div className="ingame-participant-item-component-div">
          <span className="ingame-participant-item-component-text04">{getSummonerTier()}</span>
        </div>
      </div>
      <div className="ingame-participant-item-component-data6">
        <div className="ingame-participant-item-component-strong">
          <span className="ingame-participant-item-component-text06"></span>
        </div>
        <span className="ingame-participant-item-component-text08">{`(${championStatistic.totalMatches} Played)`}</span>
        <div className="ingame-participant-item-component-divcss1tij1h9">
          <progress max={100} value={20}/>
        </div>
      </div>
      <div className="ingame-participant-item-component-data7">
        <div className="ingame-participant-item-component-divwinratio">
          <span className="ingame-participant-item-component-text10">0%</span>
        </div>
        <div className="ingame-participant-item-component-div1">
          <span className="ingame-participant-item-component-text12">(1 Played)</span>
        </div>
      </div>
      <div className="ingame-participant-item-component-data8">
        <div className="ingame-participant-item-component-divcss1cm7jv5">
          <span className="ingame-participant-item-component-text14">3.33 KDA</span>
        </div>
        <span className="ingame-participant-item-component-text17">6 / 9 / 24</span>
      </div>
    </div>
  )
}

const getTierImageUrl = (tier) => {
  if(!tier || tier === 'Unranked') return null;

  return `/external/tier/${tier.toLowerCase()}.png`;
}


IngameParticipantItemComponent.propTypes = {
  participant: PropTypes.instanceOf
}

export default IngameParticipantItemComponent
