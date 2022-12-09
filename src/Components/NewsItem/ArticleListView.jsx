import {useSelector} from "react-redux";
import {getNewsItems} from "./newsSlice";
import ArticleListItem from "./ArticleListItem";
import spinner from '../../images/loading.gif';


const ArticleListView = () => {

    const newsItems = useSelector(getNewsItems);
    const loadingStatus = useSelector((state) => state.newsItems.status);

    if (loadingStatus === 'loading') {
        return (
            <img className={'spinner'} src={spinner} alt={"loading..."}/>
        )
    }

    return <div className={'listView'}>
        {newsItems.length > 0 && newsItems.slice(0,12).map((item, index) => (
            <ArticleListItem item={item} key={index} articleNumber={index+1}/>
        ))
        }
    </div>
};
export default ArticleListView;