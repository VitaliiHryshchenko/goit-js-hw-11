const params = {
  key: '46019224-0ece95bdc3a0496b8437567d7',
  q: '',
  imageType: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export function generateHttpsQuery(formValue) {
  params.q = formValue;
  const queryString = new URLSearchParams(params).toString();
  return `https://pixabay.com/api/?${queryString}`;
}

export function fetchPictures(httpsQuery) {
  return fetch(httpsQuery).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
