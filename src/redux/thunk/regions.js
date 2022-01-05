import getRegions from '../../api/getRegions';
import { getRegionsAction } from '../reducers.js/regions';

const getRegionsThunk = (region) => async (dispatch) => {
  const data = await getRegions(region);
  dispatch(getRegionsAction(data));
};

export default getRegionsThunk;
