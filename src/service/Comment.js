import "isomorphic-fetch"

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

function fetchResponseByURL(relativeURL) {
  return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json());
}

function fetchPersonByURL(relativeURL) {
  return fetchResponseByURL(relativeURL).then(json => json);
}

export async function getComments(args) {
  var searchedComments = fetchPersonByURL(`comments`).then(function(response){
    return response.slice(0, args.first)
  });

  return searchedComments;
}