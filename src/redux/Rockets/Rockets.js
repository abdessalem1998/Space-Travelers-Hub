const FETCH_ROCKET = 'Space-Travelers-Hub/Rocket/FETCH_ROCKET';
const JOIN_ROCKET = 'Space-Travelers-Hub/Rocket/JOIN_ROCKET';

const initialState = [];

export const fetchRocket = (payload) => ({
  type: FETCH_ROCKET,
  payload,
});

export const joinRocket = (payload) => ({
  type: JOIN_ROCKET,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.payload;

    case JOIN_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
