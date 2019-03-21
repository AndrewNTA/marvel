import { combineEpics } from 'redux-observable';

import { epicHome } from '../scenes/home';
import { epicCharacter } from '../scenes/character';

const rootEpic = combineEpics(
  epicHome,
  epicCharacter
);
  
export default rootEpic;