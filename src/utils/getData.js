/* eslint-disable import/prefer-default-export */

const DEFAULT_URL_DATA = 'http://localhost:3000/data';

export const getData = (url = false) => {
  const configRequest = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return new Promise((resolve, reject) => {
    return fetch(`${url || DEFAULT_URL_DATA}`, configRequest).then(
      (response) => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(new Error('error'));
        }
      },
      (error) => {
        reject(new Error(error.message));
      },
    );
  });
};
