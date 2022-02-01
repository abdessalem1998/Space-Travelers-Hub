const FETCH_MISSION = 'Space-Travelers-Hub/Mission/FETCH_MISSION';
const JOIN_MISSION = 'Space-Travelers-Hub/Mission/JOIN_MISSION';
const LEAVE_MISSION = 'Space-Travelers-Hub/Mission/LEAVE_MISSION';

const initialState = [];

export const fetchMission = (payload) => ({
  type: FETCH_MISSION,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSION:
      return action.payload;

    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return newState;
    }

    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
