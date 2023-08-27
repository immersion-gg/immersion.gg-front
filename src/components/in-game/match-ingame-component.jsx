import React from 'react'

import PropTypes from 'prop-types'

import IngameParticipantComponent from './ingame-participant-component'
import '../../styles/match-ingame-component.css'

const MatchIngameComponent = (props) => {
  const { gameLength, queueType, teams } = props.ingame;
  const blueTeam = teams.find(team=>team.teamCode === 'BLUE');
  const redTeam = teams.find(team=>team.teamCode === 'RED');

  return (
    <div className="match-ingame-component-divcontentcontainermargin">
      <div className="match-ingame-component-divcss1m2ho5a">
        <MatchInGameBaseComponent
            gameDuration={gameLength}
            queueTypeName={queueType.name}
        />
        <IngameParticipantComponent team={blueTeam}/>
        <IngameParticipantComponent team={redTeam}/>
      </div>
    </div>
  )
}

const MatchInGameBaseComponent = ({ gameDuration, queueTypeName }) => {
  return (
      <div className="match-ingame-component-game-info-wrapper">
        <div className="match-ingame-component-game-info">
            <span className="match-ingame-component-text">{queueTypeName}</span>
          <div className="match-ingame-component-spanmap">
              <span className="match-ingame-component-text2">{queueTypeName}</span>
          </div>
          <span className="match-ingame-component-text4">{gameDuration}</span>
        </div>
      </div>
  )
}

MatchInGameBaseComponent.propTypes = {
  gameDuration: PropTypes.string,
  queueTypeName: PropTypes.string
}

