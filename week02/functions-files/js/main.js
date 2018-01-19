console.log('main.js has loaded');






// the updateInnerHTML fucntion has two parameters:
// selector is the string that identifies the DOM element to get/select
// - newvalue is a string that will be the new value that we input
function updateInnerHTML(selector, newValue) {
  document.querySelector(selector).innerHTML = newValue;
}


function strong(value) {
    //Combining strings to produce a new string is called concatination
    return '<strong>' + value + '</strong>';
  }


  function italics(text) {
    return '<i>' + text + '</i>';
  }

  var tag = document.querySelector('p .note');
  tag.innerHTML = italics(tag.innerHTML);

  

  //function updateInnerHTML(selector, newValue) {
  //var tag = document.querySelector('p .note');
  //tag.innerHTML = italics(tag.innerHTML);
  //}