import React from 'react'

import PropTypes from 'prop-types'

import IngameParticipantItemComponent from './ingame-participant-item-component'
import '../../styles/ingame-participant-component.css'

const IngameParticipantComponent = (props) => {
  console.log(props.team);
  const { teamCode, participants } = props.team;
  const getTeamColorName = (teamCode) => teamCode === 'BLUE' ? '블루' : '레드';
  const teamRatingAverage = () => participants
      .map(it=>it.summoner.userRatingAverage)
      .reduce((a, b) => a + b) / participants.length;

  return (
    <div className="ingame-participant-component-table">
      <div className="ingame-participant-component-header-row">
        <div className="ingame-participant-component-cell">
          <span className="ingame-participant-component-text">{ `${getTeamColorName(teamCode)}팀`}</span>
        </div>
        <div className="ingame-participant-component-cell1">
          <span className="ingame-participant-component-text02">Tier Average: </span>
          <span className="ingame-participant-component-text03">Gold3</span>
        </div>
        <div className="ingame-participant-component-cell2">
          <span className="ingame-participant-component-text04">유저 평가 평균:</span>
          <span className="ingame-participant-component-text05">{`${teamRatingAverage() || 0} / 5`}</span>
        </div>
        <div className="ingame-participant-component-cell3">
          <span className="ingame-participant-component-text06">S2023</span>
        </div>
        <div className="ingame-participant-component-cell4">
          <span className="ingame-participant-component-text08">Ranked Winratio</span>
        </div>
        <div className="ingame-participant-component-cell5">
          <span className="ingame-participant-component-text10">S2023 Champion Information</span>
        </div>
      </div>
      <div className="ingame-participant-component-body">
        {
          participants.map(participant=>
              <IngameParticipantItemComponent
                  key={participant.summonerId}
                  participant={participant}
              />)
        }
      </div>
    </div>
  )
}