MatchIngameComponent.defaultProps = {
  pseudo_src: '/external/pseudo5348-if78-200w.png',
  pseudo_alt: 'pseudo5348',
  iconrecordwhitesvg_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/201885b6-8b55-4df7-8649-0c9cc6dab8c9?org_if_sml=1415',
  iconrecordwhitesvg_alt: 'iconrecordwhitesvg5349',
  SummonerFlashpng_src5:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/b38b2b3d-a42c-4ae1-8e72-e77bae3b02ee?org_if_sml=1999',
  SummonerFlashpng_alt5: 'SummonerFlashpng5375',
  SummonerDotpng_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/d056430a-edb0-461e-8ba3-89ccf8fc7365?org_if_sml=1918',
  SummonerDotpng_alt1: 'SummonerDotpng5375',
  IMAGE8021png_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/fe314f2a-5ae4-4b03-aade-a4922e39283c?org_if_sml=1711',
  IMAGE8021png_alt: 'IMAGE8021png5376',
  IMAGE8200png_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/dfb0d21d-0135-4b92-a57e-d360b891f9fc?org_if_sml=1691',
  IMAGE8200png_alt1: 'IMAGE8200png5376',
  goldpng_src5:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/018c5494-e736-4ad5-be1b-81a0899a6643?org_if_sml=1666',
  goldpng_alt5: 'goldpng5376',
  goldpng_src6:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/8ccd8742-9873-4a9a-8dd9-55915ec328ba?org_if_sml=1666',
  goldpng_alt6: 'goldpng5378',
  SummonerSmitepng_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/02f4e8d0-241b-4ebb-8a86-58a20c88d209?org_if_sml=1969',
  SummonerSmitepng_alt1: 'SummonerSmitepng5380',
  SummonerFlashpng_src6:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/0229b74e-ed0f-43d6-b2a4-46145e07e63a?org_if_sml=11005',
  SummonerFlashpng_alt6: 'SummonerFlashpng5380',
  IMAGE8128png_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/99b20b05-52ed-4a60-bd40-4fd1f5db530c?org_if_sml=1776',
  IMAGE8128png_alt1: 'IMAGE8128png5380',
  IMAGE8300png_src3:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/67be0ab9-19bf-4f67-8df6-478be2e668e0?org_if_sml=1982',
  IMAGE8300png_alt3: 'IMAGE8300png5380',
  platinumpng_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/6359c46e-534c-4493-892d-9c2298624e6b?org_if_sml=1647',
  platinumpng_alt1: 'platinumpng5381',
  goldpng_src7:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/25b0687d-d28c-4da9-b4c0-348b0b171689?org_if_sml=1642',
  goldpng_alt7: 'goldpng5383',
  SummonerTeleportpng_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/513d1753-e3d1-49b0-8212-54fb21ad4dec?org_if_sml=1954',
  SummonerTeleportpng_alt2: 'SummonerTeleportpng5384',
  SummonerFlashpng_src7:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/f13e3b68-a8c3-4987-86b3-b878c7d6f0c0?org_if_sml=1998',
  SummonerFlashpng_alt7: 'SummonerFlashpng5385',
  IMAGE8229png_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/42db1a0b-c2bf-4c6e-bcaa-9612c6655f05?org_if_sml=1844',
  IMAGE8229png_alt: 'IMAGE8229png5385',
  IMAGE8100png_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/4bbfab3c-7870-4d83-ab7b-77b6359aa2bd?org_if_sml=1749',
  IMAGE8100png_alt: 'IMAGE8100png5385',
  goldpng_src8:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/39b870d0-72cc-4102-9081-21386fe8850f?org_if_sml=1648',
  goldpng_alt8: 'goldpng5386',
  text4: '-',
  text5: '-',
  goldpng_src9:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/a2a19f8c-a77e-4c45-a6e2-c06ad9b6cb8c?org_if_sml=1648',
  goldpng_alt9: 'goldpng5387',
  SummonerBoostpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/744708f9-a3e8-415b-808a-5866b4e7d8ab?org_if_sml=1971',
  SummonerBoostpng_alt: 'SummonerBoostpng5389',
  SummonerFlashpng_src8:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/b547fdf0-46a1-4147-abb5-b5f7f8427729?org_if_sml=1959',
  SummonerFlashpng_alt8: 'SummonerFlashpng5389',
  IMAGE8010png_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/bb93b6a0-e377-4ee4-aa49-c8d7a75d59a8?org_if_sml=1735',
  IMAGE8010png_alt1: 'IMAGE8010png5389',
  IMAGE8100png_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/b50b7043-9be8-4d1b-a943-71f96e2a4d1f?org_if_sml=1740',
  IMAGE8100png_alt1: 'IMAGE8100png5389',
  goldpng_src10:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/eea94f9a-a69b-4ff3-953a-dc0a9755aca3?org_if_sml=1658',
  goldpng_alt10: 'goldpng5390',
  goldpng_src11:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/1d8498cb-d4f2-4fcb-b645-8357ea9e32cd?org_if_sml=1658',
  goldpng_alt11: 'goldpng5392',
  SummonerFlashpng_src9:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/e0c0c812-1748-46c2-a98d-f42ef5493069?org_if_sml=11009',
  SummonerFlashpng_alt9: 'SummonerFlashpng5393',
  SummonerDotpng_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/970fb392-6b6d-48ef-b771-f4b83274c316?org_if_sml=1922',
  SummonerDotpng_alt2: 'SummonerDotpng5393',
  IMAGE8439png_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/40c8d5d3-89a5-471a-8be3-f6e93d3db32c?org_if_sml=1733',
  IMAGE8439png_alt1: 'IMAGE8439png5393',
  IMAGE8000png_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/a7da9fd8-ca56-4a38-bc4c-1b6637f90973?org_if_sml=1784',
  IMAGE8000png_alt: 'IMAGE8000png5394',
  goldpng_src12:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/8623ece7-9c08-4582-8898-45c02b4b7a5d?org_if_sml=1659',
  goldpng_alt12: 'goldpng5394',
  bronzepng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/6c8bcdae-58fe-417c-af2b-4ebe8825ed5e?org_if_sml=1614',
  bronzepng_alt: 'bronzepng5396',
  Quinnpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/828ab7d8-54d2-44a6-af61-9dd31d5f83f4?org_if_sml=13330',
  Quinnpng_alt: 'Quinnpng5375',
  divwin_src3:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/4531bb8d-88aa-4a24-8502-3d62b50de6a7?org_if_sml=1177',
  divwin_alt3: 'divwin5377',
  iconarrowdownsvg_src5:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/fb1db312-0fcd-4653-b409-1087decaf9fa?org_if_sml=1244',
  iconarrowdownsvg_alt5: 'iconarrowdownsvg5379',
  Rumblepng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/ad971d35-df36-4237-ba7d-e7c8d00df496?org_if_sml=13322',
  Rumblepng_alt: 'Rumblepng5380',
  divwin_src4:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/86f750ae-2033-4e4b-9727-0e82eceb717d?org_if_sml=1172',
  divwin_alt4: 'divwin5382',
  iconarrowdownsvg_src6:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/40873c0b-9e40-4e10-8923-f819a90caac6?org_if_sml=1239',
  iconarrowdownsvg_alt6: 'iconarrowdownsvg5383',
  Malphitepng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/539d686a-38cb-4300-94b8-75f8aaa99c08?org_if_sml=12909',
  Malphitepng_alt: 'Malphitepng5384',
  divwin_src5:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/a391d05d-8b18-4e0e-af09-81debe90163a?org_if_sml=1173',
  divwin_alt5: 'divwin5386',
  iconarrowdownsvg_src7:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/0e57d5ac-1429-437d-8065-f08e0f4bc86c?org_if_sml=1244',
  iconarrowdownsvg_alt7: 'iconarrowdownsvg5387',
  Samirapng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/7cdf2ebf-b727-4385-b0e9-7c21915f6f0f?org_if_sml=12953',
  Samirapng_alt: 'Samirapng5388',
  divwin_src6:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/d77234e0-e801-494f-bba6-afc12110a7a1?org_if_sml=1173',
  divwin_alt6: 'divwin5391',
  iconarrowdownsvg_src8:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/76e3be5f-e0a8-42bf-acc7-19ac9affc9b3?org_if_sml=1243',
  iconarrowdownsvg_alt8: 'iconarrowdownsvg5392',
  Rellpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/1138597f-1d94-4b80-a3df-02ffc61c3cba?org_if_sml=13297',
  Rellpng_alt: 'Rellpng5393',
  divwin_src7:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/1924677b-a29c-4231-8a59-4ae82573b46f?org_if_sml=1176',
  divwin_alt7: 'divwin5395',
  iconarrowdownsvg_src9:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/ea4f5c15-cd8b-498f-bba0-63eb0900c8a1?org_if_sml=1244',
  iconarrowdownsvg_alt9: 'iconarrowdownsvg5397',
}

