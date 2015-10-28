import $ from 'jquery';

const APP_ID = 'sgfFjZFANgdFNKxWNUtj9uaku1iY6iSeOG7NMIvq';
const API_KEY = 'OiMGIbuQDeIdvwSxNDn1zj9XyBNF9xyCaDF55kXx';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});