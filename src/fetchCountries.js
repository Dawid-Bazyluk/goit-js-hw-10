export function fetchCountries(name) {
  return fetch(
    'https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages'
  )
    .then(r => r.json())
    .catch(e => console.log('Error:', e));
}

fetch(
  'https://restcountries.com/v3.1/name/poland?fields=name,capital,population,flags,languages'
)
  .then(r => r.json())
  .then(r => console.log(r))
  .catch(e => console.log('Error:', e));
