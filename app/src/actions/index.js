import axios from "axios";
const SERVER_URL = "http://localhost:2000";

export const loginAuthCall = (payload, callback, CallbackError) => {
  axios
    .post(`${SERVER_URL}/login`, payload)
    .then((response) => {
      callback(response.data.response);
    })
    .catch((error) => {
      console.log(error);
      CallbackError(error);
    });
};

export const getTransactionTypeAll = (callback) => {
  return axios
    .get(`${SERVER_URL}/get_trans_types`)
    .then((response) => {
      let a = response.data.response.result;
      callback(a);
    })
    .catch((error) => {
      console.log(error);
    });
  // try {
  //   let { data } = await axios.get(`${SERVER_URL}/get_trans_types`);
  //   return data.response
  // } catch (error) {
  //   console.log(error);
  // }
};

export const createTransactionCall = async (payload) => {
  try {
    let response = await axios.post(
      `${SERVER_URL}/create_transaction`,
      payload
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getTransactions = async (user_id, callback, CallbackError) => {
  try {
    let { data } = await axios.get(`${SERVER_URL}/get_transaction/${user_id}`);
    console.log(data.response, "Transaction Response");
    return callback(data.response.result);
  } catch (e) {
    console.log(e);
    return CallbackError(e.response);
  }
};
