import React from 'react'

import PropTypes from 'prop-types'

import '../styles/most-champion-list-item-component.css'

const MostChampionListItemComponent = (props) => {
  return (
    <div
      className={`most-champion-list-item-component-divchampionbox ${props.rootClassName} `}
    >
      <img
        alt={props.LinkKaisapng_alt}
        src={props.LinkKaisapng_src}
        className="most-champion-list-item-component-link-kaisapng"
      />
      <div className="most-champion-list-item-component-divname">
        <span className="most-champion-list-item-component-text">
          <span className="">Kai&apos;Sa</span>
        </span>
      </div>
      <span className="most-champion-list-item-component-text02">
        <span className="">CS 186.5 (6.8)</span>
      </span>
      <span className="most-champion-list-item-component-text04">
        <span className="">6.5 / 9.5 / 6.0</span>
      </span>
      <span className="most-champion-list-item-component-text06">
        <span className="">1.32:1 KDA</span>
      </span>
      <div className="most-champion-list-item-component-divcount">
        <span className="most-champion-list-item-component-text08">
          <span className="">2 Played</span>
        </span>
      </div>
      <div className="most-champion-list-item-component-divcss1nuoroq">
        <span className="most-champion-list-item-component-text10">
          <span className="">50%</span>
        </span>
      </div>
    </div>
  )
}

MostChampionListItemComponent.defaultProps = {
  LinkKaisapng_alt: 'LinkKaisapng1811',
  rootClassName: '',
  LinkKaisapng_src: '/external/linkkaisapng1811-3194-200h.png',
}

MostChampionListItemComponent.propTypes = {
  LinkKaisapng_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  LinkKaisapng_src: PropTypes.string,
}

export default MostChampionListItemComponent
