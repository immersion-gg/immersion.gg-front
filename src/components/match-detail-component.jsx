import React from 'react'

import PropTypes from 'prop-types'

import '../styles/match-detail-component.css'

const MatchDetailComponent = (props) => {
  return (
    <div className="match-detail-component-item">
      <div className="match-detail-component-divcssg1ua1p">
        <div className="match-detail-component-divgamecontent">
          <div className="match-detail-component-divgame">
            <div className="match-detail-component-divtype">
              <span className="match-detail-component-text">
                <span>Flex 5:5 Rank</span>
              </span>
            </div>
            <div className="match-detail-component-div">
              <span className="match-detail-component-text002">
                <span>11 days ago</span>
              </span>
            </div>
            <div className="match-detail-component-divbarmargin">
              <img
                alt={props.divbar_alt}
                src={props.divbar_src}
                className="match-detail-component-divbar"
              />
            </div>
            <div className="match-detail-component-divresult">
              <span className="match-detail-component-text004">
                <span>Victory</span>
              </span>
            </div>
            <div className="match-detail-component-divlength">
              <span className="match-detail-component-text006">
                <span>24m 10s</span>
              </span>
            </div>
          </div>
          <div className="match-detail-component-divinfo">
            <div className="match-detail-component-div01">
              <div className="match-detail-component-divchampion">
                <div className="match-detail-component-link">
                  <img
                    alt={props.Ahripng_alt1}
                    src={props.Ahripng_src1}
                    className="match-detail-component-ahripng"
                  />
                  <div className="match-detail-component-spanchampionlevel">
                    <span className="match-detail-component-text008">
                      <span>15</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-divspellsmargin">
                  <div className="match-detail-component-divspells">
                    <img
                      alt={props.SummonerTeleportpng_alt3}
                      src={props.SummonerTeleportpng_src3}
                      className="match-detail-component-summoner-teleportpng"
                    />
                    <img
                      alt={props.SummonerFlashpng_alt8}
                      src={props.SummonerFlashpng_src8}
                      className="match-detail-component-summoner-flashpng"
                    />
                  </div>
                </div>
                <div className="match-detail-component-divrunesmargin">
                  <div className="match-detail-component-divrunes">
                    <div className="match-detail-component-divrune">
                      <img
                        alt={props.IMAGE8112png_alt2}
                        src={props.IMAGE8112png_src2}
                        className="match-detail-component-image8112png"
                      />
                    </div>
                    <img
                      alt={props.IMAGE8200png_alt2}
                      src={props.IMAGE8200png_src2}
                      className="match-detail-component-image8200png"
                    />
                  </div>
                </div>
              </div>
              <div className="match-detail-component-divkdamargin">
                <div className="match-detail-component-divkda">
                  <div className="match-detail-component-divkda01">
                    <span className="match-detail-component-text010">
                      <span className="match-detail-component-text011">9</span>
                      <span className="match-detail-component-text012">
                        {' '}
                        /
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="match-detail-component-text013">2</span>
                      <span className="match-detail-component-text014">
                        {' '}
                        / 8
                      </span>
                    </span>
                  </div>
                  <div className="match-detail-component-divratio">
                    <span className="match-detail-component-text015">
                      <span>8.50:1 KDA</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="match-detail-component-divstats">
                <img
                  alt={props.pseudo_alt}
                  src={props.pseudo_src}
                  className="match-detail-component-pseudo"
                />
                <div className="match-detail-component-div02">
                  <span className="match-detail-component-text017">
                    <span>P/Kill 65%</span>
                  </span>
                </div>
                <span className="match-detail-component-text019">
                  <span>Control Ward 1</span>
                </span>
                <div className="match-detail-component-div03">
                  <span className="match-detail-component-text021">
                    <span>CS 203 (8.4)</span>
                  </span>
                </div>
                <div className="match-detail-component-div04">
                  <span className="match-detail-component-text023">
                    <span>gold 1</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="match-detail-component-div05">
              <div className="match-detail-component-divitems">
                <div className="match-detail-component-list">
                  <div className="match-detail-component-item01">
                    <img
                      alt={props.IMAGE3089png_alt1}
                      src={props.IMAGE3089png_src1}
                      className="match-detail-component-image3089png"
                    />
                  </div>
                  <div className="match-detail-component-itemmargin">
                    <div className="match-detail-component-item02">
                      <img
                        alt={props.IMAGE3020png_alt3}
                        src={props.IMAGE3020png_src3}
                        className="match-detail-component-image3020png"
                      />
                    </div>
                  </div>
                  <div className="match-detail-component-itemmargin1">
                    <div className="match-detail-component-item03">
                      <img
                        alt={props.IMAGE6656png_alt1}
                        src={props.IMAGE6656png_src1}
                        className="match-detail-component-image6656png"
                      />
                    </div>
                  </div>
                  <div className="match-detail-component-itemmargin2">
                    <div className="match-detail-component-item04">
                      <img
                        alt={props.IMAGE4645png_alt1}
                        src={props.IMAGE4645png_src1}
                        className="match-detail-component-image4645png"
                      />
                    </div>
                  </div>
                  <div className="match-detail-component-itemmargin3">
                    <div className="match-detail-component-item05">
                      <img
                        alt={props.IMAGE1052png_alt1}
                        src={props.IMAGE1052png_src1}
                        className="match-detail-component-image1052png"
                      />
                    </div>
                  </div>
                  <div className="match-detail-component-itemmargin4">
                    <img
                      alt={props.Item_alt}
                      src={props.Item_src}
                      className="match-detail-component-item06"
                    />
                  </div>
                </div>
                <div className="match-detail-component-divward">
                  <img
                    alt={props.IMAGE3340png_alt}
                    src={props.IMAGE3340png_src}
                    className="match-detail-component-image3340png"
                  />
                </div>
              </div>
              <button className="match-detail-component-button">
                <div className="match-detail-component-divbadge">
                  <span className="match-detail-component-text025">
                    <span>MVP</span>
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="match-detail-component-divparticipants">
            <div className="match-detail-component-list1">
              <div className="match-detail-component-item07">
                <img
                  alt={props.Akalipng_alt}
                  src={props.Akalipng_src}
                  className="match-detail-component-akalipng"
                />
                <div className="match-detail-component-link01">
                  <span className="match-detail-component-text027">
                    <span>Ieejunyeo…</span>
                  </span>
                </div>
              </div>
              <div className="match-detail-component-item08">
                <img
                  alt={props.Rammuspng_alt}
                  src={props.Rammuspng_src}
                  className="match-detail-component-rammuspng"
                />
                <div className="match-detail-component-link02">
                  <span className="match-detail-component-text029">
                    <span>봉봉 청포…</span>
                  </span>
                </div>
              </div>
              <div className="match-detail-component-item09">
                <img
                  alt={props.Dianapng_alt}
                  src={props.Dianapng_src}
                  className="match-detail-component-dianapng"
                />
                <div className="match-detail-component-link03">
                  <span className="match-detail-component-text031">
                    <span>내가 탑갈…</span>
                  </span>
                </div>
              </div>
              <div className="match-detail-component-item10">
                <img
                  alt={props.Ashepng_alt}
                  src={props.Ashepng_src}
                  className="match-detail-component-ashepng"
                />
                <div className="match-detail-component-link04">
                  <span className="match-detail-component-text033">
                    <span>국방부장…</span>
                  </span>
                </div>
              </div>
              <div className="match-detail-component-item11">
                <img
                  alt={props.Lulupng_alt}
                  src={props.Lulupng_src}
                  className="match-detail-component-lulupng"
                />
                <div className="match-detail-component-link05">
                  <span className="match-detail-component-text035">
                    <span>기승이개…</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="match-detail-component-list2">
              <div className="match-detail-component-item12">
                <img
                  alt={props.Shenpng_alt}
                  src={props.Shenpng_src}
                  className="match-detail-component-shenpng"
                />
                <div className="match-detail-component-link06">
                  <span className="match-detail-component-text037">
                    <span>포션 안사…</span>
                  </span>
                </div>
              </div>
              <div className="match-detail-component-item13">
                <img
                  alt={props.MasterYipng_alt}
                  src={props.MasterYipng_src}
                  className="match-detail-component-master-yipng"
                />
                <div className="match-detail-component-link07">
                  <span className="match-detail-component-text039">
                    <span>Aim On D…</span>
                  </span>
                </div>
              </div>
              <div className="match-detail-component-item14">
                <img
                  alt={props.Ahripng_alt}
                  src={props.Ahripng_src}
                  className="match-detail-component-ahripng1"
                />
                <div className="match-detail-component-link08">
                  <span className="match-detail-component-text041">
                    <span>김석균</span>
                  </span>
                </div>
              </div>
              <div className="match-detail-component-item15">
                <img
                  alt={props.Zeripng_alt}
                  src={props.Zeripng_src}
                  className="match-detail-component-zeripng"
                />
                <div className="match-detail-component-link09">
                  <span className="match-detail-component-text043">
                    <span>병 인 지</span>
                  </span>
                </div>
              </div>
              <div className="match-detail-component-item16">
                <img
                  alt={props.Leonapng_alt}
                  src={props.Leonapng_src}
                  className="match-detail-component-leonapng"
                />
                <div className="match-detail-component-link10">
                  <span className="match-detail-component-text045">
                    <span>삼대오백…</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="match-detail-component-divcsstd19lb">
        <div className="match-detail-component-list3">
          <button className="match-detail-component-item-button">
            <span className="match-detail-component-text047">
              <span>Overview</span>
            </span>
          </button>
          <div className="match-detail-component-itemmargin5">
            <button className="match-detail-component-item-button1">
              <span className="match-detail-component-text049">
                <span>OP Score</span>
              </span>
            </button>
          </div>
          <div className="match-detail-component-itemmargin6">
            <button className="match-detail-component-item-button2">
              <span className="match-detail-component-text051">
                <span>Team Analysis</span>
              </span>
            </button>
          </div>
          <div className="match-detail-component-itemmargin7">
            <button className="match-detail-component-item-button3">
              <span className="match-detail-component-text053">
                <span>Build</span>
              </span>
            </button>
          </div>
          <div className="match-detail-component-itemmargin8">
            <button className="match-detail-component-item-button4">
              <span className="match-detail-component-text055">
                <span>etc</span>
              </span>
            </button>
          </div>
        </div>
        <div className="match-detail-component-divcss8v8rmq">
          <div className="match-detail-component-table">
            <div className="match-detail-component-header-row">
              <div className="match-detail-component-cell">
                <span className="match-detail-component-text057">
                  <span>Victory</span>
                </span>
                <span className="match-detail-component-text059">
                  <span>(Red Team)</span>
                </span>
              </div>
              <div className="match-detail-component-cell01">
                <span className="match-detail-component-text061">
                  <span>OP Score</span>
                </span>
              </div>
              <div className="match-detail-component-cell02">
                <span className="match-detail-component-text063">
                  <span>KDA</span>
                </span>
              </div>
              <div className="match-detail-component-cell03">
                <span className="match-detail-component-text065">
                  <span>Damage</span>
                </span>
              </div>
              <div className="match-detail-component-cell04">
                <span className="match-detail-component-text067">
                  <span>Wards</span>
                </span>
              </div>
              <div className="match-detail-component-cell05">
                <span className="match-detail-component-text069">
                  <span>CS</span>
                </span>
              </div>
              <div className="match-detail-component-cell06">
                <span className="match-detail-component-text071">
                  <span>Item</span>
                </span>
              </div>
            </div>
            <div className="match-detail-component-body">
              <div className="match-detail-component-row">
                <div className="match-detail-component-data-link">
                  <img
                    alt={props.Shenpng_alt1}
                    src={props.Shenpng_src1}
                    className="match-detail-component-shenpng1"
                  />
                  <div className="match-detail-component-divlevel">
                    <span className="match-detail-component-text073">
                      <span>14</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data">
                  <img
                    alt={props.SummonerDotpng_alt}
                    src={props.SummonerDotpng_src}
                    className="match-detail-component-summoner-dotpng"
                  />
                  <img
                    alt={props.SummonerTeleportpng_alt}
                    src={props.SummonerTeleportpng_src}
                    className="match-detail-component-summoner-teleportpng1"
                  />
                </div>
                <div className="match-detail-component-data01">
                  <div className="match-detail-component-div06">
                    <img
                      alt={props.IMAGE8437png_alt}
                      src={props.IMAGE8437png_src}
                      className="match-detail-component-image8437png"
                    />
                  </div>
                  <img
                    alt={props.IMAGE8100png_alt}
                    src={props.IMAGE8100png_src}
                    className="match-detail-component-image8100png"
                  />
                </div>
                <div className="match-detail-component-data02">
                  <span className="match-detail-component-text075">
                    <span>포션 안사는 원딜</span>
                  </span>
                  <div className="match-detail-component-div07">
                    <span className="match-detail-component-text077">
                      <span>gold 1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data03">
                  <div className="match-detail-component-divscore">
                    <span className="match-detail-component-text079">
                      <span>7.6</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divrank">
                    <div className="match-detail-component-divcss1bias8j">
                      <span className="match-detail-component-text081">
                        <span>2nd</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data04">
                  <div className="match-detail-component-divkda02">
                    <span className="match-detail-component-text083">
                      <span>4/3/13 (65%)</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divcssm7y175">
                    <span className="match-detail-component-text085">
                      <span>5.67:1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data05">
                  <div className="match-detail-component-div08">
                    <span className="match-detail-component-text087">
                      <span>12,914</span>
                    </span>
                    <div className="match-detail-component-divprogress">
                      <img
                        alt={props.divfill_alt}
                        src={props.divfill_src}
                        className="match-detail-component-divfill"
                      />
                    </div>
                  </div>
                  <div className="match-detail-component-div09">
                    <span className="match-detail-component-text089">
                      <span>20,160</span>
                    </span>
                    <div className="match-detail-component-divprogresstaken">
                      <img
                        alt={props.divfill_alt1}
                        src={props.divfill_src1}
                        className="match-detail-component-divfill01"
                      />
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data06">
                  <span className="match-detail-component-text091">
                    {props.text6}
                  </span>
                  <div className="match-detail-component-div10">
                    <span className="match-detail-component-text092">
                      <span>1 / 2</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data07">
                  <span className="match-detail-component-text094">
                    <span>142</span>
                  </span>
                  <span className="match-detail-component-text096">
                    <span>5.9/m</span>
                  </span>
                </div>
                <div className="match-detail-component-data08">
                  <img
                    alt={props.IMAGE1028png_alt}
                    src={props.IMAGE1028png_src}
                    className="match-detail-component-image1028png"
                  />
                  <img
                    alt={props.IMAGE3084png_alt}
                    src={props.IMAGE3084png_src}
                    className="match-detail-component-image3084png"
                  />
                  <img
                    alt={props.IMAGE1054png_alt}
                    src={props.IMAGE1054png_src}
                    className="match-detail-component-image1054png"
                  />
                  <img
                    alt={props.IMAGE3047png_alt}
                    src={props.IMAGE3047png_src}
                    className="match-detail-component-image3047png"
                  />
                  <img
                    alt={props.IMAGE3068png_alt}
                    src={props.IMAGE3068png_src}
                    className="match-detail-component-image3068png"
                  />
                  <img
                    alt={props.IMAGE3082png_alt}
                    src={props.IMAGE3082png_src}
                    className="match-detail-component-image3082png"
                  />
                  <img
                    alt={props.IMAGE3364png_alt}
                    src={props.IMAGE3364png_src}
                    className="match-detail-component-image3364png"
                  />
                </div>
              </div>
              <div className="match-detail-component-row01">
                <div className="match-detail-component-data-link1">
                  <img
                    alt={props.MasterYipng_alt1}
                    src={props.MasterYipng_src1}
                    className="match-detail-component-master-yipng1"
                  />
                  <div className="match-detail-component-divlevel01">
                    <span className="match-detail-component-text098">
                      <span>15</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data09">
                  <img
                    alt={props.SummonerSmitepng_alt}
                    src={props.SummonerSmitepng_src}
                    className="match-detail-component-summoner-smitepng"
                  />
                  <img
                    alt={props.SummonerBoostpng_alt}
                    src={props.SummonerBoostpng_src}
                    className="match-detail-component-summoner-boostpng"
                  />
                </div>
                <div className="match-detail-component-data10">
                  <div className="match-detail-component-div11">
                    <img
                      alt={props.IMAGE8008png_alt}
                      src={props.IMAGE8008png_src}
                      className="match-detail-component-image8008png"
                    />
                  </div>
                  <img
                    alt={props.IMAGE8100png_alt1}
                    src={props.IMAGE8100png_src1}
                    className="match-detail-component-image8100png1"
                  />
                </div>
                <div className="match-detail-component-data11">
                  <span className="match-detail-component-text100">
                    <span>Aim On Diamond</span>
                  </span>
                  <div className="match-detail-component-div12">
                    <span className="match-detail-component-text102">
                      <span>platinum 1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data12">
                  <div className="match-detail-component-divscore01">
                    <span className="match-detail-component-text104">
                      <span>5.1</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divrank01">
                    <div className="match-detail-component-divcss1bias8j1">
                      <span className="match-detail-component-text106">
                        <span>5th</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data13">
                  <div className="match-detail-component-divkda03">
                    <span className="match-detail-component-text108">
                      <span>4/3/4 (31%)</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divcss6nxjyb">
                    <span className="match-detail-component-text110">
                      <span>2.67:1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data14">
                  <div className="match-detail-component-div13">
                    <span className="match-detail-component-text112">
                      <span>7,393</span>
                    </span>
                    <div className="match-detail-component-divprogress01">
                      <img
                        alt={props.divfill_alt2}
                        src={props.divfill_src2}
                        className="match-detail-component-divfill02"
                      />
                    </div>
                  </div>
                  <div className="match-detail-component-div14">
                    <span className="match-detail-component-text114">
                      <span>23,235</span>
                    </span>
                    <div className="match-detail-component-divprogresstaken01">
                      <img
                        alt={props.divfill_alt3}
                        src={props.divfill_src3}
                        className="match-detail-component-divfill03"
                      />
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data15">
                  <span className="match-detail-component-text116">
                    {props.text7}
                  </span>
                  <div className="match-detail-component-div15">
                    <span className="match-detail-component-text117">
                      <span>6 / 2</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data16">
                  <span className="match-detail-component-text119">
                    <span>215</span>
                  </span>
                  <span className="match-detail-component-text121">
                    <span>8.9/m</span>
                  </span>
                </div>
                <div className="match-detail-component-data17">
                  <img
                    alt={props.IMAGE3074png_alt}
                    src={props.IMAGE3074png_src}
                    className="match-detail-component-image3074png"
                  />
                  <img
                    alt={props.IMAGE3006png_alt}
                    src={props.IMAGE3006png_src}
                    className="match-detail-component-image3006png"
                  />
                  <img
                    alt={props.IMAGE6672png_alt}
                    src={props.IMAGE6672png_src}
                    className="match-detail-component-image6672png"
                  />
                  <img
                    alt={props.divnoitem_alt}
                    src={props.divnoitem_src}
                    className="match-detail-component-divnoitem"
                  />
                  <img
                    alt={props.IMAGE1038png_alt}
                    src={props.IMAGE1038png_src}
                    className="match-detail-component-image1038png"
                  />
                  <img
                    alt={props.divnoitem_alt1}
                    src={props.divnoitem_src1}
                    className="match-detail-component-divnoitem1"
                  />
                  <img
                    alt={props.IMAGE3364png_alt1}
                    src={props.IMAGE3364png_src1}
                    className="match-detail-component-image3364png1"
                  />
                </div>
              </div>
              <div className="match-detail-component-row02">
                <div className="match-detail-component-data18">
                  <div className="match-detail-component-link11">
                    <img
                      alt={props.Ahripng_alt2}
                      src={props.Ahripng_src2}
                      className="match-detail-component-ahripng2"
                    />
                    <div className="match-detail-component-divlevel02">
                      <span className="match-detail-component-text123">
                        <span>15</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data19">
                  <img
                    alt={props.SummonerTeleportpng_alt1}
                    src={props.SummonerTeleportpng_src1}
                    className="match-detail-component-summoner-teleportpng2"
                  />
                  <img
                    alt={props.SummonerFlashpng_alt}
                    src={props.SummonerFlashpng_src}
                    className="match-detail-component-summoner-flashpng1"
                  />
                </div>
                <div className="match-detail-component-data20">
                  <div className="match-detail-component-div16">
                    <img
                      alt={props.IMAGE8112png_alt}
                      src={props.IMAGE8112png_src}
                      className="match-detail-component-image8112png1"
                    />
                  </div>
                  <img
                    alt={props.IMAGE8200png_alt}
                    src={props.IMAGE8200png_src}
                    className="match-detail-component-image8200png1"
                  />
                </div>
                <div className="match-detail-component-data21">
                  <span className="match-detail-component-text125">
                    <span>김석균</span>
                  </span>
                  <div className="match-detail-component-div17">
                    <span className="match-detail-component-text127">
                      <span>gold 1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data22">
                  <div className="match-detail-component-divwrapper">
                    <div className="match-detail-component-divscore02">
                      <span className="match-detail-component-text129">
                        <span>9.1</span>
                      </span>
                    </div>
                    <div className="match-detail-component-divrank02">
                      <div className="match-detail-component-divcssxlngd7">
                        <span className="match-detail-component-text131">
                          <span>MVP</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data23">
                  <div className="match-detail-component-divkda04">
                    <span className="match-detail-component-text133">
                      <span>9/2/8 (65%)</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divcssm7y1751">
                    <span className="match-detail-component-text135">
                      <span>8.50:1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data24">
                  <div className="match-detail-component-div18">
                    <div className="match-detail-component-div19">
                      <span className="match-detail-component-text137">
                        <span>23,335</span>
                      </span>
                      <div className="match-detail-component-divprogress02">
                        <img
                          alt={props.divfill_alt18}
                          src={props.divfill_src18}
                          className="match-detail-component-divfill04"
                        />
                      </div>
                    </div>
                    <div className="match-detail-component-div20">
                      <span className="match-detail-component-text139">
                        <span>12,067</span>
                      </span>
                      <div className="match-detail-component-divprogresstaken02">
                        <img
                          alt={props.divfill_alt19}
                          src={props.divfill_src19}
                          className="match-detail-component-divfill05"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data25">
                  <div className="match-detail-component-div21">
                    <span className="match-detail-component-text141">
                      {props.text15}
                    </span>
                    <div className="match-detail-component-div22">
                      <span className="match-detail-component-text142">
                        <span>7 / 1</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data26">
                  <span className="match-detail-component-text144">
                    <span>203</span>
                  </span>
                  <span className="match-detail-component-text146">
                    <span>8.4/m</span>
                  </span>
                </div>
                <div className="match-detail-component-data27">
                  <img
                    alt={props.IMAGE3089png_alt}
                    src={props.IMAGE3089png_src}
                    className="match-detail-component-image3089png1"
                  />
                  <img
                    alt={props.IMAGE3020png_alt}
                    src={props.IMAGE3020png_src}
                    className="match-detail-component-image3020png1"
                  />
                  <img
                    alt={props.IMAGE6656png_alt}
                    src={props.IMAGE6656png_src}
                    className="match-detail-component-image6656png1"
                  />
                  <img
                    alt={props.IMAGE4645png_alt}
                    src={props.IMAGE4645png_src}
                    className="match-detail-component-image4645png1"
                  />
                  <img
                    alt={props.IMAGE1052png_alt}
                    src={props.IMAGE1052png_src}
                    className="match-detail-component-image1052png1"
                  />
                  <img
                    alt={props.divnoitem_alt2}
                    src={props.divnoitem_src2}
                    className="match-detail-component-divnoitem2"
                  />
                  <img
                    alt={props.IMAGE3340png_alt1}
                    src={props.IMAGE3340png_src1}
                    className="match-detail-component-image3340png1"
                  />
                </div>
              </div>
              <div className="match-detail-component-row03">
                <div className="match-detail-component-data-link2">
                  <img
                    alt={props.Zeripng_alt1}
                    src={props.Zeripng_src1}
                    className="match-detail-component-zeripng1"
                  />
                  <div className="match-detail-component-divlevel03">
                    <span className="match-detail-component-text148">
                      <span>13</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data28">
                  <img
                    alt={props.SummonerBoostpng_alt1}
                    src={props.SummonerBoostpng_src1}
                    className="match-detail-component-summoner-boostpng1"
                  />
                  <img
                    alt={props.SummonerFlashpng_alt1}
                    src={props.SummonerFlashpng_src1}
                    className="match-detail-component-summoner-flashpng2"
                  />
                </div>
                <div className="match-detail-component-data29">
                  <div className="match-detail-component-div23">
                    <img
                      alt={props.IMAGE8008png_alt1}
                      src={props.IMAGE8008png_src1}
                      className="match-detail-component-image8008png1"
                    />
                  </div>
                  <img
                    alt={props.IMAGE8400png_alt}
                    src={props.IMAGE8400png_src}
                    className="match-detail-component-image8400png"
                  />
                </div>
                <div className="match-detail-component-data30">
                  <span className="match-detail-component-text150">
                    <span>병 인 지</span>
                  </span>
                  <div className="match-detail-component-div24">
                    <span className="match-detail-component-text152">
                      <span>gold 4</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data31">
                  <div className="match-detail-component-divscore03">
                    <span className="match-detail-component-text154">
                      <span>6.1</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divrank03">
                    <div className="match-detail-component-divcss1bias8j2">
                      <span className="match-detail-component-text156">
                        <span>4th</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data32">
                  <div className="match-detail-component-divkda05">
                    <span className="match-detail-component-text158">
                      <span>8/5/5 (50%)</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divcss6nxjyb1">
                    <span className="match-detail-component-text160">
                      <span>2.60:1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data33">
                  <div className="match-detail-component-div25">
                    <span className="match-detail-component-text162">
                      <span>9,895</span>
                    </span>
                    <div className="match-detail-component-divprogress03">
                      <img
                        alt={props.divfill_alt4}
                        src={props.divfill_src4}
                        className="match-detail-component-divfill06"
                      />
                    </div>
                  </div>
                  <div className="match-detail-component-div26">
                    <span className="match-detail-component-text164">
                      <span>11,757</span>
                    </span>
                    <div className="match-detail-component-divprogresstaken03">
                      <img
                        alt={props.divfill_alt5}
                        src={props.divfill_src5}
                        className="match-detail-component-divfill07"
                      />
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data34">
                  <span className="match-detail-component-text166">
                    {props.text8}
                  </span>
                  <div className="match-detail-component-div27">
                    <span className="match-detail-component-text167">
                      <span>9 / 3</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data35">
                  <span className="match-detail-component-text169">
                    <span>179</span>
                  </span>
                  <span className="match-detail-component-text171">
                    <span>7.4/m</span>
                  </span>
                </div>
                <div className="match-detail-component-data36">
                  <img
                    alt={props.IMAGE1038png_alt1}
                    src={props.IMAGE1038png_src1}
                    className="match-detail-component-image1038png1"
                  />
                  <img
                    alt={props.IMAGE1018png_alt}
                    src={props.IMAGE1018png_src}
                    className="match-detail-component-image1018png"
                  />
                  <img
                    alt={props.IMAGE6675png_alt}
                    src={props.IMAGE6675png_src}
                    className="match-detail-component-image6675png"
                  />
                  <img
                    alt={props.IMAGE3087png_alt}
                    src={props.IMAGE3087png_src}
                    className="match-detail-component-image3087png"
                  />
                  <img
                    alt={props.IMAGE1053png_alt}
                    src={props.IMAGE1053png_src}
                    className="match-detail-component-image1053png"
                  />
                  <img
                    alt={props.IMAGE3006png_alt1}
                    src={props.IMAGE3006png_src1}
                    className="match-detail-component-image3006png1"
                  />
                  <img
                    alt={props.IMAGE3363png_alt}
                    src={props.IMAGE3363png_src}
                    className="match-detail-component-image3363png"
                  />
                </div>
              </div>
              <div className="match-detail-component-row04">
                <div className="match-detail-component-data-link3">
                  <img
                    alt={props.Leonapng_alt1}
                    src={props.Leonapng_src1}
                    className="match-detail-component-leonapng1"
                  />
                  <div className="match-detail-component-divlevel04">
                    <span className="match-detail-component-text173">
                      <span>11</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data37">
                  <img
                    alt={props.SummonerFlashpng_alt2}
                    src={props.SummonerFlashpng_src2}
                    className="match-detail-component-summoner-flashpng3"
                  />
                  <img
                    alt={props.SummonerDotpng_alt1}
                    src={props.SummonerDotpng_src1}
                    className="match-detail-component-summoner-dotpng1"
                  />
                </div>
                <div className="match-detail-component-data38">
                  <div className="match-detail-component-div28">
                    <img
                      alt={props.IMAGE8351png_alt}
                      src={props.IMAGE8351png_src}
                      className="match-detail-component-image8351png"
                    />
                  </div>
                  <img
                    alt={props.IMAGE8400png_alt1}
                    src={props.IMAGE8400png_src1}
                    className="match-detail-component-image8400png1"
                  />
                </div>
                <div className="match-detail-component-data39">
                  <span className="match-detail-component-text175">
                    <span>삼대오백치는여자</span>
                  </span>
                  <span className="match-detail-component-text177">
                    <span>Level 228</span>
                  </span>
                </div>
                <div className="match-detail-component-data40">
                  <div className="match-detail-component-divscore04">
                    <span className="match-detail-component-text179">
                      <span>4.3</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divrank04">
                    <div className="match-detail-component-divcss1bias8j3">
                      <span className="match-detail-component-text181">
                        <span>9th</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data41">
                  <div className="match-detail-component-divkda06">
                    <span className="match-detail-component-text183">
                      <span>1/7/11 (46%)</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divcss6nxjyb2">
                    <span className="match-detail-component-text185">
                      <span>1.71:1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data42">
                  <div className="match-detail-component-div29">
                    <span className="match-detail-component-text187">
                      <span>2,790</span>
                    </span>
                    <div className="match-detail-component-divprogress04">
                      <img
                        alt={props.divfill_alt6}
                        src={props.divfill_src6}
                        className="match-detail-component-divfill08"
                      />
                    </div>
                  </div>
                  <div className="match-detail-component-div30">
                    <span className="match-detail-component-text189">
                      <span>15,010</span>
                    </span>
                    <div className="match-detail-component-divprogresstaken04">
                      <img
                        alt={props.divfill_alt7}
                        src={props.divfill_src7}
                        className="match-detail-component-divfill09"
                      />
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data43">
                  <span className="match-detail-component-text191">
                    {props.text9}
                  </span>
                  <div className="match-detail-component-div31">
                    <span className="match-detail-component-text192">
                      <span>18 / 8</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data44">
                  <span className="match-detail-component-text194">
                    <span>26</span>
                  </span>
                  <span className="match-detail-component-text196">
                    <span>1.1/m</span>
                  </span>
                </div>
                <div className="match-detail-component-data45">
                  <img
                    alt={props.IMAGE3190png_alt}
                    src={props.IMAGE3190png_src}
                    className="match-detail-component-image3190png"
                  />
                  <img
                    alt={props.IMAGE3050png_alt}
                    src={props.IMAGE3050png_src}
                    className="match-detail-component-image3050png"
                  />
                  <img
                    alt={props.IMAGE3860png_alt}
                    src={props.IMAGE3860png_src}
                    className="match-detail-component-image3860png"
                  />
                  <img
                    alt={props.IMAGE3111png_alt}
                    src={props.IMAGE3111png_src}
                    className="match-detail-component-image3111png"
                  />
                  <img
                    alt={props.divnoitem_alt3}
                    src={props.divnoitem_src3}
                    className="match-detail-component-divnoitem3"
                  />
                  <img
                    alt={props.divnoitem_alt4}
                    src={props.divnoitem_src4}
                    className="match-detail-component-divnoitem4"
                  />
                  <img
                    alt={props.IMAGE3364png_alt2}
                    src={props.IMAGE3364png_src2}
                    className="match-detail-component-image3364png2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="match-detail-component-divsummary">
            <div className="match-detail-component-divteam">
              <div className="match-detail-component-div32">
                <img
                  alt={props.iconbaronsvg_alt}
                  src={props.iconbaronsvg_src}
                  className="match-detail-component-iconbaronsvg"
                />
                <span className="match-detail-component-text198">
                  {props.text}
                </span>
              </div>
              <div className="match-detail-component-div33">
                <img
                  alt={props.icondragonsvg_alt}
                  src={props.icondragonsvg_src}
                  className="match-detail-component-icondragonsvg"
                />
                <span className="match-detail-component-text199">
                  {props.text1}
                </span>
              </div>
              <div className="match-detail-component-div34">
                <img
                  alt={props.icontowersvg_alt}
                  src={props.icontowersvg_src}
                  className="match-detail-component-icontowersvg"
                />
                <span className="match-detail-component-text200">
                  {props.text2}
                </span>
              </div>
            </div>
            <div className="match-detail-component-divsummarygraph">
              <div className="match-detail-component-divgraph">
                <img
                  alt={props.divwin_alt}
                  src={props.divwin_src}
                  className="match-detail-component-divwin"
                />
                <img
                  alt={props.divlose_alt}
                  src={props.divlose_src}
                  className="match-detail-component-divlose"
                />
                <span className="match-detail-component-text201">
                  <span>Total Kill</span>
                </span>
                <span className="match-detail-component-text203">
                  <span>26</span>
                </span>
                <span className="match-detail-component-text205">
                  <span>20</span>
                </span>
              </div>
              <div className="match-detail-component-divgraph1">
                <img
                  alt={props.divwin_alt1}
                  src={props.divwin_src1}
                  className="match-detail-component-divwin1"
                />
                <img
                  alt={props.divlose_alt1}
                  src={props.divlose_src1}
                  className="match-detail-component-divlose1"
                />
                <span className="match-detail-component-text207">
                  <span>Total Gold</span>
                </span>
                <span className="match-detail-component-text209">
                  <span>52,485</span>
                </span>
                <span className="match-detail-component-text211">
                  <span>41,271</span>
                </span>
              </div>
            </div>
            <div className="match-detail-component-divteam1">
              <div className="match-detail-component-div35">
                <img
                  alt={props.iconbaronrsvg_alt}
                  src={props.iconbaronrsvg_src}
                  className="match-detail-component-iconbaronrsvg"
                />
                <span className="match-detail-component-text213">
                  {props.text3}
                </span>
              </div>
              <div className="match-detail-component-div36">
                <img
                  alt={props.icondragonrsvg_alt}
                  src={props.icondragonrsvg_src}
                  className="match-detail-component-icondragonrsvg"
                />
                <span className="match-detail-component-text214">
                  {props.text4}
                </span>
              </div>
              <div className="match-detail-component-div37">
                <img
                  alt={props.icontowerrsvg_alt}
                  src={props.icontowerrsvg_src}
                  className="match-detail-component-icontowerrsvg"
                />
                <span className="match-detail-component-text215">
                  {props.text5}
                </span>
              </div>
            </div>
          </div>
          <div className="match-detail-component-table1">
            <div className="match-detail-component-header-row1">
              <div className="match-detail-component-cell07">
                <span className="match-detail-component-text216">
                  <span>Defeat</span>
                </span>
                <span className="match-detail-component-text218">
                  <span>(Blue Team)</span>
                </span>
              </div>
              <div className="match-detail-component-cell08">
                <span className="match-detail-component-text220">
                  <span>OP Score</span>
                </span>
              </div>
              <div className="match-detail-component-cell09">
                <span className="match-detail-component-text222">
                  <span>KDA</span>
                </span>
              </div>
              <div className="match-detail-component-cell10">
                <span className="match-detail-component-text224">
                  <span>Damage</span>
                </span>
              </div>
              <div className="match-detail-component-cell11">
                <span className="match-detail-component-text226">
                  <span>Wards</span>
                </span>
              </div>
              <div className="match-detail-component-cell12">
                <span className="match-detail-component-text228">
                  <span>CS</span>
                </span>
              </div>
              <div className="match-detail-component-cell13">
                <span className="match-detail-component-text230">
                  <span>Item</span>
                </span>
              </div>
            </div>
            <div className="match-detail-component-body1">
              <div className="match-detail-component-row05">
                <div className="match-detail-component-data-link4">
                  <img
                    alt={props.Akalipng_alt1}
                    src={props.Akalipng_src1}
                    className="match-detail-component-akalipng1"
                  />
                  <div className="match-detail-component-divlevel05">
                    <span className="match-detail-component-text232">
                      <span>12</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data46">
                  <img
                    alt={props.SummonerTeleportpng_alt2}
                    src={props.SummonerTeleportpng_src2}
                    className="match-detail-component-summoner-teleportpng3"
                  />
                  <img
                    alt={props.SummonerFlashpng_alt3}
                    src={props.SummonerFlashpng_src3}
                    className="match-detail-component-summoner-flashpng4"
                  />
                </div>
                <div className="match-detail-component-data47">
                  <div className="match-detail-component-div38">
                    <img
                      alt={props.IMAGE8010png_alt}
                      src={props.IMAGE8010png_src}
                      className="match-detail-component-image8010png"
                    />
                  </div>
                  <img
                    alt={props.IMAGE8400png_alt2}
                    src={props.IMAGE8400png_src2}
                    className="match-detail-component-image8400png2"
                  />
                </div>
                <div className="match-detail-component-data48">
                  <span className="match-detail-component-text234">
                    <span>Ieejunyeong</span>
                  </span>
                  <span className="match-detail-component-text236">
                    <span>Level 194</span>
                  </span>
                </div>
                <div className="match-detail-component-data49">
                  <div className="match-detail-component-divscore05">
                    <span className="match-detail-component-text238">
                      <span>2.6</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divrank05">
                    <div className="match-detail-component-divcss1bias8j4">
                      <span className="match-detail-component-text240">
                        <span>10th</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data50">
                  <div className="match-detail-component-divkda07">
                    <span className="match-detail-component-text242">
                      <span>1/4/1 (10%)</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divcss6nxjyb3">
                    <span className="match-detail-component-text244">
                      <span>0.50:1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data51">
                  <div className="match-detail-component-div39">
                    <span className="match-detail-component-text246">
                      <span>6,541</span>
                    </span>
                    <div className="match-detail-component-divprogress05">
                      <img
                        alt={props.divfill_alt8}
                        src={props.divfill_src8}
                        className="match-detail-component-divfill10"
                      />
                    </div>
                  </div>
                  <div className="match-detail-component-div40">
                    <span className="match-detail-component-text248">
                      <span>14,084</span>
                    </span>
                    <div className="match-detail-component-divprogresstaken05">
                      <img
                        alt={props.divfill_alt9}
                        src={props.divfill_src9}
                        className="match-detail-component-divfill11"
                      />
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data52">
                  <span className="match-detail-component-text250">
                    {props.text10}
                  </span>
                  <div className="match-detail-component-div41">
                    <span className="match-detail-component-text251">
                      <span>4 / 0</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data53">
                  <span className="match-detail-component-text253">
                    <span>113</span>
                  </span>
                  <span className="match-detail-component-text255">
                    <span>4.7/m</span>
                  </span>
                </div>
                <div className="match-detail-component-data54">
                  <img
                    alt={props.IMAGE3152png_alt}
                    src={props.IMAGE3152png_src}
                    className="match-detail-component-image3152png"
                  />
                  <img
                    alt={props.IMAGE1054png_alt1}
                    src={props.IMAGE1054png_src1}
                    className="match-detail-component-image1054png1"
                  />
                  <img
                    alt={props.IMAGE2031png_alt}
                    src={props.IMAGE2031png_src}
                    className="match-detail-component-image2031png"
                  />
                  <img
                    alt={props.IMAGE3145png_alt}
                    src={props.IMAGE3145png_src}
                    className="match-detail-component-image3145png"
                  />
                  <img
                    alt={props.IMAGE1058png_alt}
                    src={props.IMAGE1058png_src}
                    className="match-detail-component-image1058png"
                  />
                  <img
                    alt={props.IMAGE3020png_alt1}
                    src={props.IMAGE3020png_src1}
                    className="match-detail-component-image3020png2"
                  />
                  <img
                    alt={props.IMAGE3340png_alt2}
                    src={props.IMAGE3340png_src2}
                    className="match-detail-component-image3340png2"
                  />
                </div>
              </div>
              <div className="match-detail-component-row06">
                <div className="match-detail-component-data-link5">
                  <img
                    alt={props.Rammuspng_alt1}
                    src={props.Rammuspng_src1}
                    className="match-detail-component-rammuspng1"
                  />
                  <div className="match-detail-component-divlevel06">
                    <span className="match-detail-component-text257">
                      <span>11</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data55">
                  <img
                    alt={props.SummonerSmitepng_alt1}
                    src={props.SummonerSmitepng_src1}
                    className="match-detail-component-summoner-smitepng1"
                  />
                  <img
                    alt={props.SummonerFlashpng_alt4}
                    src={props.SummonerFlashpng_src4}
                    className="match-detail-component-summoner-flashpng5"
                  />
                </div>
                <div className="match-detail-component-data56">
                  <div className="match-detail-component-div42">
                    <img
                      alt={props.IMAGE8439png_alt}
                      src={props.IMAGE8439png_src}
                      className="match-detail-component-image8439png"
                    />
                  </div>
                  <img
                    alt={props.IMAGE8000png_alt}
                    src={props.IMAGE8000png_src}
                    className="match-detail-component-image8000png"
                  />
                </div>
                <div className="match-detail-component-data57">
                  <span className="match-detail-component-text259">
                    <span>봉봉 청포도</span>
                  </span>
                  <span className="match-detail-component-text261">
                    <span>Level 167</span>
                  </span>
                </div>
                <div className="match-detail-component-data58">
                  <div className="match-detail-component-divscore06">
                    <span className="match-detail-component-text263">
                      <span>4.9</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divrank06">
                    <div className="match-detail-component-divcss1bias8j5">
                      <span className="match-detail-component-text265">
                        <span>6th</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data59">
                  <div className="match-detail-component-divkda08">
                    <span className="match-detail-component-text267">
                      <span>4/6/7 (55%)</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divcss6nxjyb4">
                    <span className="match-detail-component-text269">
                      <span>1.83:1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data60">
                  <div className="match-detail-component-div43">
                    <span className="match-detail-component-text271">
                      <span>11,183</span>
                    </span>
                    <div className="match-detail-component-divprogress06">
                      <img
                        alt={props.divfill_alt10}
                        src={props.divfill_src10}
                        className="match-detail-component-divfill12"
                      />
                    </div>
                  </div>
                  <div className="match-detail-component-div44">
                    <span className="match-detail-component-text273">
                      <span>20,786</span>
                    </span>
                    <div className="match-detail-component-divprogresstaken06">
                      <img
                        alt={props.divfill_alt11}
                        src={props.divfill_src11}
                        className="match-detail-component-divfill13"
                      />
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data61">
                  <span className="match-detail-component-text275">
                    {props.text11}
                  </span>
                  <div className="match-detail-component-div45">
                    <span className="match-detail-component-text276">
                      <span>2 / 1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data62">
                  <span className="match-detail-component-text278">
                    <span>92</span>
                  </span>
                  <span className="match-detail-component-text280">
                    <span>3.8/m</span>
                  </span>
                </div>
                <div className="match-detail-component-data63">
                  <img
                    alt={props.IMAGE2055png_alt}
                    src={props.IMAGE2055png_src}
                    className="match-detail-component-image2055png"
                  />
                  <img
                    alt={props.divnoitem_alt5}
                    src={props.divnoitem_src5}
                    className="match-detail-component-divnoitem5"
                  />
                  <img
                    alt={props.divnoitem_alt6}
                    src={props.divnoitem_src6}
                    className="match-detail-component-divnoitem6"
                  />
                  <img
                    alt={props.IMAGE6665png_alt}
                    src={props.IMAGE6665png_src}
                    className="match-detail-component-image6665png"
                  />
                  <img
                    alt={props.IMAGE3075png_alt}
                    src={props.IMAGE3075png_src}
                    className="match-detail-component-image3075png"
                  />
                  <img
                    alt={props.IMAGE3047png_alt1}
                    src={props.IMAGE3047png_src1}
                    className="match-detail-component-image3047png1"
                  />
                  <img
                    alt={props.IMAGE3364png_alt3}
                    src={props.IMAGE3364png_src3}
                    className="match-detail-component-image3364png3"
                  />
                </div>
              </div>
              <div className="match-detail-component-row07">
                <div className="match-detail-component-data-link6">
                  <img
                    alt={props.Dianapng_alt1}
                    src={props.Dianapng_src1}
                    className="match-detail-component-dianapng1"
                  />
                  <div className="match-detail-component-divlevel07">
                    <span className="match-detail-component-text282">
                      <span>13</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data64">
                  <img
                    alt={props.SummonerDotpng_alt2}
                    src={props.SummonerDotpng_src2}
                    className="match-detail-component-summoner-dotpng2"
                  />
                  <img
                    alt={props.SummonerFlashpng_alt5}
                    src={props.SummonerFlashpng_src5}
                    className="match-detail-component-summoner-flashpng6"
                  />
                </div>
                <div className="match-detail-component-data65">
                  <div className="match-detail-component-div46">
                    <img
                      alt={props.IMAGE8112png_alt1}
                      src={props.IMAGE8112png_src1}
                      className="match-detail-component-image8112png2"
                    />
                  </div>
                  <img
                    alt={props.IMAGE8200png_alt1}
                    src={props.IMAGE8200png_src1}
                    className="match-detail-component-image8200png2"
                  />
                </div>
                <div className="match-detail-component-data66">
                  <span className="match-detail-component-text284">
                    <span>내가 탑갈게요</span>
                  </span>
                  <span className="match-detail-component-text286">
                    <span>Level 188</span>
                  </span>
                </div>
                <div className="match-detail-component-data67">
                  <div className="match-detail-component-divscore07">
                    <span className="match-detail-component-text288">
                      <span>4.6</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divrank07">
                    <div className="match-detail-component-divcss1bias8j6">
                      <span className="match-detail-component-text290">
                        <span>7th</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data68">
                  <div className="match-detail-component-divkda09">
                    <span className="match-detail-component-text292">
                      <span>6/4/2 (40%)</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divcss6nxjyb5">
                    <span className="match-detail-component-text294">
                      <span>2.00:1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data69">
                  <div className="match-detail-component-div47">
                    <span className="match-detail-component-text296">
                      <span>10,417</span>
                    </span>
                    <div className="match-detail-component-divprogress07">
                      <img
                        alt={props.divfill_alt12}
                        src={props.divfill_src12}
                        className="match-detail-component-divfill14"
                      />
                    </div>
                  </div>
                  <div className="match-detail-component-div48">
                    <span className="match-detail-component-text298">
                      <span>13,021</span>
                    </span>
                    <div className="match-detail-component-divprogresstaken07">
                      <img
                        alt={props.divfill_alt13}
                        src={props.divfill_src13}
                        className="match-detail-component-divfill15"
                      />
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data70">
                  <span className="match-detail-component-text300">
                    {props.text12}
                  </span>
                  <div className="match-detail-component-div49">
                    <span className="match-detail-component-text301">
                      <span>4 / 1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data71">
                  <span className="match-detail-component-text303">
                    <span>90</span>
                  </span>
                  <span className="match-detail-component-text305">
                    <span>3.7/m</span>
                  </span>
                </div>
                <div className="match-detail-component-data72">
                  <img
                    alt={props.IMAGE3152png_alt1}
                    src={props.IMAGE3152png_src1}
                    className="match-detail-component-image3152png1"
                  />
                  <img
                    alt={props.IMAGE2031png_alt1}
                    src={props.IMAGE2031png_src1}
                    className="match-detail-component-image2031png1"
                  />
                  <img
                    alt={props.IMAGE1058png_alt1}
                    src={props.IMAGE1058png_src1}
                    className="match-detail-component-image1058png1"
                  />
                  <img
                    alt={props.IMAGE3020png_alt2}
                    src={props.IMAGE3020png_src2}
                    className="match-detail-component-image3020png3"
                  />
                  <img
                    alt={props.divnoitem_alt7}
                    src={props.divnoitem_src7}
                    className="match-detail-component-divnoitem7"
                  />
                  <img
                    alt={props.IMAGE3145png_alt1}
                    src={props.IMAGE3145png_src1}
                    className="match-detail-component-image3145png1"
                  />
                  <img
                    alt={props.IMAGE3364png_alt4}
                    src={props.IMAGE3364png_src4}
                    className="match-detail-component-image3364png4"
                  />
                </div>
              </div>
              <div className="match-detail-component-row08">
                <div className="match-detail-component-data-link7">
                  <img
                    alt={props.Ashepng_alt1}
                    src={props.Ashepng_src1}
                    className="match-detail-component-ashepng1"
                  />
                  <div className="match-detail-component-divlevel08">
                    <span className="match-detail-component-text307">
                      <span>13</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data73">
                  <img
                    alt={props.SummonerBoostpng_alt2}
                    src={props.SummonerBoostpng_src2}
                    className="match-detail-component-summoner-boostpng2"
                  />
                  <img
                    alt={props.SummonerFlashpng_alt6}
                    src={props.SummonerFlashpng_src6}
                    className="match-detail-component-summoner-flashpng7"
                  />
                </div>
                <div className="match-detail-component-data74">
                  <div className="match-detail-component-div50">
                    <img
                      alt={props.IMAGE8008png_alt2}
                      src={props.IMAGE8008png_src2}
                      className="match-detail-component-image8008png2"
                    />
                  </div>
                  <img
                    alt={props.IMAGE8300png_alt}
                    src={props.IMAGE8300png_src}
                    className="match-detail-component-image8300png"
                  />
                </div>
                <div className="match-detail-component-data75">
                  <span className="match-detail-component-text309">
                    <span>국방부장관조선경</span>
                  </span>
                  <span className="match-detail-component-text311">
                    <span>Level 149</span>
                  </span>
                </div>
                <div className="match-detail-component-data76">
                  <div className="match-detail-component-divscore08">
                    <span className="match-detail-component-text313">
                      <span>6.2</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divrank08">
                    <div className="match-detail-component-divcssae23we">
                      <span className="match-detail-component-text315">
                        <span>ACE</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data77">
                  <div className="match-detail-component-divkda10">
                    <span className="match-detail-component-text317">
                      <span>9/5/3 (60%)</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divcss6nxjyb6">
                    <span className="match-detail-component-text319">
                      <span>2.40:1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data78">
                  <div className="match-detail-component-div51">
                    <span className="match-detail-component-text321">
                      <span>15,826</span>
                    </span>
                    <div className="match-detail-component-divprogress08">
                      <img
                        alt={props.divfill_alt14}
                        src={props.divfill_src14}
                        className="match-detail-component-divfill16"
                      />
                    </div>
                  </div>
                  <div className="match-detail-component-div52">
                    <span className="match-detail-component-text323">
                      <span>13,454</span>
                    </span>
                    <div className="match-detail-component-divprogresstaken08">
                      <img
                        alt={props.divfill_alt15}
                        src={props.divfill_src15}
                        className="match-detail-component-divfill17"
                      />
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data79">
                  <span className="match-detail-component-text325">
                    {props.text13}
                  </span>
                  <div className="match-detail-component-div53">
                    <span className="match-detail-component-text326">
                      <span>9 / 3</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data80">
                  <span className="match-detail-component-text328">
                    <span>229</span>
                  </span>
                  <span className="match-detail-component-text330">
                    <span>9.5/m</span>
                  </span>
                </div>
                <div className="match-detail-component-data81">
                  <img
                    alt={props.divnoitem_alt8}
                    src={props.divnoitem_src8}
                    className="match-detail-component-divnoitem8"
                  />
                  <img
                    alt={props.IMAGE2055png_alt1}
                    src={props.IMAGE2055png_src1}
                    className="match-detail-component-image2055png1"
                  />
                  <img
                    alt={props.IMAGE3085png_alt}
                    src={props.IMAGE3085png_src}
                    className="match-detail-component-image3085png"
                  />
                  <img
                    alt={props.IMAGE3078png_alt}
                    src={props.IMAGE3078png_src}
                    className="match-detail-component-image3078png"
                  />
                  <img
                    alt={props.IMAGE6672png_alt1}
                    src={props.IMAGE6672png_src1}
                    className="match-detail-component-image6672png1"
                  />
                  <img
                    alt={props.IMAGE3006png_alt2}
                    src={props.IMAGE3006png_src2}
                    className="match-detail-component-image3006png2"
                  />
                  <img
                    alt={props.IMAGE3363png_alt1}
                    src={props.IMAGE3363png_src1}
                    className="match-detail-component-image3363png1"
                  />
                </div>
              </div>
              <div className="match-detail-component-row09">
                <div className="match-detail-component-data-link8">
                  <img
                    alt={props.Lulupng_alt1}
                    src={props.Lulupng_src1}
                    className="match-detail-component-lulupng1"
                  />
                  <div className="match-detail-component-divlevel09">
                    <span className="match-detail-component-text332">
                      <span>11</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data82">
                  <img
                    alt={props.SummonerExhaustpng_alt}
                    src={props.SummonerExhaustpng_src}
                    className="match-detail-component-summoner-exhaustpng"
                  />
                  <img
                    alt={props.SummonerFlashpng_alt7}
                    src={props.SummonerFlashpng_src7}
                    className="match-detail-component-summoner-flashpng8"
                  />
                </div>
                <div className="match-detail-component-data83">
                  <div className="match-detail-component-div54">
                    <img
                      alt={props.IMAGE8214png_alt}
                      src={props.IMAGE8214png_src}
                      className="match-detail-component-image8214png"
                    />
                  </div>
                  <img
                    alt={props.IMAGE8400png_alt3}
                    src={props.IMAGE8400png_src3}
                    className="match-detail-component-image8400png3"
                  />
                </div>
                <div className="match-detail-component-data84">
                  <span className="match-detail-component-text334">
                    <span>기승이개못해</span>
                  </span>
                  <span className="match-detail-component-text336">
                    <span>Level 66</span>
                  </span>
                </div>
                <div className="match-detail-component-data85">
                  <div className="match-detail-component-divscore09">
                    <span className="match-detail-component-text338">
                      <span>4.5</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divrank09">
                    <div className="match-detail-component-divcss1bias8j7">
                      <span className="match-detail-component-text340">
                        <span>8th</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data86">
                  <div className="match-detail-component-divkda11">
                    <span className="match-detail-component-text342">
                      <span>0/8/13 (65%)</span>
                    </span>
                  </div>
                  <div className="match-detail-component-divcss6nxjyb7">
                    <span className="match-detail-component-text344">
                      <span>1.63:1</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data87">
                  <div className="match-detail-component-div55">
                    <span className="match-detail-component-text346">
                      <span>6,553</span>
                    </span>
                    <div className="match-detail-component-divprogress09">
                      <img
                        alt={props.divfill_alt16}
                        src={props.divfill_src16}
                        className="match-detail-component-divfill18"
                      />
                    </div>
                  </div>
                  <div className="match-detail-component-div56">
                    <span className="match-detail-component-text348">
                      <span>13,070</span>
                    </span>
                    <div className="match-detail-component-divprogresstaken09">
                      <img
                        alt={props.divfill_alt17}
                        src={props.divfill_src17}
                        className="match-detail-component-divfill19"
                      />
                    </div>
                  </div>
                </div>
                <div className="match-detail-component-data88">
                  <span className="match-detail-component-text350">
                    {props.text14}
                  </span>
                  <div className="match-detail-component-div57">
                    <span className="match-detail-component-text351">
                      <span>25 / 7</span>
                    </span>
                  </div>
                </div>
                <div className="match-detail-component-data89">
                  <span className="match-detail-component-text353">
                    <span>10</span>
                  </span>
                  <span className="match-detail-component-text355">
                    <span>0.4/m</span>
                  </span>
                </div>
                <div className="match-detail-component-data90">
                  <img
                    alt={props.IMAGE3853png_alt}
                    src={props.IMAGE3853png_src}
                    className="match-detail-component-image3853png"
                  />
                  <img
                    alt={props.IMAGE2065png_alt}
                    src={props.IMAGE2065png_src}
                    className="match-detail-component-image2065png"
                  />
                  <img
                    alt={props.IMAGE2055png_alt2}
                    src={props.IMAGE2055png_src2}
                    className="match-detail-component-image2055png2"
                  />
                  <img
                    alt={props.IMAGE3012png_alt}
                    src={props.IMAGE3012png_src}
                    className="match-detail-component-image3012png"
                  />
                  <img
                    alt={props.IMAGE3114png_alt}
                    src={props.IMAGE3114png_src}
                    className="match-detail-component-image3114png"
                  />
                  <img
                    alt={props.IMAGE3158png_alt}
                    src={props.IMAGE3158png_src}
                    className="match-detail-component-image3158png"
                  />
                  <img
                    alt={props.IMAGE3364png_alt5}
                    src={props.IMAGE3364png_src5}
                    className="match-detail-component-image3364png5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="match-detail-component-divcss1p3j8nt">
          <div className="match-detail-component-input">
            <div className="match-detail-component-div58">
              <span className="match-detail-component-text357">
                <span>
                  https://www.op.gg/summoners/kr/%EA%B9%80%EC%84%9D%EA%B7%A0/matches/5nutt6p720QcC6ZAH6XbTTwN5dJncGVpuOXOqmKjSCc%3D/1691309788000
                </span>
              </span>
            </div>
          </div>
          <button className="match-detail-component-button1">
            <span className="match-detail-component-text359">
              <span>Copy Link</span>
            </span>
          </button>
          <img
            alt={props.iconlinksvg_alt}
            src={props.iconlinksvg_src}
            className="match-detail-component-iconlinksvg"
          />
        </div>
      </div>
      <div className="match-detail-component-divcss1r57q1t">
        <span className="match-detail-component-text361">
          <span>OP.GG</span>
        </span>
      </div>
    </div>
  )
}

