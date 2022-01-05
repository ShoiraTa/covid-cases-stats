export const GET_REGIONS = 'GET_REGIONS';

export const getRegionsAction = (payload) => ({ type: GET_REGIONS, payload });

const initialState = {};

const regionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGIONS:
      return action.payload;
    default:
      return state;
  }
};

export default regionsReducer;
