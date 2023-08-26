import PropTypes from "prop-types";

const IconSlotComponent = ({iconUrls, showsVertical=false}) => {
    const showsVerticalStyle = {
        'flexDirection' : 'column'
    }

    return (
        <div className="match-list-item-component-list" style={showsVertical ? showsVerticalStyle : null}>
            {
                iconUrls.map((item, index) =>
                    <div key={index} className="match-list-item-component-item01">
                        <img src={item} className="match-list-item-component-image3089png"/>
                    </div>)
            }
        </div>
    )
}

IconSlotComponent.propTypes = {
    iconUrls: PropTypes.array,
    showsVertical: PropTypes.bool
}

export default IconSlotComponent;