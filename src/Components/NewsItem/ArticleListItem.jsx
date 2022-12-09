import {Filled} from "../../images/star_filled";
import {Empty} from "../../images/star_empty";
import {useEffect, useState} from "react";
import {fetchNewsItemById, newsItemToggled} from "./newsSlice";
import {formatTime, getBaseUrl} from "./helpers";
import {useDispatch} from "react-redux";


const ArticleListItem = (props) => {
    const [newsItem, setItem] = useState({});
    const articleNumber = props.articleNumber;
    const saved = props.item.saved;
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${props.item.id}.json?print=pretty`)
            .then(response => response.json())
            .then(data => {
                setItem(data)
            });
    }, []);

    const toggleSaved = () => {
        console.log("toggleSaved called");
        dispatch(newsItemToggled(props.item.id));
    }

    const savedStatus = saved ?
        <div className={'saveStatus'} onClick={() => toggleSaved()}><Filled/><span>saved</span></div> :
        <div className={'saveStatus'} onClick={() => toggleSaved()}><Empty/><span>save</span></div>;

    const baseUrl = getBaseUrl(newsItem.url);

    return (
        <div className={'articleListContainer'}>
            <div className={'articleNumber'}>{articleNumber}.</div>
            <div className={'articleListTitle'}>{newsItem.title}<span>({baseUrl})</span></div>
            <div className={'articleDetails'}>
                {newsItem.points} by {newsItem.by} {formatTime(newsItem.time)} ago | {newsItem.descendants} comments | {savedStatus}
            </div>
    </div>);
}
export default ArticleListItem;