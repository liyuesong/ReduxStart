// state argument is not application state, only the state 
// this reducer is responsible for
export default function (state = null, action) {
	// care about the action
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload; // the selected book
	}

	// not care about the action
	return state;
}