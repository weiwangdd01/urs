import fetch from "dva/fetch";

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  if (options && options.method && options.method.toUpperCase() === "POST") {
    options.headers = Object.assign(
      {
        "Content-Type": "application/json;charset=UTF-8"
      },
      options.headers
    );
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      return { data };
    })
    .catch(err => {
      return  { err };
    });
}
