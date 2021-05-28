const initialState = { noteFilms: [] }

function toggleNote(state = initialState, action) {
  let nextState;
  switch(action.type) {
    case 'TOGGLE_RATED':
      const noteFilm  = state.noteFilms.find(value => value.film.id === action.value.film.id);
      if (!!noteFilm) {
        nextState = {
          ...state,
          noteFilms: state.noteFilms.map(value => {
            if (value.film.id === noteFilm.film.id) {
              value.note = action.value.note
            };
            return value;
          })
        };
      }
      else {
        nextState = {
          ...state,
          noteFilms: [ ...state.noteFilms, {film: action.value.film, note: action.value.note} ]
        };
      };
      return nextState || state;
    default:
      return state;
  }
}

export default toggleNote
