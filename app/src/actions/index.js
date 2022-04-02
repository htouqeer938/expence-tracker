import axios from 'axios'
const SERVER_URL = 'http://localhost:2000'

export const loginAuthCall = (payload, callback, CallbackError) => {
      axios
            .post(`${SERVER_URL}/login`, payload)
            .then((response) => {
                  callback(response.data.response);
            })
            .catch((err) => {
                  console.log(err);
                  CallbackError(err);
            });
}