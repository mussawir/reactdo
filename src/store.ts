import { createStore, StoreEnhancer} from 'redux'
import { devToolsEnhancer } from '@redux-devtools/extension';
import {notesReducer} from './notesReducer'
export const store = createStore(notesReducer,devToolsEnhancer())