MatchDetailComponent.defaultProps = {
  IMAGE8437png_alt: 'IMAGE8437png1844',
  divnoitem_alt5: 'divnoitem1848',
  IMAGE8008png_src: '/external/image8008png1844-6hdur-200h.png',
  IMAGE8008png_src1: '/external/image8008png1846-zan-200h.png',
  divlose_alt1: 'divlose1847',
  divfill_alt17: 'divfill1849',
  IMAGE3111png_alt: 'IMAGE3111png1846',
  divfill_alt14: 'divfill1849',
  IMAGE3860png_alt: 'IMAGE3860png1846',
  Akalipng_src: '/external/akalipng1843-widk-200h.png',
  divnoitem_alt3: 'divnoitem1846',
  divfill_src18: '/external/divfill1845-mn04-200h.png',
  IMAGE8010png_src: '/external/image8010png1847-a2mh-200h.png',
  IMAGE1038png_src1: '/external/image1038png1846-2ltn-200h.png',
  text8: '4',
  IMAGE3020png_alt2: 'IMAGE3020png1849',
  IMAGE1018png_alt: 'IMAGE1018png1846',
  divfill_src: '/external/divfill1844-hb19-200h.png',
  IMAGE2065png_src: '/external/image2065png1850-dh3-200h.png',
  IMAGE3089png_src1: '/external/image3089png1843-fp6e-200h.png',
  iconbaronsvg_src: '/external/iconbaronsvg1846-h3da.svg',
  IMAGE3020png_src1: '/external/image3020png1848-h2k-200h.png',
  IMAGE3084png_alt: 'IMAGE3084png1844',
  SummonerBoostpng_alt1: 'SummonerBoostpng1845',
  IMAGE8000png_alt: 'IMAGE8000png1848',
  text15: '1',
  IMAGE1052png_alt1: 'IMAGE1052png1843',
  IMAGE3363png_alt1: 'IMAGE3363png1849',
  divfill_src12: '/external/divfill1848-86hs-200h.png',
  Zeripng_alt1: 'Zeripng1845',
  IMAGE1052png_alt: 'IMAGE1052png1845',
  pseudo_alt: 'pseudo1843',
  Ahripng_src1: '/external/ahripng1842-jb64-200h.png',
  IMAGE3068png_src: '/external/image3068png1844-ey58-200h.png',
  divnoitem_alt4: 'divnoitem1846',
  IMAGE3190png_src: '/external/image3190png1846-p9kl-200h.png',
  IMAGE1053png_src: '/external/image1053png1846-6se-200h.png',
  text13: '3',
  MasterYipng_alt: 'MasterYipng1843',
  Ahripng_src: '/external/ahripng1843-ack5-200h.png',
  IMAGE4645png_alt1: 'IMAGE4645png1843',
  divfill_alt: 'divfill1844',
  SummonerFlashpng_alt8: 'SummonerFlashpng1843',
  Zeripng_alt: 'Zeripng1843',
  IMAGE3050png_alt: 'IMAGE3050png1846',
  IMAGE8200png_alt1: 'IMAGE8200png1848',
  IMAGE6656png_alt1: 'IMAGE6656png1843',
  divfill_alt1: 'divfill1844',
  SummonerFlashpng_alt1: 'SummonerFlashpng1845',
  IMAGE1054png_alt: 'IMAGE1054png1844',
  text11: '2',
  divnoitem_src6: '/external/divnoitem1848-w1fe-200h.png',
  IMAGE1028png_alt: 'IMAGE1028png1844',
  IMAGE2055png_alt2: 'IMAGE2055png1850',
  divfill_alt8: 'divfill1847',
  IMAGE1053png_alt: 'IMAGE1053png1846',
  IMAGE6665png_src: '/external/image6665png1848-2fh7-200h.png',
  IMAGE4645png_src1: '/external/image4645png1843-f4ag-200h.png',
  Leonapng_alt: 'Leonapng1843',
  SummonerFlashpng_src4: '/external/summonerflashpng1848-tcnp-200h.png',
  divfill_alt12: 'divfill1848',
  divnoitem_src5: '/external/divnoitem1848-l6tl-200h.png',
  IMAGE8000png_src: '/external/image8000png1848-zyob-200h.png',
  SummonerFlashpng_alt2: 'SummonerFlashpng1846',
  IMAGE8008png_alt: 'IMAGE8008png1844',
  Item_src: '/external/item1843-kpff-200h.png',
  IMAGE3078png_alt: 'IMAGE3078png1849',
  IMAGE3111png_src: '/external/image3111png1846-aorb-200h.png',
  IMAGE3020png_src3: '/external/image3020png1843-h8c-200h.png',
  text10: '0',
  icontowersvg_alt: 'icontowersvg1847',
  IMAGE3012png_src: '/external/image3012png1850-ezht-200h.png',
  IMAGE1018png_src: '/external/image1018png1846-2dru-200h.png',
  IMAGE3340png_alt: 'IMAGE3340png1843',
  IMAGE3152png_alt: 'IMAGE3152png1848',
  Dianapng_alt1: 'Dianapng1848',
  SummonerBoostpng_src1: '/external/summonerboostpng1845-7u1-200h.png',
  IMAGE6656png_src1: '/external/image6656png1843-btb-200h.png',
  IMAGE8100png_src1: '/external/image8100png1844-40er-200h.png',
  SummonerSmitepng_src1: '/external/summonersmitepng1848-kemp-200h.png',
  IMAGE2055png_alt1: 'IMAGE2055png1849',
  divfill_alt5: 'divfill1846',
  IMAGE3364png_alt3: 'IMAGE3364png1848',
  SummonerSmitepng_alt: 'SummonerSmitepng1844',
  Rammuspng_src1: '/external/rammuspng1848-ckc7-200h.png',
  IMAGE8112png_src2: '/external/image8112png1843-nsw5-200h.png',
  Zeripng_src: '/external/zeripng1843-6g2k-200h.png',
  IMAGE3363png_alt: 'IMAGE3363png1846',
  IMAGE1054png_src1: '/external/image1054png1848-bdu-200h.png',
  IMAGE1058png_alt: 'IMAGE1058png1848',
  IMAGE8439png_alt: 'IMAGE8439png1848',
  icondragonsvg_src: '/external/icondragonsvg1847-o6o.svg',
  Ashepng_src: '/external/ashepng1843-zwc-200h.png',
  IMAGE3340png_src: '/external/image3340png1843-dyon-200h.png',
  IMAGE8400png_src2: '/external/image8400png1847-stc6-200h.png',
  IMAGE3364png_src3: '/external/image3364png1848-73zj-200h.png',
  divwin_alt: 'divwin1847',
  IMAGE3074png_alt: 'IMAGE3074png1845',
  SummonerFlashpng_alt3: 'SummonerFlashpng1847',
  SummonerFlashpng_src1: '/external/summonerflashpng1845-gcvld-200h.png',
  divfill_src5: '/external/divfill1846-m3gf-200h.png',
  IMAGE3047png_src: '/external/image3047png1844-dyu-200h.png',
  IMAGE6675png_src: '/external/image6675png1846-0peo-200h.png',
  Lulupng_src: '/external/lulupng1843-o4tr-200h.png',
  IMAGE3363png_src1: '/external/image3363png1849-35p-200h.png',
  IMAGE8200png_alt2: 'IMAGE8200png1843',
  SummonerFlashpng_alt5: 'SummonerFlashpng1848',
  IMAGE3158png_alt: 'IMAGE3158png1850',
  Shenpng_alt: 'Shenpng1843',
  divfill_alt16: 'divfill1849',
  Zeripng_src1: '/external/zeripng1845-o2t-200h.png',
  IMAGE3020png_src: '/external/image3020png1845-5959-200h.png',
  IMAGE8010png_alt: 'IMAGE8010png1847',
  SummonerSmitepng_alt1: 'SummonerSmitepng1848',
  divlose_src1: '/external/divlose1847-90rv-200h.png',
  text12: '2',
  Shenpng_src1: '/external/shenpng1844-5dnl-200h.png',
  Ahripng_alt: 'Ahripng1843',
  SummonerTeleportpng_src: '/external/summonerteleportpng1844-8a7u-200h.png',
  divfill_alt3: 'divfill1845',
  text9: '4',
  divfill_src2: '/external/divfill1845-qcad-200h.png',
  SummonerTeleportpng_alt2: 'SummonerTeleportpng1847',
  divfill_alt19: 'divfill1845',
  SummonerTeleportpng_src1: '/external/summonerteleportpng1845-f55p-200h.png',
  IMAGE8400png_alt1: 'IMAGE8400png1846',
  icondragonsvg_alt: 'icondragonsvg1847',
  IMAGE3006png_alt2: 'IMAGE3006png1849',
  icondragonrsvg_src: '/external/icondragonrsvg1847-jxbu.svg',
  SummonerFlashpng_alt: 'SummonerFlashpng1845',
  IMAGE3158png_src: '/external/image3158png1850-39ea-200h.png',
  divfill_alt2: 'divfill1845',
  IMAGE3152png_alt1: 'IMAGE3152png1849',
  divfill_alt13: 'divfill1848',
  IMAGE3075png_src: '/external/image3075png1848-y0gg-200h.png',
  icontowerrsvg_alt: 'icontowerrsvg1847',
  IMAGE3145png_alt1: 'IMAGE3145png1849',
  IMAGE3006png_src: '/external/image3006png1845-lbst-200h.png',
  IMAGE3089png_alt1: 'IMAGE3089png1843',
  SummonerFlashpng_src5: '/external/summonerflashpng1848-djb-200h.png',
  Leonapng_alt1: 'Leonapng1846',
  IMAGE2065png_alt: 'IMAGE2065png1850',
  Ashepng_alt1: 'Ashepng1849',
  IMAGE8200png_src2: '/external/image8200png1843-tabc-200h.png',
  SummonerTeleportpng_src3: '/external/summonerteleportpng1843-s8zc-200h.png',
  IMAGE8400png_src1: '/external/image8400png1846-shs4-200h.png',
  IMAGE2031png_alt: 'IMAGE2031png1848',
  IMAGE2031png_src: '/external/image2031png1848-ggjt-200h.png',
  IMAGE8100png_src: '/external/image8100png1844-abjh-200h.png',
  IMAGE3364png_src5: '/external/image3364png1850-sv5k-200h.png',
  SummonerBoostpng_alt: 'SummonerBoostpng1844',
  IMAGE1058png_src1: '/external/image1058png1849-97g-200h.png',
  IMAGE3853png_alt: 'IMAGE3853png1850',
  divwin_alt1: 'divwin1847',
  IMAGE8100png_alt1: 'IMAGE8100png1844',
  icontowersvg_src: '/external/icontowersvg1847-lrvq.svg',
  SummonerTeleportpng_src2: '/external/summonerteleportpng1847-87jp-200h.png',
  IMAGE3084png_src: '/external/image3084png1844-u87g-200h.png',
  IMAGE8351png_src: '/external/image8351png1846-yuag-200h.png',
  divfill_src3: '/external/divfill1845-9ss-200h.png',
  IMAGE1054png_alt1: 'IMAGE1054png1848',
  IMAGE8214png_src: '/external/image8214png1849-e1id-200h.png',
  divfill_src14: '/external/divfill1849-hk9u-200h.png',
  text4: '0',
  MasterYipng_src: '/external/masteryipng1843-ch6-200h.png',
  IMAGE3006png_alt: 'IMAGE3006png1845',
  SummonerBoostpng_alt2: 'SummonerBoostpng1849',
  text: '1',
  IMAGE8400png_src: '/external/image8400png1846-ta3e-200h.png',
  IMAGE3152png_src1: '/external/image3152png1849-stde-200h.png',
  IMAGE3006png_alt1: 'IMAGE3006png1846',
  IMAGE8200png_src: '/external/image8200png1845-42pk-200h.png',
  iconlinksvg_alt: 'iconlinksvg1850',
  IMAGE8112png_alt: 'IMAGE8112png1845',
  text5: '1',
  IMAGE8400png_alt3: 'IMAGE8400png1849',
  SummonerFlashpng_src8: '/external/summonerflashpng1843-fkn-200h.png',
  Shenpng_src: '/external/shenpng1843-74y-200h.png',
  IMAGE3364png_alt: 'IMAGE3364png1844',
  icontowerrsvg_src: '/external/icontowerrsvg1847-jvcd.svg',
  IMAGE3020png_alt: 'IMAGE3020png1845',
  IMAGE2055png_src: '/external/image2055png1848-4pcp-200h.png',
  divnoitem_alt: 'divnoitem1845',
  divfill_src15: '/external/divfill1849-auq4j-200h.png',
  IMAGE3085png_src: '/external/image3085png1849-eqz-200h.png',
  IMAGE6672png_alt1: 'IMAGE6672png1849',
  IMAGE1038png_alt1: 'IMAGE1038png1846',
  IMAGE3340png_src1: '/external/image3340png1845-5fi9-200h.png',
  IMAGE1054png_src: '/external/image1054png1844-mf2b-200h.png',
  divlose_src: '/external/divlose1847-31un-200h.png',
  IMAGE3012png_alt: 'IMAGE3012png1850',
  IMAGE3364png_alt5: 'IMAGE3364png1850',
  SummonerFlashpng_src2: '/external/summonerflashpng1846-0nd4-200h.png',
  IMAGE3089png_src: '/external/image3089png1845-80r-200h.png',
  IMAGE3340png_src2: '/external/image3340png1848-xibk-200h.png',
  IMAGE3006png_src2: '/external/image3006png1849-paga-200h.png',
  SummonerExhaustpng_src: '/external/summonerexhaustpng1849-e4x-200h.png',
  IMAGE3364png_src: '/external/image3364png1844-59xk-200h.png',
  divfill_src9: '/external/divfill1847-yvaht-200h.png',
  IMAGE8400png_alt2: 'IMAGE8400png1847',
  divfill_alt15: 'divfill1849',
  IMAGE3145png_alt: 'IMAGE3145png1848',
  SummonerFlashpng_alt6: 'SummonerFlashpng1849',
  Dianapng_src1: '/external/dianapng1848-s9iz-200h.png',
  IMAGE6656png_src: '/external/image6656png1845-r9dl-200h.png',
  IMAGE8300png_src: '/external/image8300png1849-n90e-200h.png',
  divwin_src1: '/external/divwin1847-sw5s-200h.png',
  IMAGE2031png_src1: '/external/image2031png1849-ow2r-200h.png',
  Ahripng_alt1: 'Ahripng1842',
  IMAGE1052png_src1: '/external/image1052png1843-vx9-200h.png',
  divfill_src8: '/external/divfill1847-2gkf-200h.png',
  IMAGE8112png_alt2: 'IMAGE8112png1843',
  IMAGE6665png_alt: 'IMAGE6665png1848',
  IMAGE2055png_src2: '/external/image2055png1850-za0k-200h.png',
  divnoitem_alt8: 'divnoitem1849',
  IMAGE3114png_src: '/external/image3114png1850-xnwo-200h.png',
  IMAGE3020png_alt1: 'IMAGE3020png1848',
  divfill_alt10: 'divfill1848',
  IMAGE3082png_alt: 'IMAGE3082png1844',
  divfill_src6: '/external/divfill1846-qmojtb-200h.png',
  IMAGE3860png_src: '/external/image3860png1846-efs3-200h.png',
  divbar_src: '/external/divbar1842-ftpl-200h.png',
  IMAGE3047png_alt: 'IMAGE3047png1844',
  divnoitem_alt6: 'divnoitem1848',
  Rammuspng_src: '/external/rammuspng1843-k4re-200h.png',
  IMAGE3364png_alt2: 'IMAGE3364png1846',
  icondragonrsvg_alt: 'icondragonrsvg1847',
  Ashepng_src1: '/external/ashepng1849-5to-200h.png',
  SummonerDotpng_src: '/external/summonerdotpng1844-i4iq-200h.png',
  IMAGE3050png_src: '/external/image3050png1846-nima-200h.png',
  IMAGE3114png_alt: 'IMAGE3114png1850',
  Leonapng_src: '/external/leonapng1843-h3ld-200h.png',
  IMAGE3047png_src1: '/external/image3047png1848-379o-200h.png',
  IMAGE4645png_alt: 'IMAGE4645png1845',
  IMAGE1058png_src: '/external/image1058png1848-9asv-200h.png',
  iconbaronrsvg_alt: 'iconbaronrsvg1847',
  IMAGE3364png_src4: '/external/image3364png1849-m77-200h.png',
  IMAGE3074png_src: '/external/image3074png1845-z0bg-200h.png',
  IMAGE4645png_src: '/external/image4645png1845-o7lb-200h.png',
  IMAGE3020png_alt3: 'IMAGE3020png1843',
  IMAGE3152png_src: '/external/image3152png1848-qxf8-200h.png',
  IMAGE8439png_src: '/external/image8439png1848-6r1g-200h.png',
  Item_alt: 'Item1843',
  divfill_src4: '/external/divfill1846-qsc-200h.png',
  Rammuspng_alt1: 'Rammuspng1848',
  divnoitem_src7: '/external/divnoitem1849-2pre-200h.png',
  IMAGE1038png_alt: 'IMAGE1038png1845',
  IMAGE8200png_alt: 'IMAGE8200png1845',
  IMAGE3085png_alt: 'IMAGE3085png1849',
  MasterYipng_alt1: 'MasterYipng1844',
  IMAGE1028png_src: '/external/image1028png1844-l1yi-200h.png',
  IMAGE8112png_alt1: 'IMAGE8112png1848',
  SummonerDotpng_src2: '/external/summonerdotpng1848-sta-200h.png',
  Rammuspng_alt: 'Rammuspng1843',
  divfill_alt7: 'divfill1846',
  IMAGE3047png_alt1: 'IMAGE3047png1848',
  text2: '6',
  SummonerDotpng_alt: 'SummonerDotpng1844',
  SummonerFlashpng_src3: '/external/summonerflashpng1847-f78d-200h.png',
  IMAGE3089png_alt: 'IMAGE3089png1845',
  divfill_src11: '/external/divfill1848-eok-200h.png',
  IMAGE6672png_src: '/external/image6672png1845-khhe-200h.png',
  divfill_src10: '/external/divfill1848-lrx-200h.png',
  IMAGE8100png_alt: 'IMAGE8100png1844',
  divfill_src17: '/external/divfill1849-85q7-200h.png',
  IMAGE8112png_src: '/external/image8112png1845-r1iv-200h.png',
  divfill_alt9: 'divfill1847',
  IMAGE3853png_src: '/external/image3853png1850-2fqe-200h.png',
  IMAGE3020png_src2: '/external/image3020png1849-od8-200h.png',
  divfill_src19: '/external/divfill1845-dgf-200h.png',
  IMAGE3078png_src: '/external/image3078png1849-pmz-200h.png',
  pseudo_src: '/external/pseudo1843-ox3i-200w.png',
  divfill_src7: '/external/divfill1846-meih-200h.png',
  text14: '6',
  SummonerDotpng_alt2: 'SummonerDotpng1848',
  Akalipng_src1: '/external/akalipng1847-14lo-200h.png',
  divnoitem_src2: '/external/divnoitem1845-wyzr-200h.png',
  IMAGE6672png_alt: 'IMAGE6672png1845',
  IMAGE8112png_src1: '/external/image8112png1848-29tq-200h.png',
  IMAGE6672png_src1: '/external/image6672png1849-m62m-200h.png',
  IMAGE8008png_src2: '/external/image8008png1849-n3ab-200h.png',
  IMAGE3075png_alt: 'IMAGE3075png1848',
  IMAGE3364png_alt4: 'IMAGE3364png1849',
  SummonerBoostpng_src: '/external/summonerboostpng1844-2h-200h.png',
  SummonerFlashpng_src6: '/external/summonerflashpng1849-89w-200h.png',
  Ashepng_alt: 'Ashepng1843',
  divfill_src13: '/external/divfill1848-nqd8-200h.png',
  divfill_alt4: 'divfill1846',
  Leonapng_src1: '/external/leonapng1846-db14-200h.png',
  IMAGE3363png_src: '/external/image3363png1846-fgjq-200h.png',
  divnoitem_src8: '/external/divnoitem1849-9xcb-200h.png',
  IMAGE1052png_src: '/external/image1052png1845-r5yg-200h.png',
  MasterYipng_src1: '/external/masteryipng1844-1nek-200h.png',
  IMAGE8200png_src1: '/external/image8200png1848-6phr-200h.png',
  Akalipng_alt: 'Akalipng1843',
  divlose_alt: 'divlose1847',
  IMAGE8400png_alt: 'IMAGE8400png1846',
  IMAGE3364png_src2: '/external/image3364png1846-jhth-200h.png',
  SummonerDotpng_alt1: 'SummonerDotpng1846',
  divnoitem_alt1: 'divnoitem1845',
  SummonerTeleportpng_alt3: 'SummonerTeleportpng1843',
  IMAGE3087png_src: '/external/image3087png1846-6bjp-200h.png',
  IMAGE1058png_alt1: 'IMAGE1058png1849',
  divbar_alt: 'divbar1842',
  text6: '1',
  divwin_src: '/external/divwin1847-7088-200h.png',
  IMAGE8437png_src: '/external/image8437png1844-6ij-200h.png',
  text7: '1',
  IMAGE3340png_alt2: 'IMAGE3340png1848',
  Dianapng_src: '/external/dianapng1843-gdnh-200h.png',
  divfill_alt11: 'divfill1848',
  Ahripng_src2: '/external/ahripng1845-rl6-200h.png',
  IMAGE2055png_alt: 'IMAGE2055png1848',
  divfill_alt6: 'divfill1846',
  Shenpng_alt1: 'Shenpng1844',
  text1: '2',
  IMAGE3087png_alt: 'IMAGE3087png1846',
  SummonerDotpng_src1: '/external/summonerdotpng1846-p258-200h.png',
  IMAGE2031png_alt1: 'IMAGE2031png1849',
  iconlinksvg_src: '/external/iconlinksvg1850-g5pu.svg',
  IMAGE3006png_src1: '/external/image3006png1846-qm1q-200h.png',
  IMAGE6656png_alt: 'IMAGE6656png1845',
  divnoitem_src: '/external/divnoitem1845-qptj-200h.png',
  divnoitem_alt7: 'divnoitem1849',
  SummonerTeleportpng_alt1: 'SummonerTeleportpng1845',
  SummonerFlashpng_src7: '/external/summonerflashpng1849-xmpl-200h.png',
  divnoitem_alt2: 'divnoitem1845',
  SummonerExhaustpng_alt: 'SummonerExhaustpng1849',
  divnoitem_src1: '/external/divnoitem1845-s6kq-200h.png',
  IMAGE3082png_src: '/external/image3082png1844-oslp-200h.png',
  SummonerFlashpng_alt7: 'SummonerFlashpng1849',
  iconbaronsvg_alt: 'iconbaronsvg1846',
  Lulupng_src1: '/external/lulupng1849-3affc-200h.png',
  IMAGE2055png_src1: '/external/image2055png1849-368p-200h.png',
  divfill_src1: '/external/divfill1844-cbc-200h.png',
  IMAGE8400png_src3: '/external/image8400png1849-nza-200h.png',
  text3: '0',
  IMAGE8008png_alt2: 'IMAGE8008png1849',
  IMAGE8008png_alt1: 'IMAGE8008png1846',
  IMAGE3145png_src1: '/external/image3145png1849-pre-200h.png',
  divnoitem_src4: '/external/divnoitem1846-10fu-200h.png',
  SummonerSmitepng_src: '/external/summonersmitepng1844-glde-200h.png',
  SummonerTeleportpng_alt: 'SummonerTeleportpng1844',
  SummonerFlashpng_src: '/external/summonerflashpng1845-8y5n-200h.png',
  IMAGE8214png_alt: 'IMAGE8214png1849',
  IMAGE8300png_alt: 'IMAGE8300png1849',
  IMAGE1038png_src: '/external/image1038png1845-3uq-200h.png',
  IMAGE3068png_alt: 'IMAGE3068png1844',
  divfill_src16: '/external/divfill1849-c5-200h.png',
  IMAGE3364png_src1: '/external/image3364png1845-yklt-200h.png',
  divnoitem_src3: '/external/divnoitem1846-ogo-200h.png',
  Ahripng_alt2: 'Ahripng1845',
  IMAGE3190png_alt: 'IMAGE3190png1846',
  Lulupng_alt1: 'Lulupng1849',
  IMAGE3145png_src: '/external/image3145png1848-qww4-200h.png',
  IMAGE6675png_alt: 'IMAGE6675png1846',
  Dianapng_alt: 'Dianapng1843',
  iconbaronrsvg_src: '/external/iconbaronrsvg1847-4ha5.svg',
  SummonerFlashpng_alt4: 'SummonerFlashpng1848',
  IMAGE3364png_alt1: 'IMAGE3364png1845',
  Lulupng_alt: 'Lulupng1843',
  IMAGE3340png_alt1: 'IMAGE3340png1845',
  IMAGE8351png_alt: 'IMAGE8351png1846',
  Akalipng_alt1: 'Akalipng1847',
  SummonerBoostpng_src2: '/external/summonerboostpng1849-te1-200h.png',
  divfill_alt18: 'divfill1845',
}

