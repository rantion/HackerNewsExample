import {useSelector} from "react-redux";
import {getNewsFilter, NewsFilters as NewsFilter} from "./News/newsSlice";
import classNames from "classnames";
import {Link} from "react-router-dom";

const FilterTabs = (props) => {
    const filter = useSelector( getNewsFilter);
    let  newSelected, starredSelected = false;

    if(props.highlighted){
        newSelected = filter === NewsFilter.Newest;
        starredSelected = filter === NewsFilter.Starred;
    }

    return(
        <div className={classNames('listTab', props.class)}>
            <Link to={'/latest'} className={classNames('tabItem', {'selected': newSelected })}>latest</Link> |
            <Link to={'/starred'} className={classNames('tabItem',{'selected': starredSelected })}>starred</Link>
        </div>)
}
export default FilterTabs;