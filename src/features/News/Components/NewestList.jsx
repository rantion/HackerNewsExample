import {useDispatch, useSelector} from "react-redux";
import {getFilteredNewsItems, NewsFilters } from "../newsSlice";
import ArticleListView from "./ArticleListView";
import {ARTICLE_LIMIT} from "../../../App";

const NewestList = () => {
    const newsItems = useSelector(state => getFilteredNewsItems(state,NewsFilters.Newest));

    return(
        <div className={'content'}>
        <ArticleListView newsItems={newsItems} limit={ARTICLE_LIMIT}/>
        </div>
    )
}
export default NewestList;