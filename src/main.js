import './styles.css';
import { vowelCount } from './journal';
import { consonantsCount } from './journal';

$(document).ready(function() {
  $('#journalForm').submit(function(event) {
    event.preventDefault();
    var body = $('#Body').val().toLowerCase();
    var vowelOutput = vowelCount(body);
    var consonantOutput = consonantsCount(body);
    vowelOutput.forEach(function(element) {
      $('#vowelCounts').append("Vowels: " + "<li>" + element + "</li>");
    });
    consonantOutput.forEach(function(element2){
      $('#consonantCounts').append("Consonants: " + "<li>" + element2 + "</li>");
    });
  });
});
