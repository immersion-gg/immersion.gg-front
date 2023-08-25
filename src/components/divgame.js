import React from 'react'

import PropTypes from 'prop-types'

import '../styles/divgame.css'

const Divgame = (props) => {
  return (
    <div className="divgame-divgame">
      <div className="divgame-divtype">
        <span className="divgame-text">
          <span>Flex 5:5 Rank</span>
        </span>
      </div>
      <div className="divgame-div">
        <span className="divgame-text2">
          <span>11 days ago</span>
        </span>
      </div>
      <div className="divgame-divbarmargin">
        <img
          alt={props.divbar_alt}
          src={props.divbar_src}
          className="divgame-divbar"
        />
      </div>
      <div className="divgame-divresult">
        <span className="divgame-text4">
          <span>Victory</span>
        </span>
      </div>
      <div className="divgame-divlength">
        <span className="divgame-text6">
          <span>24m 10s</span>
        </span>
      </div>
    </div>
  )
}

Divgame.defaultProps = {
  divbar_src: '/external/divbar1842-ftpl-200h.png',
  divbar_alt: 'divbar1842',
}

Divgame.propTypes = {
  divbar_src: PropTypes.string,
  divbar_alt: PropTypes.string,
}

export default Divgame
