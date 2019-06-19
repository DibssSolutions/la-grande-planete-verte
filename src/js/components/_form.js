import validate from '../lib/jquery.form-validator.js';
import select2 from 'select2';
import datepicker from 'air-datepicker';
import { ACTIVE, OPEN, BODY } from '../constants';
import Inputmask from 'inputmask';

BODY.on('focus', '[data-inputmask]', function() {
  Inputmask({placeholder: ''}).mask(this);
});


const select = $('.js-select');
select.select2({ 
  minimumResultsForSearch: -1,
  placeholder: 'Select time',
  width:'100%'
})
  .on('select2:open', function(e) {
  	$('.select2-dropdown').addClass(OPEN);
  })
  .on('select2:closing', function(e) {
  	$('.select2-dropdown').removeClass(OPEN);
  });
//   .next('.select2').find('.select2-selection').one('focus', select2Focus).on('blur', function() {
//     $(this).on('focus', select2Focus);
//   });

// function select2Focus() {
//   $(this).closest('.select2').prev('select').select2('open');
// };

$('.js-datepicker').datepicker({
  onSelect: function(fd, d, picker) {
    picker.hide();
  }
});

$.validate({ 
  form: '.js-form',
  // validateOnBlur : false,
  scrollToTopOnError : false
});
