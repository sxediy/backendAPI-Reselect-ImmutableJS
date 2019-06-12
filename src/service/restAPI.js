const getJSON = response => response.json();

export const getFetch = (fetchURL) => fetch(fetchURL).then(getJSON);
