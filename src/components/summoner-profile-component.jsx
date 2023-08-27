import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { fetchUserRate } from '../api/summoner';


import PropTypes from 'prop-types';

import '../styles/summoner-profile-component.css';

const SummonerProfileComponent = (props) => {
  const [EvalmodalIsOpen, setEvalModalIsOpen] = useState(false);
  const [skillRating, setSkillRating] = useState(0);
  const [mannerRating, setMannerRating] = useState(0);
  const [honorRating, setHonorRating] = useState(0);
  let history = useHistory();
  const location = useLocation();
  const inputSummonerName = location.state.inputSummonerName;

  const GoIngame = () => {
        history.push({pathname: `/match-ingame-page/${inputSummonerName}`, state:{inputSummonerName}});
  };

  const handleStarClick = (ratingType, value) => {
    switch (ratingType) {
      case 'skill':
        setSkillRating(value);
        break;
      case 'manner':
        setMannerRating(value);
        break;
      case 'honor':
        setHonorRating(value);
        break;
      default:
        break;
    }
  };

  const ratingText = ["실력", "매너", "명예로운 적"];

  console.log(props.userInfo);
  console.log(props.userInfo.puuid);
  console.log(props.soloRank);
  console.log(props.flexRank);
  console.log(props.userRating);

  const renderStars = (rating, ratingType) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={index < rating ? 'star filled' : 'star'}
        onClick={() => handleStarClick(ratingType, index + 1)}
      />
    ));
  };

  const rateUser = () => {
    const rateData = {
      puuid : props.userInfo.puuid,
      raterUserId : 1,
      skillRating : skillRating,
      mannerRating : mannerRating,
      honorRating : honorRating
    }

    console.log(rateData);
    console.log(JSON.stringify(rateData));
    fetchUserRate(JSON.stringify(rateData)).then(r => console.log(r));
    setEvalModalIsOpen(false);
  };



  return (

    <div
      className={`summoner-profile-component-divcontentheader ${props.rootClassName} `}
    >
           <div>
              <Modal
              isOpen={EvalmodalIsOpen}
              onRequestClose={() => setEvalModalIsOpen(false)}
              contentLabel="팝업 내용"
              style={{
                        overlay: {
                          zIndex: 2,
                          width: 600,
                          height: 700,
                          backgroundColor: "transparent",
                        },
                        content: {
                          backgroundColor: "#6e6e6e",
                          zIndex: 3,
                        },
              }}
              >
                <div className='rateSummoner'>
                  <h1>소환사 평가</h1>
                  <div className='ratingSection'>
                    <h4>실력</h4>
                    <div className='ratingStars'>
                      {renderStars(skillRating, 'skill')}
                    </div>
                  </div>
                  <div className='ratingSection'>
                    <h4>매너</h4>
                    <div className='ratingStars'>
                      {renderStars(mannerRating, 'manner')}
                    </div>
                  </div>
                  <div className='ratingSection'>
                    <h4>명예로운 적</h4>
                    <div className='ratingStars'>
                      {renderStars(honorRating, 'honor')}
                    </div>
                  </div>
                </div>
                <div className="ratingButtons">
                  <button className="ratingButton" type="submit" onClick={() => rateUser()}>평가하기</button><br/><br/>
                  <button className="ratingButton" onClick={() => setEvalModalIsOpen(false)}>닫기</button>
                </div>
              </Modal>
           </div>

      <div className="summoner-profile-component-divheaderprofileinfo">
        <div className="summoner-profile-component-divprofileicon">
          <img
            alt={props.profileIcon5212jpg_alt}
            src={props.userInfo.profileImageUrl}
            className="summoner-profile-component-profile-icon5212jpg"

          />
          <div className="summoner-profile-component-summonerlevel">
            <span className="summoner-profile-component-text">
              <span className="">{props.userInfo.summonerLevel}</span>
            </span>
          </div>
        </div>
        <div className="summoner-profile-component-divinfo">
          <div className="summoner-profile-component-list">
            <div className="summoner-profile-component-item">
              <div className="summoner-profile-component-div">
                <span className="summoner-profile-component-text02">
                  <span className="summoner-profile-component-text03">
                    솔로랭크
                  </span>
                  {
                      props.soloRank.tier === "Unranked"
                      ? <span className="">  {props.soloRank.tier}</span>
                      : <span className="">  {props.soloRank.tier} {props.soloRank.rank} {props.soloRank.leaguePoints}pt</span>
                  }
                </span>
              </div>
            </div>
            <div className="summoner-profile-component-item1">
              <div className="summoner-profile-component-div1">
                <span className="summoner-profile-component-text05">
                  <span className="summoner-profile-component-text06">
                    자유랭크
                  </span>
                  {
                      props.flexRank.tier === "Unranked"
                      ? <span className="">  {props.flexRank.tier}</span>
                      : <span className="">{props.flexRank.tier} {props.flexRank.rank} {props.flexRank.leaguePoints}</span>
                  }
                </span>
              </div>
            </div>
          </div>
          <div className="summoner-profile-component-divname">
            <div className="summoner-profile-component-heading1">
              <span className="summoner-profile-component-text08">{props.userInfo.name}</span>
            </div>
          </div>
          <div>
            <div className="rating">
              <table>
              {props.userRating.map((rating, index) => (
                  <tr key={index}>
                    <td className="ratingText">{ratingText[index]}</td>
                    <td>{renderStars(rating)}</td>
                  </tr>
              ))}
              </table>
            </div>
          </div>
          <button className="summoner-profile-component-button" onClick={() => setEvalModalIsOpen(true)}>
            <span className="summoner-profile-component-text09">평가하기</span>
          </button>
          <button className="summoner-profile-component-button1" onClick={() => setEvalModalIsOpen(true)}>
            <span className="summoner-profile-component-text09">전적 갱신</span>
          </button>
          <span className="summoner-profile-component-text10">
            Available in 85 Seconds.
          </span>
        </div>
      </div>
      <div className="summoner-profile-component-navbar">
        <div className="summoner-profile-component-nav-list">
          <div className="summoner-profile-component-nav-total">
            <div className="summoner-profile-component-text-wrapper">
              <span className="summoner-profile-component-text11">
                {props.text2}
              </span>
            </div>
          </div>
          <div className="summoner-profile-component-nav-champion">
            <span className="summoner-profile-component-text12">
              {props.text}
            </span>
          </div>
          <div className="summoner-profile-component-nav-ingame">
            <button className={"summoner-profile-component-text13"} onClick={GoIngame}>
              {props.text1}
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}

