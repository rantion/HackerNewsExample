import {useSelector} from "react-redux";
import {getNewsItems} from "../../redux/selectors";
import ArticleListItem from "./ArticleListItem";


const ArticleListView = () => {

    const newsItems = useSelector(getNewsItems);
    const loadingStatus = useSelector((state) => state.newsItems.status);

    console.log(newsItems);
    console.log(loadingStatus);

    return <div className={'listView'}>
        {newsItems && newsItems.map((itemId, index) => (
            <ArticleListItem id={itemId} key={index} articleNumber={index+1}/>
        ))
        }
    </div>
};
export default ArticleListView;