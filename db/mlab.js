import fetch from 'node-fetch'

const MLAB_KEY = process.env.REACT_APP_MLAB_KEY;

const MLAB_URL = (collection) => `https://api.mlab.com/api/1/databases/tkhb_mongodb/collections/${collection}?apiKey=${MLAB_KEY}`;

export const getCollection = collection => {
  const dbOptions = {
    method: "GET",
    url: MLAB_URL(collection)
  };

  return fetch(dbOptions.url)
    .then(data => data.json())
    .then(results => results);
};

export async function postData(data) {
  // Default options are marked with *
  const response = await fetch(MLAB_URL("i18nTags"), {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}