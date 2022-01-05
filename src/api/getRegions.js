const day = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

const getRegions = async (region) => fetch(`https://api.covid19tracking.narrativa.com/api/${day}/country/${region}`)
  .then((response) => response.json())
  .then((response) => ({ countryData: response.dates[day].countries }));

export default getRegions;
