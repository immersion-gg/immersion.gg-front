import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types'

import MostChampionListItemComponent from './most-champion-list-item-component'
import '../styles/most-champion-list-component.css'

const MostChampionListComponent = () => {

let history = useHistory();

  const GoChampionPage = () => {
        history.push({pathname: `/champion-statistic-component`});
  };

  return (
    <div className="most-champion-list-component-most-champion-component">
      <div className="most-champion-list-component-list">
        <div className="most-champion-list-component-item">
          <span className="most-champion-list-component-text">
            <button onClick={GoChampionPage}>S2023 S2</button>
          </span>
        </div>
        <div className="most-champion-list-component-item1">
          <span className="most-champion-list-component-text2">
            <span>Ranked Solo</span>
          </span>
        </div>
        <div className="most-champion-list-component-item2">
          <span className="most-champion-list-component-text4">
            <span>Ranked Flex</span>
          </span>
        </div>
      </div>
      <div className="most-champion-list-component-div">
        <MostChampionListItemComponent rootClassName="most-champion-list-item-component-root-class-name3"></MostChampionListItemComponent>
        <MostChampionListItemComponent rootClassName="most-champion-list-item-component-root-class-name2"></MostChampionListItemComponent>
        <MostChampionListItemComponent></MostChampionListItemComponent>
        <MostChampionListItemComponent rootClassName="most-champion-list-item-component-root-class-name"></MostChampionListItemComponent>
        <MostChampionListItemComponent rootClassName="most-champion-list-item-component-root-class-name1"></MostChampionListItemComponent>
      </div>

    </div>
  )
}

MostChampionListComponent.defaultProps = {
  LinkNasuspng_alt: 'LinkNasuspng1811',
  LinkNasuspng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/4a2651ce-c9f7-46c9-a9f1-ad7f359e953e?org_if_sml=13071',
  iconarrowrightsvg_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/21a42e4f-70db-4f06-b16e-fd2864520aa5?org_if_sml=1195',
  LinkJhinpng_alt: 'LinkJhinpng1811',
  LinkAhripng_alt: 'LinkAhripng1811',
  LinkAhripng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/d082ad21-23c6-4462-b195-1090c689f46f?org_if_sml=12885',
  LinkAlistarpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/9a197963-93eb-4f57-99d3-5fa17b3bfa31?org_if_sml=12925',
  iconarrowrightsvg_alt: 'iconarrowrightsvg1812',
  LinkAlistarpng_alt: 'LinkAlistarpng1811',
  LinkRakanpng_alt: 'LinkRakanpng1811',
  LinkVipng_alt: 'LinkVipng1811',
  LinkJhinpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/bb205383-3afb-4bb2-a9a9-bba18441fc39?org_if_sml=12819',
  LinkVipng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/fee48d6c-8553-4028-a531-e6c3adbb200e?org_if_sml=12900',
  LinkRakanpng_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0ba68bfd-6a09-4105-9544-11a87d1ed900/22bbe7f2-946d-4ca3-9810-3b23a583ba14?org_if_sml=12898',
}

MostChampionListComponent.propTypes = {
  LinkNasuspng_alt: PropTypes.string,
  LinkNasuspng_src: PropTypes.string,
  iconarrowrightsvg_src: PropTypes.string,
  LinkJhinpng_alt: PropTypes.string,
  LinkAhripng_alt: PropTypes.string,
  LinkAhripng_src: PropTypes.string,
  LinkAlistarpng_src: PropTypes.string,
  iconarrowrightsvg_alt: PropTypes.string,
  LinkAlistarpng_alt: PropTypes.string,
  LinkRakanpng_alt: PropTypes.string,
  LinkVipng_alt: PropTypes.string,
  LinkJhinpng_src: PropTypes.string,
  LinkVipng_src: PropTypes.string,
  LinkRakanpng_src: PropTypes.string,
}

export default MostChampionListComponent
