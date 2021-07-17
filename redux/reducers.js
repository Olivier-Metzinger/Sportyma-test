import { GET_CLUBS } from "./actions";
import { GET_PLAYERS } from "./actions";

const initialState = {
  clubs: [],
  players: [],
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CLUBS:
      state.clubs = action.payload;
      return { ...state };
    case GET_PLAYERS:
      state.players = action.payload;
      return { ...state };
    default:
      return state;
  }
}

export default dataReducer;
