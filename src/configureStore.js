import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import throttle from "redux-throttle";
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const defaultWait = 300;
const defaultThrottleOption = { // https://lodash.com/docs#throttle
  leading: true,
  trailing: true
}

const throttleMiddleware = throttle(defaultWait, defaultThrottleOption);

export default function configureStore(preloadedState) {
  const middleware = [thunkMiddleware, throttleMiddleware];
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  )
}
