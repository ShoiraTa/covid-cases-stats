export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';

export const getCountriesAction = (payload) => ({ type: GET_ALL_COUNTRIES, payload });

const initialState = {};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;
