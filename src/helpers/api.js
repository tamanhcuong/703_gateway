const {default: axios} = require('axios');

const get = async (url, accessToken) => {
  try {
    axios.defaults.headers.access_token = accessToken || '';
    const resBackend = await axios.get(url);
    return resBackend.data;
  } catch (err) {
    return err?.response?.data || {};
  }
};

const put = async (url, accessToken) => {
  try {
    axios.defaults.headers.access_token = accessToken || '';
    const resBackend = await axios.put(url);
    return resBackend.data;
  } catch (err) {
    return err?.response?.data || {};
  }
};

const post = async (url, body, accessToken) => {
  try {
    axios.defaults.headers.access_token = accessToken || '';
    axios.defaults.headers['Content-Type'] = 'text/html';
    const resBackend = await axios.post(url, body);
    return resBackend.data;
  } catch (err) {
    return err?.response?.data || {};
  }
};

const postNormal = async (url, body) => {
  try {
    const resBackend = await axios.post(url, body);
    return resBackend.data;
  } catch (err) {
    return err?.response?.data || {};
  }
};

module.exports = {get, put, post, postNormal};
