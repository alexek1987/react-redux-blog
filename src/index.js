import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import "./style.css";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import promiseMiddleware from "redux-promise";
import logger from "redux-logger";
import postsReducer from "./reducers/postsReducer";
import PostsIndex from "./containers/PostsIndex";
import PostsShow from "./containers/PostsShow";
import NewPost from "./containers/NewPost";

const reducers = combineReducers({
  posts: postsReducer,
});

const middlewares = applyMiddleware(promiseMiddleware, logger);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, {}, middlewares)}>
      <Router>
        <Switch>
          <Route path="/" exact component={PostsIndex} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:id" component={PostsShow} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
