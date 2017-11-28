import axios from 'axios';

export default function request(url, options){
  return axios(url, options)
    .then(response => {
      if (response.status === 401) {
        //get RT from LS
        // request again for a token
        const urlRT = '';
        const optionsRT = {};
        axios(urlRT, optionsRT)
          .then()
          .catch()
      }
    })
    .catch(err => {

    });
}