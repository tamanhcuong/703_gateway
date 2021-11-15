const {default: axios} = require('axios');
const Constant = require('../../confs/constant');

const getTokens = async (req, res) => {
    const body = req.body;
    try {
      const resBackend = await axios.post(
        `${Constant.BACKEND_DOMAIN}/authentication/login`, body
      );      
      res.send(resBackend.data);
    } catch (err) {
      console.log(err?.response?.data);
      res.send(err.response.data || {});
    }
  };
  
  module.exports = getTokens;