// Enter your JavaScript for the solution here...

document.querySelector('.frm-filter').addEventListener('input', function(evt){
    var input = document.getElementsByClassName('frm-control');
    var container = document.getElementsByClassName('thumb-display');
    var tag = document.querySelector('p');
    var count
    

    for(count = 0; count < container.length; count++){
        tag = container[count].getElementsByTagName('p');



        if(tag.innerHTML.indexOf > -1){
            container[count].style.display = '';

        } else{
            container[count].style.display = 'none';
        }
    }
});






