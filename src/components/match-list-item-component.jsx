import PropTypes from 'prop-types'

import '../styles/match-list-item-component.css'

const MatchListItemComponent = (props) => {

  return (
    <div className={`match-list-item-component-item ${props.rootClassName} `}>
      <div className="match-list-item-component-divgamecontent">
        <div className="match-list-item-component-divgame">
          <div className="match-list-item-component-divtype">
            <span className="match-list-item-component-text">
              <span className="">Flex 5:5 Rank</span>
            </span>
          </div>
          <div className="match-list-item-component-div">
            <span className="match-list-item-component-text02">
              <span className="">11 days ago</span>
            </span>
          </div>
          <div className="match-list-item-component-divbarmargin">
            <img
              alt={props.divbar_alt}
              src={props.divbar_src}
              className="match-list-item-component-divbar"
            />
          </div>
          <div className="match-list-item-component-divresult">
            <span className="match-list-item-component-text04">
              <span className="">Victory</span>
            </span>
          </div>
          <div className="match-list-item-component-divlength">
            <span className="match-list-item-component-text06">
              <span className="">24m 10s</span>
            </span>
          </div>
        </div>
        <div className="match-list-item-component-divinfo">
          <div className="match-list-item-component-div1">
            <div className="match-list-item-component-divchampion">
              <div className="match-list-item-component-link">
                <img
                  alt={props.Ahripng_alt1}
                  src={props.Ahripng_src1}
                  className="match-list-item-component-ahripng"
                />
                <div className="match-list-item-component-spanchampionlevel">
                  <span className="match-list-item-component-text08">
                    <span className="">15</span>
                  </span>
                </div>
              </div>
              <div className="match-list-item-component-divspellsmargin">
                <div className="match-list-item-component-divspells">
                  <img
                    alt={props.SummonerTeleportpng_alt}
                    src={props.SummonerTeleportpng_src}
                    className="match-list-item-component-summoner-teleportpng"
                  />
                  <img
                    alt={props.SummonerFlashpng_alt}
                    src={props.SummonerFlashpng_src}
                    className="match-list-item-component-summoner-flashpng"
                  />
                </div>
              </div>
              <div className="match-list-item-component-divrunesmargin">
                <div className="match-list-item-component-divrunes">
                  <div className="match-list-item-component-divrune">
                    <img
                      alt={props.IMAGE8112png_alt}
                      src={props.IMAGE8112png_src}
                      className="match-list-item-component-image8112png"
                    />
                  </div>
                  <img
                    alt={props.IMAGE8200png_alt}
                    src={props.IMAGE8200png_src}
                    className="match-list-item-component-image8200png"
                  />
                </div>
              </div>
            </div>
            <div className="match-list-item-component-divkdamargin">
              <div className="match-list-item-component-divkda">
                <div className="match-list-item-component-divkda1">
                  <span className="match-list-item-component-text10">
                    <span className="match-list-item-component-text11">9</span>
                    <span className="match-list-item-component-text12">
                      {' '}
                      /
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="match-list-item-component-text13">2</span>
                    <span className="match-list-item-component-text14">
                      {' '}
                      / 8
                    </span>
                  </span>
                </div>
                <div className="match-list-item-component-divratio">
                  <span className="match-list-item-component-text15">
                    <span className="">8.50:1 KDA</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="match-list-item-component-divstats">
              <img
                alt={props.pseudo_alt}
                src={props.pseudo_src}
                className="match-list-item-component-pseudo"
              />
              <div className="match-list-item-component-div2">
                <span className="match-list-item-component-text17">
                  <span className="">P/Kill 65%</span>
                </span>
              </div>
              <span className="match-list-item-component-text19">
                <span className="">Control Ward 1</span>
              </span>
              <div className="match-list-item-component-div3">
                <span className="match-list-item-component-text21">
                  <span className="">CS 203 (8.4)</span>
                </span>
              </div>
              <div className="match-list-item-component-div4">
                <span className="match-list-item-component-text23">
                  <span className="">gold 1</span>
                </span>
              </div>
            </div>
          </div>
          <div className="match-list-item-component-div5">
            <div className="match-list-item-component-divitems">
              <div className="match-list-item-component-list">
                <div className="match-list-item-component-item01">
                  <img
                    alt={props.IMAGE3089png_alt}
                    src={props.IMAGE3089png_src}
                    className="match-list-item-component-image3089png"
                  />
                </div>
                <div className="match-list-item-component-itemmargin">
                  <div className="match-list-item-component-item02">
                    <img
                      alt={props.IMAGE3020png_alt}
                      src={props.IMAGE3020png_src}
                      className="match-list-item-component-image3020png"
                    />
                  </div>
                </div>
                <div className="match-list-item-component-itemmargin1">
                  <div className="match-list-item-component-item03">
                    <img
                      alt={props.IMAGE6656png_alt}
                      src={props.IMAGE6656png_src}
                      className="match-list-item-component-image6656png"
                    />
                  </div>
                </div>
                <div className="match-list-item-component-itemmargin2">
                  <div className="match-list-item-component-item04">
                    <img
                      alt={props.IMAGE4645png_alt}
                      src={props.IMAGE4645png_src}
                      className="match-list-item-component-image4645png"
                    />
                  </div>
                </div>
                <div className="match-list-item-component-itemmargin3">
                  <div className="match-list-item-component-item05">
                    <img
                      alt={props.IMAGE1052png_alt}
                      src={props.IMAGE1052png_src}
                      className="match-list-item-component-image1052png"
                    />
                  </div>
                </div>
                <div className="match-list-item-component-itemmargin4">
                  <img
                    alt={props.Item_alt}
                    src={props.Item_src}
                    className="match-list-item-component-item06"
                  />
                </div>
              </div>
              <div className="match-list-item-component-divward">
                <img
                  alt={props.IMAGE3340png_alt}
                  src={props.IMAGE3340png_src}
                  className="match-list-item-component-image3340png"
                />
              </div>
            </div>
            <button className="match-list-item-component-button">
              <div className="match-list-item-component-divbadge">
                <span className="match-list-item-component-text25">
                  <span className="">MVP</span>
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="match-list-item-component-divparticipants">
          <div className="match-list-item-component-list1">
            <div className="match-list-item-component-item07">
              <img
                alt={props.Akalipng_alt}
                src={props.Akalipng_src}
                className="match-list-item-component-akalipng"
              />
              <div className="match-list-item-component-link01">
                <span className="match-list-item-component-text27">
                  <span className="">Ieejunyeo…</span>
                </span>
              </div>
            </div>
            <div className="match-list-item-component-item08">
              <img
                alt={props.Rammuspng_alt}
                src={props.Rammuspng_src}
                className="match-list-item-component-rammuspng"
              />
              <div className="match-list-item-component-link02">
                <span className="match-list-item-component-text29">
                  <span className="">봉봉 청포…</span>
                </span>
              </div>
            </div>
            <div className="match-list-item-component-item09">
              <img
                alt={props.Dianapng_alt}
                src={props.Dianapng_src}
                className="match-list-item-component-dianapng"
              />
              <div className="match-list-item-component-link03">
                <span className="match-list-item-component-text31">
                  <span className="">내가 탑갈…</span>
                </span>
              </div>
            </div>
            <div className="match-list-item-component-item10">
              <img
                alt={props.Ashepng_alt}
                src={props.Ashepng_src}
                className="match-list-item-component-ashepng"
              />
              <div className="match-list-item-component-link04">
                <span className="match-list-item-component-text33">
                  <span className="">국방부장…</span>
                </span>
              </div>
            </div>
            <div className="match-list-item-component-item11">
              <img
                alt={props.Lulupng_alt}
                src={props.Lulupng_src}
                className="match-list-item-component-lulupng"
              />
              <div className="match-list-item-component-link05">
                <span className="match-list-item-component-text35">
                  <span className="">기승이개…</span>
                </span>
              </div>
            </div>
          </div>
          <div className="match-list-item-component-list2">
            <div className="match-list-item-component-item12">
              <img
                alt={props.Shenpng_alt}
                src={props.Shenpng_src}
                className="match-list-item-component-shenpng"
              />
              <div className="match-list-item-component-link06">
                <span className="match-list-item-component-text37">
                  <span className="">포션 안사…</span>
                </span>
              </div>
            </div>
            <div className="match-list-item-component-item13">
              <img
                alt={props.MasterYipng_alt}
                src={props.MasterYipng_src}
                className="match-list-item-component-master-yipng"
              />
              <div className="match-list-item-component-link07">
                <span className="match-list-item-component-text39">
                  <span className="">Aim On D…</span>
                </span>
              </div>
            </div>
            <div className="match-list-item-component-item14">
              <img
                alt={props.Ahripng_alt}
                src={props.Ahripng_src}
                className="match-list-item-component-ahripng1"
              />
              <div className="match-list-item-component-link08">
                <span className="match-list-item-component-text41">
                  <span className="">김석균</span>
                </span>
              </div>
            </div>
            <div className="match-list-item-component-item15">
              <img
                alt={props.Zeripng_alt}
                src={props.Zeripng_src}
                className="match-list-item-component-zeripng"
              />
              <div className="match-list-item-component-link09">
                <span className="match-list-item-component-text43">
                  <span className="">병 인 지</span>
                </span>
              </div>
            </div>
            <div className="match-list-item-component-item16">
              <img
                alt={props.Leonapng_alt}
                src={props.Leonapng_src}
                className="match-list-item-component-leonapng"
              />
              <div className="match-list-item-component-link10">
                <span className="match-list-item-component-text45">
                  <span className="">삼대오백…</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="match-list-item-component-divaction">
        <img
          alt={props.iconarrowdownbluesvg_alt}
          src={props.iconarrowdownbluesvg_src}
          className="match-list-item-component-iconarrowdownbluesvg"
        />
      </div>
    </div>
  )
}

