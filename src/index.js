import $ from 'jquery';
import 'bootstrap';

import './index.scss';

$('#click-button').on('click', () => {
  $('#stuff').append('hi');
});
