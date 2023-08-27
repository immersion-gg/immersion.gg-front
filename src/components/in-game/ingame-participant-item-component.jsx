import React from 'react'

import PropTypes from 'prop-types'

import '../../styles/ingame-participant-item-component.css'
import IconSlotComponent from "../match-list/icon-slot-component";

const IngameParticipantItemComponent = (props) => {
  const { participant } = props;
  const { championStatistic, summoner } = participant;
  const getSummonerTier = () => {
    const summonerRank = summoner.rank[0];
    return `${summonerRank.tier} ${summonerRank.rank}(${summonerRank.leaguePoints})`
  }

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
          alt={props.silverpng_alt}
          src={props.silverpng_src}
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
          <span className="ingame-participant-item-component-text06">{`${championStatistic.winRate}%`}</span>
        </div>
        <span className="ingame-participant-item-component-text08">{`(${championStatistic.totalMatches} Played)`}</span>
        <div className="ingame-participant-item-component-divcss1tij1h9">
          <img
            alt={props.divwin_alt1}
            src={props.divwin_src1}
            className="ingame-participant-item-component-divwin"
          />
        </div>
      </div>
      <div className="ingame-participant-item-component-data7">
        <div className="ingame-participant-item-component-divwinratio">
          <span className="ingame-participant-item-component-text10">
            <span className="">0%</span>
          </span>
        </div>
        <div className="ingame-participant-item-component-div1">
          <span className="ingame-participant-item-component-text12">
            <span className="">(1 Played)</span>
          </span>
        </div>
      </div>
      <div className="ingame-participant-item-component-data8">
        <div className="ingame-participant-item-component-divcss1cm7jv5">
          <span className="ingame-participant-item-component-text14">
            <span className="ingame-participant-item-component-text15">
              3.33
            </span>
            <span className=""> KDA</span>
          </span>
        </div>
        <span className="ingame-participant-item-component-text17">
          <span className="">6 / 9 / 24</span>
        </span>
      </div>
    </div>
  )
}

IngameParticipantItemComponent.defaultProps = {
  SummonerFlashpng_src2: '/external/summonerflashpng5360-a8tu1a-200h.png',
  SummonerFlashpng_alt2: 'SummonerFlashpng5360',
  SummonerTeleportpng_src1: '/external/summonerteleportpng5360-056e-200h.png',
  SummonerTeleportpng_alt1: 'SummonerTeleportpng5360',
  IMAGE8214png_src: '/external/image8214png5361-m0l-200h.png',
  IMAGE8214png_alt: 'IMAGE8214png5361',
  IMAGE8300png_src: '/external/image8300png5361-eunp-200h.png',
  IMAGE8300png_alt: 'IMAGE8300png5361',
  silverpng_src: '/external/silverpng5361-x9rk-200h.png',
  silverpng_alt: 'silverpng5361',
  silverpng_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/9494119e-f7f8-4845-b866-6bc13e08aa4f?org_if_sml=1581',
  silverpng_alt1: 'silverpng5363',
  Oriannapng_src: '/external/oriannapng5360-a4w-200h.png',
  Oriannapng_alt: 'Oriannapng5360',
  divwin_src1: '/external/divwin5362-y9s-200h.png',
  divwin_alt1: 'divwin5362',
  iconarrowdownsvg_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/8a3fc119-7175-4797-8cb4-e814d580cab5?org_if_sml=1244',
  iconarrowdownsvg_alt2: 'iconarrowdownsvg5364',
  rootClassName: '',
}

IngameParticipantItemComponent.propTypes = {
  participant: PropTypes.instanceOf,
  SummonerFlashpng_src2: PropTypes.string,
  SummonerFlashpng_alt2: PropTypes.string,
  SummonerTeleportpng_src1: PropTypes.string,
  SummonerTeleportpng_alt1: PropTypes.string,
  IMAGE8214png_src: PropTypes.string,
  IMAGE8214png_alt: PropTypes.string,
  IMAGE8300png_src: PropTypes.string,
  IMAGE8300png_alt: PropTypes.string,
  silverpng_src: PropTypes.string,
  silverpng_alt: PropTypes.string,
  silverpng_src1: PropTypes.string,
  silverpng_alt1: PropTypes.string,
  Oriannapng_src: PropTypes.string,
  Oriannapng_alt: PropTypes.string,
  divwin_src1: PropTypes.string,
  divwin_alt1: PropTypes.string,
  iconarrowdownsvg_src2: PropTypes.string,
  iconarrowdownsvg_alt2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default IngameParticipantItemComponent
