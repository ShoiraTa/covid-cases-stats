import fetchCountries from '../../api/getCountries';
import { getCountriesAction } from '../reducers.js/countries';

const getCountries = () => async (dispatch) => {
  const data = await fetchCountries();
  dispatch(getCountriesAction(data));
};

export default getCountries;
