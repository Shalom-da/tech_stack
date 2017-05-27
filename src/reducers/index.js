import { combineReducers } from 'redux';
import LibraryRecuder from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryRecuder,
  selectedLibraryId: SelectionReducer
});
