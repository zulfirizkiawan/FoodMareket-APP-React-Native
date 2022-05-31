import Axios from 'axios';

const API_HOST = {
  url: 'http://otwlulus.com/foodmarket-backend/public/api',
};

export const getFoodData = () => dispatch => {
  Axios.get(`${API_HOST.url}/food`)
    .then(res => {
      // console.log('res :', res.data.data.data);
      dispatch({type: 'SET_FOOD', value: res.data.data.data});
    })
    .catch(err => {
      console.log('err :', err);
    });
};

export const getFoodDataByTypes = types => dispatch => {
  Axios.get(`${API_HOST.url}/food?types=${types}`)
    .then(res => {
      if (types === 'newfood') {
        dispatch({type: 'SET_NEW_TASTE', value: res.data.data.data});
      }
      if (types === 'popular') {
        dispatch({type: 'SET_POPULAR', value: res.data.data.data});
      }
      if (types === 'recommended') {
        dispatch({type: 'SET_RECOMMENDED', value: res.data.data.data});
      }
    })
    .catch(err => {
      showMessage('Terjadi kesalahan di API Food By Type');
    });
};
