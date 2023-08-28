import { Helmet } from 'react-helmet'

import ChampionStaticComponent from '../components/champion-static-component'
import EachChampionStatic from '../components/each-champion-static'
import ChampionStaticWithWinPerComponent from '../components/champion-static-with-win-per-component'
import '../styles/champion-statistic-component.css'
import { createContext, useContext, useEffect, useState } from 'react';
import { fetchWinRate } from '../api/winRate';
import { fetchMostChampion } from '../api/match';
import { useLocation } from 'react-router-dom';
import EachOpChampionStatic from '../components/each-opchampion-static';
import LogoComponent from '../components/logo-component';
import Modal from 'react-modal';

const ChampionContext = createContext();
const OpChampionContext = createContext();

export function useChampionContext() {
  return useContext(ChampionContext);
}
export function useOpChampionContext() {
  return useContext(OpChampionContext);
}

const ChampionStatisticComponent = () => {
  const location = useLocation();
  const [EvalmodalIsOpen, setEvalModalIsOpen] = useState(false);
  const [champion, setChampion] = useState(location.state.champion);
  const [opChampions, setOpChampions] = useState([]);
  const [mostChampions, setMostChampions] = useState([]);
  const [opChampion, setOpChampion] = useState(null);
  const [opChampionName, setOpChampionName] = useState("");
  const puuid = location.state.puuid;

  useEffect(() => {
    fetchWinRate(puuid, champion.championName)
      .then(res => setOpChampions(res.data) || []);
    fetchMostChampion(puuid)
      .then(res => setMostChampions(res.data || []));
  }, [champion]);

  return (
    <div className="champion-statistic-component-container">
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
          <div>
            <span className="gptAnswer">{opChampions.gptAnswer}</span>
          </div>
          <div className="ratingButtons">
            <button className="ratingButton" onClick={() => setEvalModalIsOpen(false)}>닫기</button>
          </div>
        </Modal>
      </div>
      <Helmet>
        <title>ChampionStatisticComponent - exported project</title>
        <meta
          property="og:title"
          content="ChampionStatisticComponent - exported project"
        />
      </Helmet>
      <div className="champion-statistic-component-divsc6mmc4z1">
        <div className="champion-statistic-component-nav">
          <div className="champion-statistic-component-divafn8215">
            <div className="champion-statistic-component-linkmargin">
              <LogoComponent/>
            </div>
          </div>
        </div>
      </div>
      <div className="champion-statistic-component-divsc6mmc4z0">
        <div className="champion-statistic-component-header">
          <ChampionContext.Provider value = {{champion, setChampion}}>
          <ChampionStaticComponent rootClassName="champion-static-component-root-class-name"></ChampionStaticComponent>
          <div className="champion-statistic-component-divxa61q1">
            <div className="champion-statistic-component-divsc68ejq0">
              <div className="champion-statistic-component-list">
                <div className="champion-statistic-component-divk7f3uw10">
                  <div className="champion-statistic-component-spank7f3uw12">
                    <span className="champion-statistic-compo nent-text">
                      <span>챔피언</span>
                    </span>
                  </div>
                  <div className="champion-statistic-component-spank7f3uw121">
                    <span className="champion-statistic-component-text02">
                      <span>승률</span>
                    </span>
                  </div>
                  <div className="champion-statistic-component-spank7f3uw123">
                    <span className="champion-statistic-component-text06">
                      <span>KDA</span>
                    </span>
                  </div>
                </div>
                {
                  mostChampions.map((champion, index) =>
                  <div key={index}>
                    <EachChampionStatic rootClassName="each-champion-static-root-class-name8" champion={champion}></EachChampionStatic>
                  </div>)
                }
              </div>
            </div>
          </div>
          </ChampionContext.Provider>
        </div>
        <div className="champion-statistic-component-header1">
          { opChampions.length !== 0 &&
            <OpChampionContext.Provider value = {{ opChampionName,  opChampion, setOpChampionName, setOpChampion}}>
          <ChampionStaticWithWinPerComponent rootClassName="champion-static-with-win-per-component-root-class-name"></ChampionStaticWithWinPerComponent>
          <div className="champion-statistic-component-divxa61q11">
            <div className="champion-statistic-component-divsc68ejq01">
              <div className="champion-statistic-component-list1">
                <div className="champion-statistic-component-divk7f3uw101">
                  <div className="champion-statistic-component-spank7f3uw124">
                    <span className="champion-statistic-component-text08">
                      <span>챔피언</span>
                    </span>
                  </div>
                  <div className="champion-statistic-component-spank7f3uw125">
                    <span className="champion-statistic-component-text10">
                      <span>승률</span>
                    </span>
                  </div>
                </div>
                {
                  opChampions.length !== 0 ? (
                    Object.entries(opChampions.championWinRateResponseMap).map(([championName, championData], index) => (
                      <div key={index}>
                        <EachOpChampionStatic
                          rootClassName="each-champion-static-root-class-name12"
                          champion={championData}
                          championName={championName}
                        ></EachOpChampionStatic>
                      </div>
                    ))
                  ) : (
                    <span>Loading...</span>
                  )

                }
              </div>
            </div>
          </div>
          </OpChampionContext.Provider> }
        </div>
        <span className="champion-statistic-component-text16">
          <span>VS</span>
        </span>
      </div>
      <button className="summoner-profile-component-button" onClick={() => setEvalModalIsOpen(true)}>
        <span className="summoner-profile-component-text09">GPT 분석 보기</span>
      </button>
    </div>
  )
}

export default ChampionStatisticComponent
