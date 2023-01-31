import './css/styles.css';
import { fetchCountries } from './fetchCountries';
const debounce = require('lodash.debounce');
import Notiflix from 'notiflix';

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;

searchBox.addEventListener('input', debounce(searchingBoxVal, DEBOUNCE_DELAY));

function searchingBoxVal() {
  fetchCountries(searchBox.value.trim())
    .then(countries => renderingResults(countries))
    .catch(err => {
      if (searchBox.value !== '') {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      }
      countryList.innerHTML = '';
      countryInfo.innerHTML = '';
      console.log('Error:', err);
    });
}

function renderingResults(countries) {
  if (countries.length > 10) {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else {
    console.log(countries);
  }
}
