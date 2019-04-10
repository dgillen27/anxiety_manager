import { api, updateToken } from './api';

const registerUser = async (formData) => {
  const { email, password, username, profile_img } = formData
  const resp = await api.post('/users', {
    user: {
      username,
      email,
      password,
      profile_img
    }
  })
  return resp.data;
}

const loginUser = async (loginData) => {
  const resp = await api.post(`/user_token`, { auth: loginData });
  console.log(resp.data);
  return resp.data;
}

const getAllUsers = async () => {
  const resp = await api.get('/users')
  return resp.data;
}

export {
  registerUser,
  loginUser,
  getAllUsers
}
