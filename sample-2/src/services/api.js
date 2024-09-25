import axios from 'axios'


const API = "https://66e5273a5cc7f9b6273c6edc.mockapi.io"

const getProjects = () => axios.get(`${API}/projec`)
const getProjectbyID = (id) => axios.get(`${API}/projec/${id}`)
const addProject = (projectdata) => axios.post(`${API}/projec`, projectdata)
const editProject = (id, projectdata) => axios.put(`${API}/projects/${id}`, projectdata)
const deleteProject = (id) => axios.delete(`${API}/projec/${id}`)
export { getProjects, getProjectbyID, addProject, editProject, deleteProject }