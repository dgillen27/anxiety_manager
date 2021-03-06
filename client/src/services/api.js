import axios from 'axios'

// const BASE_URL = "http://localhost:3000"
const BASE_URL = process.env.REACT_APP_BASE_URL

const api = axios.create({
  baseURL: BASE_URL,
});

const updateToken = (token) => {
  localStorage.setItem('authToken', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

export {
  api,
  updateToken
}
