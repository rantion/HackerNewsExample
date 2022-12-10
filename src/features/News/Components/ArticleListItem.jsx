import {Filled} from "../../../images/star_filled";
import {Empty} from "../../../images/star_empty";
import {useEffect, useState} from "react";
import { newsItemToggled, removeNewsItem} from "../newsSlice";
import {formatTime, getBaseUrl, getBaseUrlHostname} from "../helpers";
import {useDispatch, useSelector} from "react-redux";
import {getNightModeStatus} from "../../NightMode/nightModeSlice";
import spinner from "../../../images/loading.gif";


const ArticleListItem = (props) => {
    const [newsItem, setItem] = useState({});
    const articleNumber = props.articleNumber;
    const saved = props.item.saved;
    const dispatch = useDispatch();
    const nightMode = useSelector( getNightModeStatus);

    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${props.item.id}.json?print=pretty`)
            .then(response => response.json())
            .then(data => {
                setItem(data)
            });
    }, []);

    useEffect(() => {
        if(!isEmpty(newsItem)){
            if(!newsItem.url){
                dispatch(removeNewsItem(props.item.id))
            }
        }
    }, [newsItem]);

    const toggleSaved = () => {
        dispatch(newsItemToggled(props.item.id));
    }

    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

    const savedStatus = saved ?
        <div className={'saveStatus'} onClick={() => toggleSaved()}><Filled/><span>saved</span></div> :
        <div className={'saveStatus'} onClick={() => toggleSaved()}><Empty color={nightMode ? 'rgba(255, 255, 255, 0.5)' : 'black'}/><span>save</span></div>;

    const baseUrl = getBaseUrlHostname(newsItem.url ?? "");
    const articleNum = `${articleNumber}.`

    return (<>
        {isEmpty(newsItem) ?
            <img className={'spinnerSmall'} src={spinner} alt={"loading..."}/> :
            <div className={'articleListContainer'}>
            <div className={'articleNumber'}>{articleNum}</div>
            <div className={'articleListTitle'}><a className={'articleTitle'} href={newsItem.url} target="_blank">{newsItem.title}</a><a className={'baseUrl'} href={getBaseUrl(newsItem.url)} target="_blank">({baseUrl})</a></div>
            <div className={'articleDetails'}>
                <a className={'articleMeta'} href={newsItem.url} target="_blank">{newsItem.points} by {newsItem.by} {formatTime(newsItem.time)} ago | {newsItem.descendants} comments |</a> {savedStatus}
            </div>
    </div>}</>);
}
export default ArticleListItem;