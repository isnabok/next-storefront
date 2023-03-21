export async function fetcher(url, options = {}) {
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = response.json();
  return data;
}
