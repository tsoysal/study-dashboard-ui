import React, {Component} from "react";
import barIcon from "./icon-bar-chart.svg";
import homeIcon from "./icon-home.svg";
import pieChart from "./icon-pie-chart.svg";
import personIcon from "./icon-person.svg";

class NavMenu extends Component {
    render() {
        return (
            <div className="nav-container">
                <ul className="nav-list">
                    <li className="nav-list-item"><img src={homeIcon} alt="home icon" /></li>
                    <li className="nav-list-item"><img src={barIcon} alt="bar icon" /></li>
                    <li className="nav-list-item"><img src={pieChart} alt="pie chart icon" /></li>
                    <li className="nav-list-item"><img src={personIcon} alt="profile icon" /></li>
                </ul>
            </div>
        );
    }
}

export default NavMenu;