SummonerProfileComponent.defaultProps = {
  riotlogomarkcircleoffwhite2xpng_alt: 'riotlogomarkcircleoffwhite2xpng1810',
  profileIcon5212jpg_alt: 'profileIcon5212jpg1810',
  riotlogomarkcircleoffwhite2xpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/61531216-3168-41e9-9828-5333f9c42989?org_if_sml=1724',
  pseudo_alt: 'pseudo1810',
  text2: '종합',
  iconarrowrightsvg_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/abb4caea-e546-40ce-afd4-b5458425f4dc?org_if_sml=1244',
  profileIcon5212jpg_src: '/external/profileicon5212jpg1810-zel-200h.png',
  rootClassName: '',
  iconbookmarksvg_alt: 'iconbookmarksvg1810',
  text: '챔피언',
  text1: '인게임 정보',
  iconbookmarksvg_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/a7dac701-6301-4e41-bc66-1920e41cd78c?org_if_sml=1485',
  pseudo_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/6598e7fc-775c-45b0-a3d2-e5ad98fcd8a1?org_if_sml=11694',
  iconarrowrightsvg_alt: 'iconarrowrightsvg1810',
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/540a8c49-a20a-4abe-8c04-1237c44ec881/8e447985-a449-47b5-a573-6127e7898cd9?org_if_sml=113671',
  pastedImage_alt: 'pastedImage',
  pastedImage_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/540a8c49-a20a-4abe-8c04-1237c44ec881/76178ba8-d9cf-4a95-a98c-3c33a3168d49?org_if_sml=131670',
  pastedImage_alt1: 'pastedImage',
  pastedImage_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/540a8c49-a20a-4abe-8c04-1237c44ec881/51756d50-759e-488c-932f-baf60d314358?org_if_sml=1221502',
  pastedImage_alt2: 'pastedImage',
  pastedImage_src21:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/540a8c49-a20a-4abe-8c04-1237c44ec881/51756d50-759e-488c-932f-baf60d314358?org_if_sml=1221502',
  pastedImage_alt21: 'pastedImage',
  pastedImage_src211:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/540a8c49-a20a-4abe-8c04-1237c44ec881/51756d50-759e-488c-932f-baf60d314358?org_if_sml=1221502',
  pastedImage_alt211: 'pastedImage',
  pastedImage_src3:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/540a8c49-a20a-4abe-8c04-1237c44ec881/f3ef6ea5-f52e-4461-ac9f-a2b0cdbfb8f1?org_if_sml=1208250',
  pastedImage_alt3: 'pastedImage',
  pastedImage_src31:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/540a8c49-a20a-4abe-8c04-1237c44ec881/f3ef6ea5-f52e-4461-ac9f-a2b0cdbfb8f1?org_if_sml=1208250',
  pastedImage_alt31: 'pastedImage',
  pastedImage_src32:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/540a8c49-a20a-4abe-8c04-1237c44ec881/f3ef6ea5-f52e-4461-ac9f-a2b0cdbfb8f1?org_if_sml=1208250',
  pastedImage_alt32: 'pastedImage',
  pastedImage_src33:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/540a8c49-a20a-4abe-8c04-1237c44ec881/f3ef6ea5-f52e-4461-ac9f-a2b0cdbfb8f1?org_if_sml=1208250',
  pastedImage_alt33: 'pastedImage',
  pastedImage_src34: '/external/pastedimage-wrax-200h.png',
  pastedImage_alt34: 'pastedImage',
  pastedImage_src22:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/540a8c49-a20a-4abe-8c04-1237c44ec881/51756d50-759e-488c-932f-baf60d314358?org_if_sml=1221502',
  pastedImage_alt22: 'pastedImage',
  pastedImage_src23:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/540a8c49-a20a-4abe-8c04-1237c44ec881/51756d50-759e-488c-932f-baf60d314358?org_if_sml=1221502',
  pastedImage_alt23: 'pastedImage',
  pastedImage_src231:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/540a8c49-a20a-4abe-8c04-1237c44ec881/51756d50-759e-488c-932f-baf60d314358?org_if_sml=1221502',
  pastedImage_alt231: 'pastedImage',
  pastedImage_src221:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/540a8c49-a20a-4abe-8c04-1237c44ec881/51756d50-759e-488c-932f-baf60d314358?org_if_sml=1221502',
  pastedImage_alt221: 'pastedImage',
  pastedImage_src4: '/external/pastedimage-cxoh-200h.png',
  pastedImage_alt4: 'pastedImage',
}

