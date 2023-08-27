import React from 'react'

import PropTypes from 'prop-types'

import '../../styles/not-playing-component.css'

const NotPlayingComponent = ({summonerName}) => {
  return (
    <div className="component-container">
      <div className="component-divcontentcontainermargin">
        <div className="component-divcssyt8a2w">
          <span className="component-text">{`'${summonerName}' 님은 게임중이 아닙니다 😰💦`}</span>
          <span className="component-text2">현재 게임중이라면 다시 시도해주세요.</span>
        </div>
      </div>
    </div>
  )
}

NotPlayingComponent.propTypes = {
  summonerName: PropTypes.string
}

export default NotPlayingComponent
