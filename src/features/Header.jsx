import FilterTabs from "./FilterTabs";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getNightModeStatus, nightModeToggled} from "./NightMode/nightModeSlice";
import {Sun} from "../images/sun";
import {Moon} from "../images/moon";
import {DarkLogo} from "../images/darkLogo";
import {Logo} from "../images/logo";
import {Link} from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const nightMode = useSelector( getNightModeStatus);

    const modeLogo = nightMode ? <Sun/> : <Moon/>;
    const logo = nightMode ? <DarkLogo/> : <Logo/>;

    const toggleNightMode = () => {
        dispatch(nightModeToggled());
    }
    return (
        <div className={'header'}>
            <Link to="/">{logo}</Link>
            <FilterTabs class={'headerTabs'} highlighted={true}/>
            <div className={'filler'}/>
            <span onClick={() => toggleNightMode()}>{modeLogo}</span>
        </div>
    )
};
export default Header;