MatchListItemComponent.defaultProps = {
  Lulupng_src: '/external/lulupng1815-rqf-200h.png',
  pseudo_src: '/external/pseudo1815-0bmi-200w.png',
  Akalipng_alt: 'Akalipng1815',
  Rammuspng_src: '/external/rammuspng1815-l8b8-200h.png',
  divbar_src: '/external/divbar1814-2v2d-200h.png',
  IMAGE8112png_alt: 'IMAGE8112png1814',
  Dianapng_alt: 'Dianapng1815',
  MasterYipng_src: '/external/masteryipng1815-titg-200h.png',
  IMAGE8200png_alt: 'IMAGE8200png1814',
  IMAGE8200png_src: '/external/image8200png1814-8567-200h.png',
  Item_alt: 'Item1815',
  Lulupng_alt: 'Lulupng1815',
  SummonerFlashpng_alt: 'SummonerFlashpng1814',
  Ashepng_src: '/external/ashepng1815-6h4j-200h.png',
  SummonerFlashpng_src: '/external/summonerflashpng1814-vlwt-200h.png',
  IMAGE3089png_alt: 'IMAGE3089png1815',
  IMAGE4645png_alt: 'IMAGE4645png1815',
  IMAGE4645png_src: '/external/image4645png1815-xkwb-200w.png',
  IMAGE1052png_src: '/external/image1052png1815-305-200w.png',
  Leonapng_src: '/external/leonapng1815-pwot-200h.png',
  Button_alt: 'Button1815',
  rootClassName: '',
  Akalipng_src: '/external/akalipng1815-6gtj-200h.png',
  iconarrowdownbluesvg_alt: 'iconarrowdownbluesvg1815',
  Zeripng_alt: 'Zeripng1815',
  IMAGE3020png_src: '/external/image3020png1815-r0mf-200w.png',
  IMAGE3340png_alt: 'IMAGE3340png1815',
  IMAGE6656png_src: '/external/image6656png1815-f5i-200w.png',
  Zeripng_src: '/external/zeripng1815-eiq6-200h.png',
  IMAGE3089png_src: '/external/image3089png1815-g3zk-200w.png',
  IMAGE3020png_alt: 'IMAGE3020png1815',
  pseudo_alt: 'pseudo1815',
  Dianapng_src: '/external/dianapng1815-v3-200h.png',
  Ahripng_alt: 'Ahripng1815',
  iconarrowdownbluesvg_src: '/external/iconarrowdownbluesvg1815-kc2y.svg',
  Ahripng_src: '/external/ahripng1815-yvqi-200h.png',
  SummonerTeleportpng_src: '/external/summonerteleportpng1814-pwxgu-200h.png',
  IMAGE3340png_src: '/external/image3340png1815-e2cb-200w.png',
  MasterYipng_alt: 'MasterYipng1815',
  Ahripng_src1: '/external/ahripng1814-5pqj-200h.png',
  Button_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/516873a1-7a34-44f4-b767-fc2486442178?org_if_sml=1224',
  Ahripng_alt1: 'Ahripng1814',
  IMAGE1052png_alt: 'IMAGE1052png1815',
  Rammuspng_alt: 'Rammuspng1815',
  Leonapng_alt: 'Leonapng1815',
  IMAGE6656png_alt: 'IMAGE6656png1815',
  divbar_alt: 'divbar1814',
  Ashepng_alt: 'Ashepng1815',
  IMAGE8112png_src: '/external/image8112png1814-w5e-200h.png',
  SummonerTeleportpng_alt: 'SummonerTeleportpng1814',
  Shenpng_alt: 'Shenpng1815',
  Shenpng_src: '/external/shenpng1815-g91a-200h.png',
  Item_src: '/external/item1815-79ob-200w.png',
}

