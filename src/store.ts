import { createStore, StoreEnhancer} from 'redux'
import { devToolsEnhancer } from '@redux-devtools/extension';
import {notesReducer} from './notesReducer'
export const store = createStore(notesReducer,devToolsEnhancer())



// let composedEnhancers: StoreEnhancer<unknown, {}>;
// if (addNote.developmentOptions.reduxDevToolsBlacklistActions) {
//     const composeEnhancers =
//         (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//             actionsBlacklist: addNote.developmentOptions.actionsBlacklist
//         }) || notesReducer;
//     composedEnhancers = composeEnhancers(...enhancers);
// } else {
//     composedEnhancers = composeWithDevTools(...enhancers);
// }