IngameParticipantComponent.defaultProps = {
  Data_src: '',
  Data_alt: 'Data5353',
  Data_src1: '',
  Data_alt1: 'Data5370',
  SummonerTeleportpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/ddd02de4-5226-4645-b609-888f158c14c8?org_if_sml=1939',
  SummonerTeleportpng_alt: 'SummonerTeleportpng5352',
  SummonerFlashpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/7b9ca8e2-989c-4ce4-ab12-cf570cbb5371?org_if_sml=11002',
  SummonerFlashpng_alt: 'SummonerFlashpng5352',
  IMAGE8010png_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/e6b3c4dc-2f3b-4e0d-b014-c7b5a41cd563?org_if_sml=1719',
  IMAGE8010png_alt: 'IMAGE8010png5352',
  IMAGE8400png_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/726903d8-4236-4038-85b1-f677a577c177?org_if_sml=1806',
  IMAGE8400png_alt: 'IMAGE8400png5353',
  text: '-',
  text1: '-',
  text2: '-',
  goldpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/87beac8a-492c-4679-b373-02794472a4e0?org_if_sml=1642',
  goldpng_alt: 'goldpng5354',
  SummonerSmitepng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/4e8b0f0b-f362-4dd7-a248-4f88afa4c077?org_if_sml=1968',
  SummonerSmitepng_alt: 'SummonerSmitepng5356',
  SummonerFlashpng_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/0ac324b0-fd72-4fce-b7af-500ab5052423?org_if_sml=11001',
  SummonerFlashpng_alt1: 'SummonerFlashpng5356',
  IMAGE8128png_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/5a76120c-f106-40c3-91ff-e9e1ec597983?org_if_sml=1783',
  IMAGE8128png_alt: 'IMAGE8128png5356',
  IMAGE8200png_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/502acb13-b2b8-4ee7-ae04-f18481c1b211?org_if_sml=1687',
  IMAGE8200png_alt: 'IMAGE8200png5356',
  goldpng_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/f2970b11-6c8e-4348-81b2-f8060e504bf6?org_if_sml=1627',
  goldpng_alt1: 'goldpng5357',
  goldpng_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/63a91cbb-c16b-4019-9a62-4bfc9f076cf1?org_if_sml=1627',
  goldpng_alt2: 'goldpng5359',
  SummonerHealpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/1ca3f84d-f559-4390-9973-36c269fa856d?org_if_sml=1991',
  SummonerHealpng_alt: 'SummonerHealpng5365',
  SummonerFlashpng_src3:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/eeb3cc51-5ad3-4650-9d34-fcec98cd175f?org_if_sml=1993',
  SummonerFlashpng_alt3: 'SummonerFlashpng5365',
  IMAGE9923png_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/5f887cdf-9d5f-48bf-8bad-79ddc736d8fa?org_if_sml=1688',
  IMAGE9923png_alt: 'IMAGE9923png5365',
  IMAGE8300png_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/4017f64f-a34b-46ca-bd99-04b1b6d9280b?org_if_sml=1986',
  IMAGE8300png_alt1: 'IMAGE8300png5365',
  platinumpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/4a9c96a4-229a-4d03-9e73-17a4c65efd62?org_if_sml=1651',
  platinumpng_alt: 'platinumpng5366',
  goldpng_src3:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/c86ca027-6512-4aa6-850a-4eee5804175b?org_if_sml=1664',
  goldpng_alt3: 'goldpng5368',
  SummonerFlashpng_src4:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/c79fe278-f083-45aa-ab77-c381dd421d56?org_if_sml=1962',
  SummonerFlashpng_alt4: 'SummonerFlashpng5369',
  SummonerDotpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/66d48c6e-d2cd-4dd9-8ca6-33e9c335d833?org_if_sml=1890',
  SummonerDotpng_alt: 'SummonerDotpng5370',
  IMAGE8439png_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/01cc6c47-ae7e-421f-8cd8-58aaa87c965f?org_if_sml=1729',
  IMAGE8439png_alt: 'IMAGE8439png5370',
  IMAGE8300png_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/f9b5a068-f622-4bb0-96cc-cb8d8bc0218b?org_if_sml=1988',
  IMAGE8300png_alt2: 'IMAGE8300png5370',
  text3: '-',
  goldpng_src4:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/a11587b2-3ce7-4e71-8c92-ad23ef8786db?org_if_sml=1657',
  goldpng_alt4: 'goldpng5372',
  Aatroxpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/3fdb38ba-8897-4e29-90c6-1d5d1dd8218b?org_if_sml=12957',
  Aatroxpng_alt: 'Aatroxpng5352',
  iconarrowdownsvg_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/b0425005-7009-4866-9682-bf6e849b145d?org_if_sml=1244',
  iconarrowdownsvg_alt: 'iconarrowdownsvg5355',
  Brandpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/4a5774ef-dfbf-4543-a25a-4a6c30282868?org_if_sml=13339',
  Brandpng_alt: 'Brandpng5355',
  divwin_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/f055de17-138b-4079-9851-203670eac9b9?org_if_sml=1154',
  divwin_alt: 'divwin5358',
  iconarrowdownsvg_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/ed6673e8-ef7b-4726-aeb2-79f5c5b54db3?org_if_sml=1244',
  iconarrowdownsvg_alt1: 'iconarrowdownsvg5359',
  Kaisapng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/54c44f24-99b9-4a80-a4ac-b72798b1d695?org_if_sml=13104',
  Kaisapng_alt: 'Kaisapng5365',
  divwin_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/05b856df-270a-42ab-95c1-c26f50f824ef?org_if_sml=1174',
  divwin_alt2: 'divwin5367',
  iconarrowdownsvg_src3:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/139f75a4-e443-44c2-8b9b-66c542bb9179?org_if_sml=1244',
  iconarrowdownsvg_alt3: 'iconarrowdownsvg5368',
  Leonapng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/b0ab4e5c-60ac-492d-9f59-b782cca1fe22?org_if_sml=13280',
  Leonapng_alt: 'Leonapng5369',
  iconarrowdownsvg_src4:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/433a1eb1-a9ff-47ed-a27d-6e327c30a92d?org_if_sml=1244',
  iconarrowdownsvg_alt4: 'iconarrowdownsvg5372',
  rootClassName: '',
}