MatchIngameComponent.propTypes = {
  ingame: PropTypes.instanceOf,
  pseudo_src: PropTypes.string,
  pseudo_alt: PropTypes.string,
  iconrecordwhitesvg_src: PropTypes.string,
  iconrecordwhitesvg_alt: PropTypes.string,
  SummonerFlashpng_src5: PropTypes.string,
  SummonerFlashpng_alt5: PropTypes.string,
  SummonerDotpng_src1: PropTypes.string,
  SummonerDotpng_alt1: PropTypes.string,
  IMAGE8021png_src: PropTypes.string,
  IMAGE8021png_alt: PropTypes.string,
  IMAGE8200png_src1: PropTypes.string,
  IMAGE8200png_alt1: PropTypes.string,
  goldpng_src5: PropTypes.string,
  goldpng_alt5: PropTypes.string,
  goldpng_src6: PropTypes.string,
  goldpng_alt6: PropTypes.string,
  SummonerSmitepng_src1: PropTypes.string,
  SummonerSmitepng_alt1: PropTypes.string,
  SummonerFlashpng_src6: PropTypes.string,
  SummonerFlashpng_alt6: PropTypes.string,
  IMAGE8128png_src1: PropTypes.string,
  IMAGE8128png_alt1: PropTypes.string,
  IMAGE8300png_src3: PropTypes.string,
  IMAGE8300png_alt3: PropTypes.string,
  platinumpng_src1: PropTypes.string,
  platinumpng_alt1: PropTypes.string,
  goldpng_src7: PropTypes.string,
  goldpng_alt7: PropTypes.string,
  SummonerTeleportpng_src2: PropTypes.string,
  SummonerTeleportpng_alt2: PropTypes.string,
  SummonerFlashpng_src7: PropTypes.string,
  SummonerFlashpng_alt7: PropTypes.string,
  IMAGE8229png_src: PropTypes.string,
  IMAGE8229png_alt: PropTypes.string,
  IMAGE8100png_src: PropTypes.string,
  IMAGE8100png_alt: PropTypes.string,
  goldpng_src8: PropTypes.string,
  goldpng_alt8: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  goldpng_src9: PropTypes.string,
  goldpng_alt9: PropTypes.string,
  SummonerBoostpng_src: PropTypes.string,
  SummonerBoostpng_alt: PropTypes.string,
  SummonerFlashpng_src8: PropTypes.string,
  SummonerFlashpng_alt8: PropTypes.string,
  IMAGE8010png_src1: PropTypes.string,
  IMAGE8010png_alt1: PropTypes.string,
  IMAGE8100png_src1: PropTypes.string,
  IMAGE8100png_alt1: PropTypes.string,
  goldpng_src10: PropTypes.string,
  goldpng_alt10: PropTypes.string,
  goldpng_src11: PropTypes.string,
  goldpng_alt11: PropTypes.string,
  SummonerFlashpng_src9: PropTypes.string,
  SummonerFlashpng_alt9: PropTypes.string,
  SummonerDotpng_src2: PropTypes.string,
  SummonerDotpng_alt2: PropTypes.string,
  IMAGE8439png_src1: PropTypes.string,
  IMAGE8439png_alt1: PropTypes.string,
  IMAGE8000png_src: PropTypes.string,
  IMAGE8000png_alt: PropTypes.string,
  goldpng_src12: PropTypes.string,
  goldpng_alt12: PropTypes.string,
  bronzepng_src: PropTypes.string,
  bronzepng_alt: PropTypes.string,
  Quinnpng_src: PropTypes.string,
  Quinnpng_alt: PropTypes.string,
  divwin_src3: PropTypes.string,
  divwin_alt3: PropTypes.string,
  iconarrowdownsvg_src5: PropTypes.string,
  iconarrowdownsvg_alt5: PropTypes.string,
  Rumblepng_src: PropTypes.string,
  Rumblepng_alt: PropTypes.string,
  divwin_src4: PropTypes.string,
  divwin_alt4: PropTypes.string,
  iconarrowdownsvg_src6: PropTypes.string,
  iconarrowdownsvg_alt6: PropTypes.string,
  Malphitepng_src: PropTypes.string,
  Malphitepng_alt: PropTypes.string,
  divwin_src5: PropTypes.string,
  divwin_alt5: PropTypes.string,
  iconarrowdownsvg_src7: PropTypes.string,
  iconarrowdownsvg_alt7: PropTypes.string,
  Samirapng_src: PropTypes.string,
  Samirapng_alt: PropTypes.string,
  divwin_src6: PropTypes.string,
  divwin_alt6: PropTypes.string,
  iconarrowdownsvg_src8: PropTypes.string,
  iconarrowdownsvg_alt8: PropTypes.string,
  Rellpng_src: PropTypes.string,
  Rellpng_alt: PropTypes.string,
  divwin_src7: PropTypes.string,
  divwin_alt7: PropTypes.string,
  iconarrowdownsvg_src9: PropTypes.string,
  iconarrowdownsvg_alt9: PropTypes.string,
}

export default MatchIngameComponent