MatchListItemComponent.propTypes = {
  Lulupng_src: PropTypes.string,
  pseudo_src: PropTypes.string,
  Akalipng_alt: PropTypes.string,
  Rammuspng_src: PropTypes.string,
  divbar_src: PropTypes.string,
  IMAGE8112png_alt: PropTypes.string,
  Dianapng_alt: PropTypes.string,
  MasterYipng_src: PropTypes.string,
  IMAGE8200png_alt: PropTypes.string,
  IMAGE8200png_src: PropTypes.string,
  Item_alt: PropTypes.string,
  Lulupng_alt: PropTypes.string,
  SummonerFlashpng_alt: PropTypes.string,
  Ashepng_src: PropTypes.string,
  SummonerFlashpng_src: PropTypes.string,
  IMAGE3089png_alt: PropTypes.string,
  IMAGE4645png_alt: PropTypes.string,
  IMAGE4645png_src: PropTypes.string,
  IMAGE1052png_src: PropTypes.string,
  Leonapng_src: PropTypes.string,
  Button_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  Akalipng_src: PropTypes.string,
  iconarrowdownbluesvg_alt: PropTypes.string,
  Zeripng_alt: PropTypes.string,
  IMAGE3020png_src: PropTypes.string,
  IMAGE3340png_alt: PropTypes.string,
  IMAGE6656png_src: PropTypes.string,
  Zeripng_src: PropTypes.string,
  IMAGE3089png_src: PropTypes.string,
  IMAGE3020png_alt: PropTypes.string,
  pseudo_alt: PropTypes.string,
  Dianapng_src: PropTypes.string,
  Ahripng_alt: PropTypes.string,
  iconarrowdownbluesvg_src: PropTypes.string,
  Ahripng_src: PropTypes.string,
  SummonerTeleportpng_src: PropTypes.string,
  IMAGE3340png_src: PropTypes.string,
  MasterYipng_alt: PropTypes.string,
  Ahripng_src1: PropTypes.string,
  Button_src: PropTypes.string,
  Ahripng_alt1: PropTypes.string,
  IMAGE1052png_alt: PropTypes.string,
  Rammuspng_alt: PropTypes.string,
  Leonapng_alt: PropTypes.string,
  IMAGE6656png_alt: PropTypes.string,
  divbar_alt: PropTypes.string,
  Ashepng_alt: PropTypes.string,
  IMAGE8112png_src: PropTypes.string,
  SummonerTeleportpng_alt: PropTypes.string,
  Shenpng_alt: PropTypes.string,
  Shenpng_src: PropTypes.string,
  Item_src: PropTypes.string,
}

export default MatchListItemComponent