IngameParticipantComponent.propTypes = {
  team: PropTypes.arrayOf,
  teamCode: PropTypes.string,
  Data_src: PropTypes.string,
  Data_alt: PropTypes.string,
  Data_src1: PropTypes.string,
  Data_alt1: PropTypes.string,
  SummonerTeleportpng_src: PropTypes.string,
  SummonerTeleportpng_alt: PropTypes.string,
  SummonerFlashpng_src: PropTypes.string,
  SummonerFlashpng_alt: PropTypes.string,
  IMAGE8010png_src: PropTypes.string,
  IMAGE8010png_alt: PropTypes.string,
  IMAGE8400png_src: PropTypes.string,
  IMAGE8400png_alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  goldpng_src: PropTypes.string,
  goldpng_alt: PropTypes.string,
  SummonerSmitepng_src: PropTypes.string,
  SummonerSmitepng_alt: PropTypes.string,
  SummonerFlashpng_src1: PropTypes.string,
  SummonerFlashpng_alt1: PropTypes.string,
  IMAGE8128png_src: PropTypes.string,
  IMAGE8128png_alt: PropTypes.string,
  IMAGE8200png_src: PropTypes.string,
  IMAGE8200png_alt: PropTypes.string,
  goldpng_src1: PropTypes.string,
  goldpng_alt1: PropTypes.string,
  goldpng_src2: PropTypes.string,
  goldpng_alt2: PropTypes.string,
  SummonerHealpng_src: PropTypes.string,
  SummonerHealpng_alt: PropTypes.string,
  SummonerFlashpng_src3: PropTypes.string,
  SummonerFlashpng_alt3: PropTypes.string,
  IMAGE9923png_src: PropTypes.string,
  IMAGE9923png_alt: PropTypes.string,
  IMAGE8300png_src1: PropTypes.string,
  IMAGE8300png_alt1: PropTypes.string,
  platinumpng_src: PropTypes.string,
  platinumpng_alt: PropTypes.string,
  goldpng_src3: PropTypes.string,
  goldpng_alt3: PropTypes.string,
  SummonerFlashpng_src4: PropTypes.string,
  SummonerFlashpng_alt4: PropTypes.string,
  SummonerDotpng_src: PropTypes.string,
  SummonerDotpng_alt: PropTypes.string,
  IMAGE8439png_src: PropTypes.string,
  IMAGE8439png_alt: PropTypes.string,
  IMAGE8300png_src2: PropTypes.string,
  IMAGE8300png_alt2: PropTypes.string,
  text3: PropTypes.string,
  goldpng_src4: PropTypes.string,
  goldpng_alt4: PropTypes.string,
  Aatroxpng_src: PropTypes.string,
  Aatroxpng_alt: PropTypes.string,
  iconarrowdownsvg_src: PropTypes.string,
  iconarrowdownsvg_alt: PropTypes.string,
  Brandpng_src: PropTypes.string,
  Brandpng_alt: PropTypes.string,
  divwin_src: PropTypes.string,
  divwin_alt: PropTypes.string,
  iconarrowdownsvg_src1: PropTypes.string,
  iconarrowdownsvg_alt1: PropTypes.string,
  Kaisapng_src: PropTypes.string,
  Kaisapng_alt: PropTypes.string,
  divwin_src2: PropTypes.string,
  divwin_alt2: PropTypes.string,
  iconarrowdownsvg_src3: PropTypes.string,
  iconarrowdownsvg_alt3: PropTypes.string,
  Leonapng_src: PropTypes.string,
  Leonapng_alt: PropTypes.string,
  iconarrowdownsvg_src4: PropTypes.string,
  iconarrowdownsvg_alt4: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default IngameParticipantComponent
