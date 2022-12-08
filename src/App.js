import React, {useEffect, useState} from 'react';
import './App.scss';
import ArticleListItem from "./features/news/ArticleListItem";
import {useSelector} from "react-redux";
import {Logo} from "./icons/logo";
import ArticleListView from "./features/news/ArticleListView";

function App() {

  return (
    <div className="App">
        <div className={'header'}>
            <Logo/>
            <div className={'listTab'}>
                <div className={'selected'}>latest</div> | <div>starred</div>
            </div>
        </div>
        <ArticleListView/>

        {/*<button onClick={() => fetchNewsTest() }>Get News Data</button>*/}
        {/*<button onClick={() => fetchMaxItem()}>Get Max Item</button>*/}
        {/*<button onClick={() => fetchSpecificArticle(33901724)}>Specific</button>*/}
        {/*  {articleData && <ArticleListItem props={articleData} /> }*/}
    </div>
  );
}

export default App;
