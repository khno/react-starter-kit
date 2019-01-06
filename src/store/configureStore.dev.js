import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { hashHistory } from "react-router-dom";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../reducers";

// const logger = createLogger();
const router = routerMiddleware(hashHistory);

const enhancer = compose(
    // applyMiddleware(thunk, logger, router),
    applyMiddleware(thunk, router),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept("../reducers", () => {
            const nextReducer = require("../reducers").default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
