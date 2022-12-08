import {Filled} from "../../icons/star_filled";
import {Empty} from "../../icons/star_empty";


const ArticleListItem = (props) => {
    const articleNumber = 1;
    const title = props.props.title;
    const points = props.props.points;
    const author = props.props.by;
    const time = props.props.time;
    const url = props.props.url;
    const comments = props.props.descendants;
    const saved = false;

    const getBaseUrl = (data) => {
        const a = document.createElement('a');
        a.href = data;
        return a.hostname;
    }

    const savedStatus = saved ?
        <div className={'saveStatus'}><Filled/><span>saved</span></div> :
        <div className={'saveStatus'}><Empty/><span>save</span></div>;

    const baseUrl = getBaseUrl(url);

    return (
        <div className={'articleListContainer'}>
            <div className={'articleNumber'}>{articleNumber}.</div>
            <div className={'articleListTitle'}>{title}<span>({baseUrl})</span></div>
            <div className={'articleDetails'}>
                {points} by {author} {time} | {comments} comments | {savedStatus}
            </div>
    </div>);
}
export default ArticleListItem;