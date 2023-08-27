import PropTypes from "prop-types";

const IconSlotComponent = ({iconUrls, showsVertical=false, imageSize = "22px"}) => {
    const showsVerticalStyle = {
        'flexDirection' : 'column'
    };

    const imageSizeStyle = {
        'width': imageSize,
        'height': imageSize
    }

    return (
        <div className="match-list-item-component-list" style={showsVertical ? showsVerticalStyle : null}>
            {
                iconUrls.map((item, index) =>
                    <div key={index} className="match-list-item-component-item01">
                        <img
                            src={item}
                            className="match-list-item-component-image3089png"
                            style={imageSizeStyle}
                        />
                    </div>)
            }
        </div>
    )
}

IconSlotComponent.propTypes = {
    iconUrls: PropTypes.array,
    showsVertical: PropTypes.bool,
    imageSize: PropTypes.string
}

export default IconSlotComponent;