const queryString = (params) => {
    return Object.keys(params).map(
      (key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    ).join('&');
  };
  
  module.exports = {queryString};
  