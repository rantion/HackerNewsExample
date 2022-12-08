import React, {useEffect, useState} from 'react';
import './App.scss';
import ArticleListItem from "./features/news/ArticleListItem";

function App() {

  const [articleData, setArticleData] = useState();

  const fetchNewsTest = () => {
    fetch('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty&orderBy="$priority"&limitToFirst=50')
        .then(response => response.json())
        .then(data => console.log(data))
  }

  const fetchMaxItem = () => {
      fetch('https://hacker-news.firebaseio.com/v0/maxitem.json')
          .then(response => response.json())
          .then(data => console.log(data))
  }

  const fetchSpecificArticle = (articleId) => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/33833836.json?print=pretty`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setArticleData(data)
        })
  }

  useEffect(() => {
      fetchSpecificArticle()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Test App

        <button onClick={() => fetchNewsTest() }>Get News Data</button>
        <button onClick={() => fetchMaxItem()}>Get Max Item</button>
        <button onClick={() => fetchSpecificArticle(33901724)}>Specific</button>
          {articleData && <ArticleListItem props={articleData} /> }
      </header>
    </div>
  );
}

export default App;
