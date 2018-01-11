const fetch = require("node-fetch");
const headerCase = require("header-case");

module.exports = function httpfunc(event, context, callback) {
  const env = process.env;

  const headers = Object.keys(env).reduce((accumulator, key) => {
    if (key.startsWith("HTTP_HEADERS")) {
      const header = headerCase(key.replace("HTTP_HEADERS_", ""));
      accumulator[header] = env[key];
    }
    return accumulator;
  }, {});

  const options = {
    method: env.HTTP_METHOD,
    body: env.HTTP_BODY,
    headers
  };

  fetch(env.HTTP_URL, options)
    .then(res => {
      res.text().then(() => {
        callback(null, {
          status: res.status,
          headers: res.headers.raw()
          // body
        });
      });
    })
    .catch(err => {
      callback(err);
    });
};
