import { api, updateToken } from './api';

const getAllExperiences = async () => {
  const resp = await api.get('/experiences')
  return resp.data;
}

const getUserExperiences = async (user_id) => {
  const resp = await api.get(`/users/${user_id}/experiences`)
  return resp.data;
}

const showUserExperience = async (user_id, id) => {
  const resp = await api.get(`users/${user_id}/experiences/${id}`)
  return resp.data;
}

const putFinalRating = async (user_id, id, updatedExperience) => {
  const resp = await api.put(`users/${user_id}/experiences/${id}`, updatedExperience)
  return resp.data;
}

const deleteExperience = async (user_id, id) => {
  const resp = await api.delete(`/users/${user_id}/experiences/${id}`)
  return resp.data;
}

const createExperience = async (user_id, experienceFormData) => {
  const { exp_type, description, init_rating, second_rating, final_rating } = experienceFormData
  const resp = await api.post(`users/${user_id}/experiences`, {
    experience: {
      exp_type,
      description,
      init_rating,
      second_rating,
      final_rating,
      user_id
    }
  })
  return resp.data;
}

export {
  getAllExperiences,
  createExperience,
  getUserExperiences,
  showUserExperience,
  deleteExperience,
  putFinalRating
}