SummonerProfileComponent.propTypes = {
  soloRank: PropTypes.any,
  flexRank: PropTypes.any,
  userRating: PropTypes.any,
  userInfo: PropTypes.any,
  riotlogomarkcircleoffwhite2xpng_alt: PropTypes.string,
  profileIcon5212jpg_alt: PropTypes.string,
  riotlogomarkcircleoffwhite2xpng_src: PropTypes.string,
  pseudo_alt: PropTypes.string,
  text2: PropTypes.string,
  iconarrowrightsvg_src: PropTypes.string,
  profileIcon5212jpg_src: PropTypes.string,
  rootClassName: PropTypes.string,
  iconbookmarksvg_alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  iconbookmarksvg_src: PropTypes.string,
  pseudo_src: PropTypes.string,
  iconarrowrightsvg_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_src2: PropTypes.string,
  pastedImage_alt2: PropTypes.string,
  pastedImage_src21: PropTypes.string,
  pastedImage_alt21: PropTypes.string,
  pastedImage_src211: PropTypes.string,
  pastedImage_alt211: PropTypes.string,
  pastedImage_src3: PropTypes.string,
  pastedImage_alt3: PropTypes.string,
  pastedImage_src31: PropTypes.string,
  pastedImage_alt31: PropTypes.string,
  pastedImage_src32: PropTypes.string,
  pastedImage_alt32: PropTypes.string,
  pastedImage_src33: PropTypes.string,
  pastedImage_alt33: PropTypes.string,
  pastedImage_src34: PropTypes.string,
  pastedImage_alt34: PropTypes.string,
  pastedImage_src22: PropTypes.string,
  pastedImage_alt22: PropTypes.string,
  pastedImage_src23: PropTypes.string,
  pastedImage_alt23: PropTypes.string,
  pastedImage_src231: PropTypes.string,
  pastedImage_alt231: PropTypes.string,
  pastedImage_src221: PropTypes.string,
  pastedImage_alt221: PropTypes.string,
  pastedImage_src4: PropTypes.string,
  pastedImage_alt4: PropTypes.string,
}

export default SummonerProfileComponent
