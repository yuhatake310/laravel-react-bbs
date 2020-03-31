import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import reducer from "./reducers";
import rootSaga from "./sagas/rootSaga";
import BoardsIndex from "./components/boards_index";
import ThreadsShow from "./components/threads_show";
import ThreadsNew from "./components/threads_new";
import UsersShow from "./components/users_show";

const composeEnhancer =
    process.env.NODE_ENV === "production"
        ? compose
        : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
    diff: true,
    collapsed: true
});

const middlewares = [];
if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
}
middlewares.push(sagaMiddleware);

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/users/show" component={UsersShow} />
                    <Route path="/threads/new/:id" component={ThreadsNew} />
                    <Route path="/threads/:id" component={ThreadsShow} />
                    <Route exact path="/" component={BoardsIndex} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById("boardsindex")
);
