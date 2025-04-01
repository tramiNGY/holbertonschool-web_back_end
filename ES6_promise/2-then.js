export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(() => Error())
    .finally(() => console.warn('Got a response from the API'));
}
