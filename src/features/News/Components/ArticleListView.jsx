import {useSelector} from "react-redux";
import ArticleListItem from "./ArticleListItem";
import spinner from '../../../images/loading.gif';
import {useState} from "react";

const ArticleListView = (props) => {
    const loadingStatus = useSelector((state) => state.newsItems.status);
    const newsItems = props.newsItems;
    const [articleLimit, setArticleLimit] = useState(props.limit);
    const [showMore, setShowMore] = useState(false);

    if (loadingStatus === 'loading') {
        return (
            <img className={'spinner'} src={spinner} alt={"loading..."}/>
        )
    }

    const showMoreClicked = () => {
        setShowMore(true);
        setArticleLimit(newsItems.length)
    }

    return <div className={'listView'}>
        {newsItems.length > 0 && newsItems.slice(0,articleLimit).map((item, index) => (
            <ArticleListItem item={item} key={index} articleNumber={index+1}/>
        ))
        }
        {(newsItems.length > articleLimit && !showMore) && <button className={'showMoreButton'} onClick={() => showMoreClicked()}>show more</button>}
    </div>
};
export default ArticleListView;