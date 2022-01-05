import axios from 'axios';
import CurrentDate from './date';

const fetchCountries = async () => {
  const res = await axios.get(`https://api.covid19tracking.narrativa.com/api/${CurrentDate()}`);
  // .then((response) => ({
  //   countries: response.dates[CurrentDate()].countries,
  //   totalTodayConfirmed: response.total.today_confirmed,
  // }));
  return res.data;
};

export default fetchCountries;
