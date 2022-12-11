import FilterTabs from "./FilterTabs";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={'footer'}>
            <Link to={"/"} className={'footerLogo'}>Hacker News</Link>
            <FilterTabs class={'footerTabs'}/>
        </div>
    )
}
export default Footer;