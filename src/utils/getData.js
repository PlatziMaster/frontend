/**
 * Trae la información de la api.
 * @param {String} url Url para hacer fetch.
 * @returns {Array} Retorna la data de la petición.
 */

export const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
