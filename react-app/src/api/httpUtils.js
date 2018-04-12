// Generic request helper for API
import serialize from 'serialize-javascript';

export const request = (path, opts = {}) => {
  if (opts.body) {
    opts.body = serialize(opts.body);
  }

  return new Promise((resolve, reject) => {
    /* eslint-disable no-undef */
    fetch(path, opts)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json()
            .then(json => resolve({ response, status: response.status, json }))
            .catch(() => resolve({ response, status: response.status, json: {} }));
        }
        return response.json()
          .then(json => reject({ response, status: response.status, json }))
          .catch(() => reject({ response, status: response.status, json: {} }));
      });
  });
};

export function addSerializedQueryParams(params = {}) {
  return serializeQueryParams(params);
}

export function serializeQueryParams(params) {
  let str = '';
  for (const key in params) {
    const val = params[key];
    if (val === undefined || val === null) {
      continue;
    }
    str += str.length ? '&' : '';

    if (Array.isArray(val)) {
      str += `${key}=${encodeURIComponent(val.join(','))}`;
    } else if (typeof val === 'object') {
      for (const prop in val) {
        const queryParamKey = encodeURIComponent(`${key}[${prop}]`);
        str += `${queryParamKey}=${encodeURIComponent(val[prop])}`;
      }
    } else {
      str += `${key}=${encodeURIComponent(val)}`;
    }
  }
  return str;
}
