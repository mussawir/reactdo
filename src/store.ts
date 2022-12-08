import { createStore} from 'redux'
import {notesReducer} from './reducers/notesReducer'

export const store = createStore(notesReducer);
// const store = createStore(
//    notesReducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
// export default store;