MatchDetailComponent.propTypes = {
  IMAGE8437png_alt: PropTypes.string,
  divnoitem_alt5: PropTypes.string,
  IMAGE8008png_src: PropTypes.string,
  IMAGE8008png_src1: PropTypes.string,
  divlose_alt1: PropTypes.string,
  divfill_alt17: PropTypes.string,
  IMAGE3111png_alt: PropTypes.string,
  divfill_alt14: PropTypes.string,
  IMAGE3860png_alt: PropTypes.string,
  Akalipng_src: PropTypes.string,
  divnoitem_alt3: PropTypes.string,
  divfill_src18: PropTypes.string,
  IMAGE8010png_src: PropTypes.string,
  IMAGE1038png_src1: PropTypes.string,
  text8: PropTypes.string,
  IMAGE3020png_alt2: PropTypes.string,
  IMAGE1018png_alt: PropTypes.string,
  divfill_src: PropTypes.string,
  IMAGE2065png_src: PropTypes.string,
  IMAGE3089png_src1: PropTypes.string,
  iconbaronsvg_src: PropTypes.string,
  IMAGE3020png_src1: PropTypes.string,
  IMAGE3084png_alt: PropTypes.string,
  SummonerBoostpng_alt1: PropTypes.string,
  IMAGE8000png_alt: PropTypes.string,
  text15: PropTypes.string,
  IMAGE1052png_alt1: PropTypes.string,
  IMAGE3363png_alt1: PropTypes.string,
  divfill_src12: PropTypes.string,
  Zeripng_alt1: PropTypes.string,
  IMAGE1052png_alt: PropTypes.string,
  pseudo_alt: PropTypes.string,
  Ahripng_src1: PropTypes.string,
  IMAGE3068png_src: PropTypes.string,
  divnoitem_alt4: PropTypes.string,
  IMAGE3190png_src: PropTypes.string,
  IMAGE1053png_src: PropTypes.string,
  text13: PropTypes.string,
  MasterYipng_alt: PropTypes.string,
  Ahripng_src: PropTypes.string,
  IMAGE4645png_alt1: PropTypes.string,
  divfill_alt: PropTypes.string,
  SummonerFlashpng_alt8: PropTypes.string,
  Zeripng_alt: PropTypes.string,
  IMAGE3050png_alt: PropTypes.string,
  IMAGE8200png_alt1: PropTypes.string,
  IMAGE6656png_alt1: PropTypes.string,
  divfill_alt1: PropTypes.string,
  SummonerFlashpng_alt1: PropTypes.string,
  IMAGE1054png_alt: PropTypes.string,
  text11: PropTypes.string,
  divnoitem_src6: PropTypes.string,
  IMAGE1028png_alt: PropTypes.string,
  IMAGE2055png_alt2: PropTypes.string,
  divfill_alt8: PropTypes.string,
  IMAGE1053png_alt: PropTypes.string,
  IMAGE6665png_src: PropTypes.string,
  IMAGE4645png_src1: PropTypes.string,
  Leonapng_alt: PropTypes.string,
  SummonerFlashpng_src4: PropTypes.string,
  divfill_alt12: PropTypes.string,
  divnoitem_src5: PropTypes.string,
  IMAGE8000png_src: PropTypes.string,
  SummonerFlashpng_alt2: PropTypes.string,
  IMAGE8008png_alt: PropTypes.string,
  Item_src: PropTypes.string,
  IMAGE3078png_alt: PropTypes.string,
  IMAGE3111png_src: PropTypes.string,
  IMAGE3020png_src3: PropTypes.string,
  text10: PropTypes.string,
  icontowersvg_alt: PropTypes.string,
  IMAGE3012png_src: PropTypes.string,
  IMAGE1018png_src: PropTypes.string,
  IMAGE3340png_alt: PropTypes.string,
  IMAGE3152png_alt: PropTypes.string,
  Dianapng_alt1: PropTypes.string,
  SummonerBoostpng_src1: PropTypes.string,
  IMAGE6656png_src1: PropTypes.string,
  IMAGE8100png_src1: PropTypes.string,
  SummonerSmitepng_src1: PropTypes.string,
  IMAGE2055png_alt1: PropTypes.string,
  divfill_alt5: PropTypes.string,
  IMAGE3364png_alt3: PropTypes.string,
  SummonerSmitepng_alt: PropTypes.string,
  Rammuspng_src1: PropTypes.string,
  IMAGE8112png_src2: PropTypes.string,
  Zeripng_src: PropTypes.string,
  IMAGE3363png_alt: PropTypes.string,
  IMAGE1054png_src1: PropTypes.string,
  IMAGE1058png_alt: PropTypes.string,
  IMAGE8439png_alt: PropTypes.string,
  icondragonsvg_src: PropTypes.string,
  Ashepng_src: PropTypes.string,
  IMAGE3340png_src: PropTypes.string,
  IMAGE8400png_src2: PropTypes.string,
  IMAGE3364png_src3: PropTypes.string,
  divwin_alt: PropTypes.string,
  IMAGE3074png_alt: PropTypes.string,
  SummonerFlashpng_alt3: PropTypes.string,
  SummonerFlashpng_src1: PropTypes.string,
  divfill_src5: PropTypes.string,
  IMAGE3047png_src: PropTypes.string,
  IMAGE6675png_src: PropTypes.string,
  Lulupng_src: PropTypes.string,
  IMAGE3363png_src1: PropTypes.string,
  IMAGE8200png_alt2: PropTypes.string,
  SummonerFlashpng_alt5: PropTypes.string,
  IMAGE3158png_alt: PropTypes.string,
  Shenpng_alt: PropTypes.string,
  divfill_alt16: PropTypes.string,
  Zeripng_src1: PropTypes.string,
  IMAGE3020png_src: PropTypes.string,
  IMAGE8010png_alt: PropTypes.string,
  SummonerSmitepng_alt1: PropTypes.string,
  divlose_src1: PropTypes.string,
  text12: PropTypes.string,
  Shenpng_src1: PropTypes.string,
  Ahripng_alt: PropTypes.string,
  SummonerTeleportpng_src: PropTypes.string,
  divfill_alt3: PropTypes.string,
  text9: PropTypes.string,
  divfill_src2: PropTypes.string,
  SummonerTeleportpng_alt2: PropTypes.string,
  divfill_alt19: PropTypes.string,
  SummonerTeleportpng_src1: PropTypes.string,
  IMAGE8400png_alt1: PropTypes.string,
  icondragonsvg_alt: PropTypes.string,
  IMAGE3006png_alt2: PropTypes.string,
  icondragonrsvg_src: PropTypes.string,
  SummonerFlashpng_alt: PropTypes.string,
  IMAGE3158png_src: PropTypes.string,
  divfill_alt2: PropTypes.string,
  IMAGE3152png_alt1: PropTypes.string,
  divfill_alt13: PropTypes.string,
  IMAGE3075png_src: PropTypes.string,
  icontowerrsvg_alt: PropTypes.string,
  IMAGE3145png_alt1: PropTypes.string,
  IMAGE3006png_src: PropTypes.string,
  IMAGE3089png_alt1: PropTypes.string,
  SummonerFlashpng_src5: PropTypes.string,
  Leonapng_alt1: PropTypes.string,
  IMAGE2065png_alt: PropTypes.string,
  Ashepng_alt1: PropTypes.string,
  IMAGE8200png_src2: PropTypes.string,
  SummonerTeleportpng_src3: PropTypes.string,
  IMAGE8400png_src1: PropTypes.string,
  IMAGE2031png_alt: PropTypes.string,
  IMAGE2031png_src: PropTypes.string,
  IMAGE8100png_src: PropTypes.string,
  IMAGE3364png_src5: PropTypes.string,
  SummonerBoostpng_alt: PropTypes.string,
  IMAGE1058png_src1: PropTypes.string,
  IMAGE3853png_alt: PropTypes.string,
  divwin_alt1: PropTypes.string,
  IMAGE8100png_alt1: PropTypes.string,
  icontowersvg_src: PropTypes.string,
  SummonerTeleportpng_src2: PropTypes.string,
  IMAGE3084png_src: PropTypes.string,
  IMAGE8351png_src: PropTypes.string,
  divfill_src3: PropTypes.string,
  IMAGE1054png_alt1: PropTypes.string,
  IMAGE8214png_src: PropTypes.string,
  divfill_src14: PropTypes.string,
  text4: PropTypes.string,
  MasterYipng_src: PropTypes.string,
  IMAGE3006png_alt: PropTypes.string,
  SummonerBoostpng_alt2: PropTypes.string,
  text: PropTypes.string,
  IMAGE8400png_src: PropTypes.string,
  IMAGE3152png_src1: PropTypes.string,
  IMAGE3006png_alt1: PropTypes.string,
  IMAGE8200png_src: PropTypes.string,
  iconlinksvg_alt: PropTypes.string,
  IMAGE8112png_alt: PropTypes.string,
  text5: PropTypes.string,
  IMAGE8400png_alt3: PropTypes.string,
  SummonerFlashpng_src8: PropTypes.string,
  Shenpng_src: PropTypes.string,
  IMAGE3364png_alt: PropTypes.string,
  icontowerrsvg_src: PropTypes.string,
  IMAGE3020png_alt: PropTypes.string,
  IMAGE2055png_src: PropTypes.string,
  divnoitem_alt: PropTypes.string,
  divfill_src15: PropTypes.string,
  IMAGE3085png_src: PropTypes.string,
  IMAGE6672png_alt1: PropTypes.string,
  IMAGE1038png_alt1: PropTypes.string,
  IMAGE3340png_src1: PropTypes.string,
  IMAGE1054png_src: PropTypes.string,
  divlose_src: PropTypes.string,
  IMAGE3012png_alt: PropTypes.string,
  IMAGE3364png_alt5: PropTypes.string,
  SummonerFlashpng_src2: PropTypes.string,
  IMAGE3089png_src: PropTypes.string,
  IMAGE3340png_src2: PropTypes.string,
  IMAGE3006png_src2: PropTypes.string,
  SummonerExhaustpng_src: PropTypes.string,
  IMAGE3364png_src: PropTypes.string,
  divfill_src9: PropTypes.string,
  IMAGE8400png_alt2: PropTypes.string,
  divfill_alt15: PropTypes.string,
  IMAGE3145png_alt: PropTypes.string,
  SummonerFlashpng_alt6: PropTypes.string,
  Dianapng_src1: PropTypes.string,
  IMAGE6656png_src: PropTypes.string,
  IMAGE8300png_src: PropTypes.string,
  divwin_src1: PropTypes.string,
  IMAGE2031png_src1: PropTypes.string,
  Ahripng_alt1: PropTypes.string,
  IMAGE1052png_src1: PropTypes.string,
  divfill_src8: PropTypes.string,
  IMAGE8112png_alt2: PropTypes.string,
  IMAGE6665png_alt: PropTypes.string,
  IMAGE2055png_src2: PropTypes.string,
  divnoitem_alt8: PropTypes.string,
  IMAGE3114png_src: PropTypes.string,
  IMAGE3020png_alt1: PropTypes.string,
  divfill_alt10: PropTypes.string,
  IMAGE3082png_alt: PropTypes.string,
  divfill_src6: PropTypes.string,
  IMAGE3860png_src: PropTypes.string,
  divbar_src: PropTypes.string,
  IMAGE3047png_alt: PropTypes.string,
  divnoitem_alt6: PropTypes.string,
  Rammuspng_src: PropTypes.string,
  IMAGE3364png_alt2: PropTypes.string,
  icondragonrsvg_alt: PropTypes.string,
  Ashepng_src1: PropTypes.string,
  SummonerDotpng_src: PropTypes.string,
  IMAGE3050png_src: PropTypes.string,
  IMAGE3114png_alt: PropTypes.string,
  Leonapng_src: PropTypes.string,
  IMAGE3047png_src1: PropTypes.string,
  IMAGE4645png_alt: PropTypes.string,
  IMAGE1058png_src: PropTypes.string,
  iconbaronrsvg_alt: PropTypes.string,
  IMAGE3364png_src4: PropTypes.string,
  IMAGE3074png_src: PropTypes.string,
  IMAGE4645png_src: PropTypes.string,
  IMAGE3020png_alt3: PropTypes.string,
  IMAGE3152png_src: PropTypes.string,
  IMAGE8439png_src: PropTypes.string,
  Item_alt: PropTypes.string,
  divfill_src4: PropTypes.string,
  Rammuspng_alt1: PropTypes.string,
  divnoitem_src7: PropTypes.string,
  IMAGE1038png_alt: PropTypes.string,
  IMAGE8200png_alt: PropTypes.string,
  IMAGE3085png_alt: PropTypes.string,
  MasterYipng_alt1: PropTypes.string,
  IMAGE1028png_src: PropTypes.string,
  IMAGE8112png_alt1: PropTypes.string,
  SummonerDotpng_src2: PropTypes.string,
  Rammuspng_alt: PropTypes.string,
  divfill_alt7: PropTypes.string,
  IMAGE3047png_alt1: PropTypes.string,
  text2: PropTypes.string,
  SummonerDotpng_alt: PropTypes.string,
  SummonerFlashpng_src3: PropTypes.string,
  IMAGE3089png_alt: PropTypes.string,
  divfill_src11: PropTypes.string,
  IMAGE6672png_src: PropTypes.string,
  divfill_src10: PropTypes.string,
  IMAGE8100png_alt: PropTypes.string,
  divfill_src17: PropTypes.string,
  IMAGE8112png_src: PropTypes.string,
  divfill_alt9: PropTypes.string,
  IMAGE3853png_src: PropTypes.string,
  IMAGE3020png_src2: PropTypes.string,
  divfill_src19: PropTypes.string,
  IMAGE3078png_src: PropTypes.string,
  pseudo_src: PropTypes.string,
  divfill_src7: PropTypes.string,
  text14: PropTypes.string,
  SummonerDotpng_alt2: PropTypes.string,
  Akalipng_src1: PropTypes.string,
  divnoitem_src2: PropTypes.string,
  IMAGE6672png_alt: PropTypes.string,
  IMAGE8112png_src1: PropTypes.string,
  IMAGE6672png_src1: PropTypes.string,
  IMAGE8008png_src2: PropTypes.string,
  IMAGE3075png_alt: PropTypes.string,
  IMAGE3364png_alt4: PropTypes.string,
  SummonerBoostpng_src: PropTypes.string,
  SummonerFlashpng_src6: PropTypes.string,
  Ashepng_alt: PropTypes.string,
  divfill_src13: PropTypes.string,
  divfill_alt4: PropTypes.string,
  Leonapng_src1: PropTypes.string,
  IMAGE3363png_src: PropTypes.string,
  divnoitem_src8: PropTypes.string,
  IMAGE1052png_src: PropTypes.string,
  MasterYipng_src1: PropTypes.string,
  IMAGE8200png_src1: PropTypes.string,
  Akalipng_alt: PropTypes.string,
  divlose_alt: PropTypes.string,
  IMAGE8400png_alt: PropTypes.string,
  IMAGE3364png_src2: PropTypes.string,
  SummonerDotpng_alt1: PropTypes.string,
  divnoitem_alt1: PropTypes.string,
  SummonerTeleportpng_alt3: PropTypes.string,
  IMAGE3087png_src: PropTypes.string,
  IMAGE1058png_alt1: PropTypes.string,
  divbar_alt: PropTypes.string,
  text6: PropTypes.string,
  divwin_src: PropTypes.string,
  IMAGE8437png_src: PropTypes.string,
  text7: PropTypes.string,
  IMAGE3340png_alt2: PropTypes.string,
  Dianapng_src: PropTypes.string,
  divfill_alt11: PropTypes.string,
  Ahripng_src2: PropTypes.string,
  IMAGE2055png_alt: PropTypes.string,
  divfill_alt6: PropTypes.string,
  Shenpng_alt1: PropTypes.string,
  text1: PropTypes.string,
  IMAGE3087png_alt: PropTypes.string,
  SummonerDotpng_src1: PropTypes.string,
  IMAGE2031png_alt1: PropTypes.string,
  iconlinksvg_src: PropTypes.string,
  IMAGE3006png_src1: PropTypes.string,
  IMAGE6656png_alt: PropTypes.string,
  divnoitem_src: PropTypes.string,
  divnoitem_alt7: PropTypes.string,
  SummonerTeleportpng_alt1: PropTypes.string,
  SummonerFlashpng_src7: PropTypes.string,
  divnoitem_alt2: PropTypes.string,
  SummonerExhaustpng_alt: PropTypes.string,
  divnoitem_src1: PropTypes.string,
  IMAGE3082png_src: PropTypes.string,
  SummonerFlashpng_alt7: PropTypes.string,
  iconbaronsvg_alt: PropTypes.string,
  Lulupng_src1: PropTypes.string,
  IMAGE2055png_src1: PropTypes.string,
  divfill_src1: PropTypes.string,
  IMAGE8400png_src3: PropTypes.string,
  text3: PropTypes.string,
  IMAGE8008png_alt2: PropTypes.string,
  IMAGE8008png_alt1: PropTypes.string,
  IMAGE3145png_src1: PropTypes.string,
  divnoitem_src4: PropTypes.string,
  SummonerSmitepng_src: PropTypes.string,
  SummonerTeleportpng_alt: PropTypes.string,
  SummonerFlashpng_src: PropTypes.string,
  IMAGE8214png_alt: PropTypes.string,
  IMAGE8300png_alt: PropTypes.string,
  IMAGE1038png_src: PropTypes.string,
  IMAGE3068png_alt: PropTypes.string,
  divfill_src16: PropTypes.string,
  IMAGE3364png_src1: PropTypes.string,
  divnoitem_src3: PropTypes.string,
  Ahripng_alt2: PropTypes.string,
  IMAGE3190png_alt: PropTypes.string,
  Lulupng_alt1: PropTypes.string,
  IMAGE3145png_src: PropTypes.string,
  IMAGE6675png_alt: PropTypes.string,
  Dianapng_alt: PropTypes.string,
  iconbaronrsvg_src: PropTypes.string,
  SummonerFlashpng_alt4: PropTypes.string,
  IMAGE3364png_alt1: PropTypes.string,
  Lulupng_alt: PropTypes.string,
  IMAGE3340png_alt1: PropTypes.string,
  IMAGE8351png_alt: PropTypes.string,
  Akalipng_alt1: PropTypes.string,
  SummonerBoostpng_src2: PropTypes.string,
  divfill_alt18: PropTypes.string,
}

export default MatchDetailComponent
