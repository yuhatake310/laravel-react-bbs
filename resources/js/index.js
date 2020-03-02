import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducer from './reducers';
import rootSaga from './sagas/rootSaga';
import BoardsIndex from './components/boards_index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
    diff: true,
    collapsed: true,
});

const middlewares = [];
if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
}
middlewares.push(sagaMiddleware);

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={BoardsIndex} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('boardsindex')
);