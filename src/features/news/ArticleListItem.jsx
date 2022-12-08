import {Filled} from "../../icons/star_filled";
import {Empty} from "../../icons/star_empty";
import {useEffect, useState} from "react";
import {fetchNewsItemById} from "../../redux/reducers/newsItems";


const ArticleListItem = (props) => {

    const [newsItem, setItem] = useState({});
    const articleNumber = props.articleNumber;

    const saved = false;

    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${props.id}.json?print=pretty`)
            .then(response => response.json())
            .then(data => {
                console.log("Use Effect", data);
                setItem(data)
            });
    }, []);

    useEffect(() => {
        console.log(`News Items Changed ${newsItem}`)
    }, [newsItem])

    const getBaseUrl = (data) => {
        const a = document.createElement('a');
        a.href = data;
        return a.hostname;
    }

    const savedStatus = saved ?
        <div className={'saveStatus'}><Filled/><span>saved</span></div> :
        <div className={'saveStatus'}><Empty/><span>save</span></div>;

    const baseUrl = getBaseUrl(newsItem.url);

    return (
        <div className={'articleListContainer'}>
            <div className={'articleNumber'}>{articleNumber}.</div>
            <div className={'articleListTitle'}>{newsItem.title}<span>({baseUrl})</span></div>
            <div className={'articleDetails'}>
                {newsItem.points} by {newsItem.by} {newsItem.time} | {newsItem.descendants} comments | {savedStatus}
            </div>
    </div>);
}
export default ArticleListItem;