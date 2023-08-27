import {useHistory} from "react-router-dom";

const LogoComponent = () => {
    const history = useHistory();
    const GoHome = () => history.push({pathname: `/`});

    return (
        <div className="champion-statistic-component-nav">
            <div className="champion-statistic-component-divafn8215">
                <div className="champion-statistic-component-linkmargin">
                    <img
                        onClick={GoHome}
                        alt="logo"
                        src="/external/logo1v2.svg"
                        className="champion-statistic-component-link-svg"
                    />
                </div>
            </div>
        </div>
    )
}

export default LogoComponent;