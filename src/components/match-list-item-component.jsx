import PropTypes from 'prop-types'

import '../styles/match-list-item-component.css'
import ParticipantComponent from "./match-list/participant-component";
import IconSlotComponent from "./match-list/icon-slot-component";
import {useState} from "react";
import MatchDetailComponent from "./real-match-detail-component";

const MatchListItemComponent = (props) => {
  const [showDetail, setShowDetail] = useState(false);

  const { gameDuration, queueType, gameStartTime, participants }  = props.match;
  const summonerName = props.summonerName;

  const target = participants.find(it=>it.summonerName === summonerName);
  const targetItems = [ target.itemImageUrl1, target.itemImageUrl2, target.itemImageUrl3, target.itemImageUrl4, target.itemImageUrl5, target.itemImageUrl6];
  const gameTimes = gameDuration.split(":");
  const winTeam = participants.filter(it=>it.win);
  const loseTeam = participants.filter(it=>!it.win);

  const toggleDetail = () => setShowDetail(!showDetail);

  const gameTimeAgo = getDateDiff(new Date(gameStartTime), new Date());

  return (
      <>
        <div className="match-list-item-component-item" onClick={toggleDetail}>
          <div className="match-list-item-component-divgamecontent">
            <div className="match-list-item-component-divgame">
              <div className="match-list-item-component-divtype">
                <span className="match-list-item-component-text">{queueType.name}</span>
              </div>
              <div className="match-list-item-component-div">
                <span className="match-list-item-component-text02">{`${gameTimeAgo}일 전`}</span>
              </div>
              <div className="match-list-item-component-divbarmargin">
                <img src={props.divbar_src} className="match-list-item-component-divbar"/>
              </div>
              <div className="match-list-item-component-divresult">
                <span className="match-list-item-component-text04">{ target.win ? '승리' : '패배'}</span>
              </div>
              <div className="match-list-item-component-divlength">
              <span className="match-list-item-component-text06">{`${gameTimes[0]}분 ${gameTimes[1]}초`}</span>
              </div>
            </div>
            <div className="match-list-item-component-divinfo">
              <div className="match-list-item-component-div1">
                <div className="match-list-item-component-divchampion">
                  <div className="match-list-item-component-link">
                    <img src={target.championImageUrl} className="match-list-item-component-ahripng"/>
                    <div className="match-list-item-component-spanchampionlevel">
                      <span className="match-list-item-component-text08">{target.championLevel}</span>
                    </div>
                  </div>
                  <div className="match-list-item-component-divspellsmargin">
                      <IconSlotComponent iconUrls={[target.spellImageUrl1, target.spellImageUrl2]} showsVertical/>
                  </div>
                  <div className="match-list-item-component-divspellsmargin">
                      <IconSlotComponent iconUrls={[target.perkImageUrl1, target.perkImageUrl2]} showsVertical/>
                  </div>
                </div>
                <div className="match-list-item-component-divkdamargin">
                  <div className="match-list-item-component-divkda">
                    <div className="match-list-item-component-divkda1">
                    <span className="match-list-item-component-text10">
                      <span className="match-list-item-component-text11">{target.kill}</span>
                      <span className="match-list-item-component-text12">
                        {' '}
                        /
                        <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                        />
                      </span>
                      <span className="match-list-item-component-text13">{target.death}</span>
                      <span className="match-list-item-component-text14">
                        {' '}
                        / {target.assist}
                      </span>
                    </span>
                    </div>
                    <div className="match-list-item-component-divratio">
                      <span className="match-list-item-component-text15">{`${target.kda} KDA`}</span>
                    </div>
                  </div>
                </div>
                <div className="match-list-item-component-divstats">
                  <img src={props.pseudo_src} className="match-list-item-component-pseudo"/>
                  <div className="match-list-item-component-div3">
                    <span className="match-list-item-component-text21">CS {`${target.cs}`}</span>
                  </div>
                  <div className="match-list-item-component-div4">
                    <span className="match-list-item-component-text23">gold 1{ /* TODO */}</span>
                  </div>
                </div>
              </div>
              <div className="match-list-item-component-div5">
                <div className="match-list-item-component-divitems">
                  <IconSlotComponent iconUrls={targetItems}/>
                  <div className="match-list-item-component-divward"> { /* TODO */}
                    <img src={props.IMAGE3340png_src} className="match-list-item-component-image3340png"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="match-list-item-component-divparticipants">
              <ParticipantComponent participants={winTeam}/>
              <ParticipantComponent participants={loseTeam}/>
            </div>
          </div>
        </div>
        {
          showDetail && <MatchDetailComponent match={props.match}/>
        }
      </>
  )
}

const getDateDiff = (beforeDate, afterDate) => {
    const diffDate = beforeDate.getTime() - afterDate.getTime();

    return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
}

MatchListItemComponent.defaultProps = {
  pseudo_src: '/external/pseudo1815-0bmi-200w.png',
  divbar_src: '/external/divbar1814-2v2d-200h.png',
  IMAGE3340png_src: '/external/image3340png1815-e2cb-200w.png',
}

MatchListItemComponent.propTypes = {
  match: PropTypes.instanceOf,
  summonerName: PropTypes.string,
  pseudo_src: PropTypes.string,
  divbar_src: PropTypes.string,
  IMAGE3340png_src: PropTypes.string,
}

export default MatchListItemComponent;
