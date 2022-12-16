export const callAPI = (url) =>
  fetch(url)
    .then(res => res.json())
