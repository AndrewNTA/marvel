import { combineReducers } from 'redux';

import { reducerHome } from '../scenes/home';
import { reducerCharacter } from '../scenes/character';

const rootReducer = combineReducers({
  reducerHome,
  reducerCharacter
});
  
export default rootReducer;