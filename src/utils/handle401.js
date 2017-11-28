import axios from 'axios';
import requestToken from './requestToken';

export default function makeAPICalls (url, options) {
  axios(url, options)
    .then(response => {
      return Promise.resolve(response.data.data);
    })
    .catch((err) => {
      const { response } = err;
      if (response.status === 401) {
        requestToken()
          .then( response => {
            // set the token in local storage
            localStorage.setItem('user', response.data.token);
            // call the api with new token
            const options = {...options, token: localStorage.getItem('token')};
            return makeAPICalls(url, options);
          })
          .catch( err => {
            Promise.reject(err);
          });
      }
    })
}