import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Modal from 'react-modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {fetchUserRate} from '../api/summoner';


import PropTypes from 'prop-types';

import '../styles/summoner-profile-component.css';

const SummonerProfileComponent = (props) => {
  const [EvalmodalIsOpen, setEvalModalIsOpen] = useState(false);
  const [skillRating, setSkillRating] = useState(0);
  const [mannerRating, setMannerRating] = useState(0);
  const [honorRating, setHonorRating] = useState(0);
  let history = useHistory();
  const inputSummonerName = props.userInfo.name;

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

    fetchUserRate(JSON.stringify(rateData)).then(r => console.log(r));
    setEvalModalIsOpen(false);
  };



  return (

    <div className="summoner-profile-component-divcontentheader">
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
  text2: '종합',
  text: '챔피언',
  text1: '인게임 정보'
}

SummonerProfileComponent.propTypes = {
  soloRank: PropTypes.any,
  flexRank: PropTypes.any,
  userRating: PropTypes.any,
  userInfo: PropTypes.any,
  text2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string
}

export default SummonerProfileComponent
