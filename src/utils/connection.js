import axios from 'axios';

export function get(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, data)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
}

export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
}
