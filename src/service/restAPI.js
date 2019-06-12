import { hostname, protocol, backendPath } from '../../backend.config';

const getJSON = response => response.json();
const getBlob = response => response.blob();

const getFetch = ({
  method = 'GET',
  ressoursePath,
  qsParams,
  payload = {},
  responceBodyMethod = 'json',
}) => {
  const pathToRessourse = `${backendPath}/${ressoursePath}`;
  const backendURL = `${hostname}:${protocol}/${pathToRessourse}`;
  const fetchURL = (method === 'GET') ? `${backendURL}?${qsParams}` : `${backendURL}`;
  const body = method === 'GET' ? undefined : { method, body: JSON.stringify(payload) };
  const fetchParams = body ? [fetchURL, body] : [fetchURL];

  const fetchResponceBodyMethod = (() => {
    switch (responceBodyMethod) {
      case 'blob': return getBlob;
      case 'json': return getJSON;
      default: return getJSON;
    }
  })();

  return fetch(...fetchParams).then(fetchResponceBodyMethod);
};

export { getFetch };
