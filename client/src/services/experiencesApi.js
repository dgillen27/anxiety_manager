import { api, updateToken } from './api';

const getAllExperiences = async () => {
  const resp = await api.get('/experiences')
  return resp.data;
}

const getUserExperiences = async (user_id) => {
  const resp = await api.get(`/users/${user_id}/experiences`)
  return resp.data;
}

const createExperience = async (expData) => {
  const resp = await api.post('experiences', { experience: expData })
  return resp.data;
}

export { getAllExperiences, createExperience, getUserExperiences }
