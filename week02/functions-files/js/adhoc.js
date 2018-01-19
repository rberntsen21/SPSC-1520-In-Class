// 1) create a fucntion called wrapInBlockQuote that will take in a single value and return a string that wraps a text in an HTML blockquote tag.


function wrapInBlockQuote(value) {
 

    return '<blockquote>' + value + '</blockquote>';
}





// 2) write the javascript code to get the element with the id of "leadquote" and, using the function in step 1, wrap the contents of that element in a block quote.

var tag = document.getElementById('leadQuote');

tag.innerHTML = wrapInBlockQuote(tag.innerHTML);