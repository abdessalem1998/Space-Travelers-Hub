const FETCH_MISSION = 'Space-Travelers-Hub/Mission/FETCH_MISSION';

const initialState = [];

export const fetchMission = (payload) => ({
  type: FETCH_MISSION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSION:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
