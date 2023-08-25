import React from 'react'
import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet'

import ChampionStaticComponent from '../components/champion-static-component'
import EachChampionStatic from '../components/each-champion-static'
import ChampionStaticWithWinPerComponent from '../components/champion-static-with-win-per-component'
import '../styles/champion-statistic-component.css'

const ChampionStatisticComponent = (props) => {

let history = useHistory();

  const GoHome = () => {
        history.push({pathname: `/`});
  };

  return (
    <div className="champion-statistic-component-container">
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
              <img
                onClick = {GoHome}
                alt="LinkSVG428"
                src="/external/linksvg428-xbf.svg"
                className="champion-statistic-component-link-svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="champion-statistic-component-divsc6mmc4z0">
        <div className="champion-statistic-component-header">
          <ChampionStaticComponent rootClassName="champion-static-component-root-class-name"></ChampionStaticComponent>
          <div className="champion-statistic-component-divxa61q1">
            <div className="champion-statistic-component-divsc68ejq0">
              <div className="champion-statistic-component-list">
                <div className="champion-statistic-component-divk7f3uw10">
                  <div className="champion-statistic-component-spank7f3uw12">
                    <span className="champion-statistic-component-text">
                      <span>최근 27 경기</span>
                    </span>
                  </div>
                  <div className="champion-statistic-component-spank7f3uw121">
                    <span className="champion-statistic-component-text02">
                      <span>승률</span>
                    </span>
                  </div>
                  <div className="champion-statistic-component-spank7f3uw122">
                    <span className="champion-statistic-component-text04">
                      <span>인분</span>
                    </span>
                  </div>
                  <div className="champion-statistic-component-spank7f3uw123">
                    <span className="champion-statistic-component-text06">
                      <span>KDA</span>
                    </span>
                  </div>
                </div>
                <EachChampionStatic rootClassName="each-champion-static-root-class-name8"></EachChampionStatic>
              </div>
            </div>
          </div>
        </div>
        <div className="champion-statistic-component-header1">
          <ChampionStaticWithWinPerComponent rootClassName="champion-static-with-win-per-component-root-class-name"></ChampionStaticWithWinPerComponent>
          <div className="champion-statistic-component-divxa61q11">
            <div className="champion-statistic-component-divsc68ejq01">
              <div className="champion-statistic-component-list1">
                <div className="champion-statistic-component-divk7f3uw101">
                  <div className="champion-statistic-component-spank7f3uw124">
                    <span className="champion-statistic-component-text08">
                      <span>최근 27 경기</span>
                    </span>
                  </div>
                  <div className="champion-statistic-component-spank7f3uw125">
                    <span className="champion-statistic-component-text10">
                      <span>승률</span>
                    </span>
                  </div>
                  <div className="champion-statistic-component-spank7f3uw126">
                    <span className="champion-statistic-component-text12">
                      <span>인분</span>
                    </span>
                  </div>
                  <div className="champion-statistic-component-spank7f3uw127">
                    <span className="champion-statistic-component-text14">
                      <span>KDA</span>
                    </span>
                  </div>
                </div>
                <EachChampionStatic rootClassName="each-champion-static-root-class-name12"></EachChampionStatic>
              </div>
            </div>
          </div>
        </div>
        <span className="champion-statistic-component-text16">
          <span>VS</span>
        </span>
      </div>
    </div>
  )
}

export default ChampionStatisticComponent
