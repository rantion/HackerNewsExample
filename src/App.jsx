import { Routes, Route, useLocation } from "react-router-dom";
import './app.scss';
import {useDispatch, useSelector} from "react-redux";
import {getNightModeStatus} from "./features/NightMode/nightModeSlice";

import classNames from "classnames";
import Header from "./Components/Header";
import StarredList from "./features/News/Components/StarredList";
import NewestList from "./features/News/Components/NewestList";
import {useEffect} from "react";
import {NewsFilters, newsItemFilterChange} from "./features/News/newsSlice";
import Error from "./Components/Error";
import Footer from "./Components/Footer";

export const ARTICLE_LIMIT = 12;

function App() {
    const nightMode = useSelector( getNightModeStatus);
    const dispatch = useDispatch();
    const location = useLocation();

    // changes the currentFilter based on the pathname
    useEffect(() => {
        if(location.pathname === '/latest'){
            dispatch(newsItemFilterChange(NewsFilters.Newest))
        } else if(location.pathname === '/starred'){
            dispatch(newsItemFilterChange(NewsFilters.Starred))
        }
    }, [location])

    return (
        <div className={classNames('App', {'darkMode' : nightMode })}>
            <Header/>
                <Routes>
                    <Route index element={<NewestList />} />
                    <Route path="/latest" element={<NewestList />} />
                    <Route path="/starred" element={<StarredList />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            <Footer/>
        </div>
    );
}

export default App;
