const Article = (props) => {

    const article = props.props;
    console.log("article: "+ article);
    const text = article.text;
    console.log("text: " + article.text);
    console.log("fix:" + text.replace(/[^\x20-\x7E]/g, ''));
    return (<div>{text}</div>)
}
export default Article;