import { useState } from 'react'
import { useLocation, useHistory } from "react-router-dom";
import Modal from 'react-modal';


import PropTypes from 'prop-types'

import '../styles/summoner-profile-component.css'

const SummonerProfileComponent = (props) => {
const [EvalmodalIsOpen, setEvalModalIsOpen] = useState(false);
const [GoodCommentModalIsOpen,setGoodCommentModalIsOpen] = useState(false);
const [BadCommentModalIsOpen,setBadCommentModalIsOpen] = useState(false);
let history = useHistory();
const location = useLocation();
const inputSummonerName = location.state.inputSummonerName;
console.log(inputSummonerName);

  const GoIngame = () => {
        history.push({pathname: `/match-ingame-page/${inputSummonerName}`, state:{inputSummonerName}});
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
                                      },
                                      content: {
                                        zIndex: 3,
                                      },
                            }}
                            >
                            <p>lorem ipsum</p>
                            <p>lorem ipsum</p>
                            <input  />
                            <p>lorem ipsum</p>
                            <p>lorem ipsum</p>

                            <button onClick={() => setEvalModalIsOpen(false)}>닫기</button>
                          </Modal>
                        </div>


                        <div>
                          <Modal
                            isOpen={GoodCommentModalIsOpen}
                            onRequestClose={() => setGoodCommentModalIsOpen(false)}
                            contentLabel="팝업 내용"
                            style={{
                                      overlay: {
                                        zIndex: 2,
                                      },
                                      content: {
                                        zIndex: 3,
                                      },
                            }}
                            >
                            <p>좋은평가</p>
                            <p>좋은평가</p>
                            <p>좋은평가</p>
                            <p>좋은평가</p>


                            <button onClick={() => setGoodCommentModalIsOpen(false)}>닫기</button>
                          </Modal>
                        </div>

                        <div>
                                                  <Modal
                                                    isOpen={BadCommentModalIsOpen}
                                                    onRequestClose={() => setBadCommentModalIsOpen(false)}
                                                    contentLabel="팝업 내용"
                                                    style={{
                                                              overlay: {
                                                                zIndex: 2,
                                                              },
                                                              content: {
                                                                zIndex: 3,
                                                              },
                                                    }}
                                                    >
                                                    <p>나쁜평가</p>
                                                    <p>나쁜평가</p>
                                                    <p>나쁜평가</p>
                                                    <p>나쁜평가</p>

                          <button onClick={() => setBadCommentModalIsOpen(false)}>닫기</button>
                        </Modal>
                  </div>
      <div className="summoner-profile-component-divheaderprofileinfo">
        <div className="summoner-profile-component-divprofileicon">
          <img
            alt={props.profileIcon5212jpg_alt}
            src={props.profileIcon5212jpg_src}
            className="summoner-profile-component-profile-icon5212jpg"

          />
          <div className="summoner-profile-component-summonerlevel">
            <span className="summoner-profile-component-text">
              <span className="">121</span>
            </span>
          </div>
        </div>
        <div className="summoner-profile-component-divinfo">
          <div className="summoner-profile-component-list">
            <div className="summoner-profile-component-item">
              <div className="summoner-profile-component-div">
                <span className="summoner-profile-component-text02">
                  <span className="summoner-profile-component-text03">
                    S2022
                  </span>
                  <span className=""> gold 1</span>
                </span>
              </div>
            </div>
            <div className="summoner-profile-component-item1">
              <div className="summoner-profile-component-div1">
                <span className="summoner-profile-component-text05">
                  <span className="summoner-profile-component-text06">
                    S2021
                  </span>
                  <span className=""> gold 1</span>
                </span>
              </div>
            </div>
          </div>
          <div className="summoner-profile-component-divname">
            <div className="summoner-profile-component-heading1">
              <span className="summoner-profile-component-text08">김석균</span>
            </div>
          </div>
          <button className="summoner-profile-component-button" onClick={() => setEvalModalIsOpen(true)}>
            <span className="summoner-profile-component-text09">평가하기</span>
          </button>
          <span className="summoner-profile-component-text10">
            Available in 85 Seconds.
          </span>
          <div className="summoner-profile-component-container">
            <img
              alt={props.pastedImage_alt4}
              src={props.pastedImage_src4}
              className="summoner-profile-component-pasted-image"
              onClick={() => setGoodCommentModalIsOpen(true)}
            />
            <img
              alt={props.pastedImage_alt34}
              src={props.pastedImage_src34}
              className="summoner-profile-component-pasted-image1"
              onClick={() => setBadCommentModalIsOpen(true)}
            />
          </div>
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
