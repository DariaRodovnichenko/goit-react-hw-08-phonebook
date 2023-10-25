import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

async function fetchContacts() {
  return await axios.get('/contacts');
}

async function addContact(contact) {
  console.log('Contact data to be sent:', contact);
  const response = await axios.post('/contacts', contact);
  return response;
}

async function deleteContact(idContact) {
  return await axios.delete(`/contacts/${idContact}`);
}

async function registerUser(credential) {
  return await axios.post('/users/signup', credential);
}

async function loginUser(credential) {
  return await axios.post('/users/login', credential);
}

async function logoutUser(credential) {
  return await axios.post('/users/logout');
}

async function refreshUser(credential) {
  return await axios.get('/users/current');
}

export {
  deleteContact,
  addContact,
  fetchContacts,
  setAuthHeader,
  clearAuthHeader,
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
};
