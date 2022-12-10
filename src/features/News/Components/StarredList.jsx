import { useSelector} from "react-redux";
import {getFilteredNewsItems, NewsFilters, } from "../newsSlice";
import ArticleListView from "./ArticleListView";
import {ARTICLE_LIMIT} from "../../../App";

const StarredList = () => {
    const newsItems = useSelector(state => getFilteredNewsItems(state,NewsFilters.Starred));

    return(
        <div className={'content'}>
            {newsItems.length < 1 &&
                <div className={'largeFont'}>You haven't saved any stories yet 😢</div>
            }
            <ArticleListView newsItems={newsItems} limit={ARTICLE_LIMIT}/>
        </div>
    )
}
export default StarredList;