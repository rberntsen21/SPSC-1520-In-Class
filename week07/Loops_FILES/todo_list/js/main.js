// Enter JavaScript for the exercise here...
document.querySelector('[name=toggle]').addEventListener('change', function(evt){
    var checks = document.querySelectorAll('[name=message]');
    var count = 0;
    
    while(count < checks.length){
        if(evt.target.checked){
            checks[count].checked = true;
        } else{
            checks[count].checked = false
        }

        count = count +1;
    }

});

<<<<<<< HEAD
var count;
var subject = document.querySelector('tr');
var td

document.querySelector('form').addEventListener('submit', function(evt){
    for(count=0; count < subject.length; count++){
    td = subject[count].


    }


});
=======
document.querySelector('')
>>>>>>> 08545d1af04d36a986f985e460d86e2c16b6a6ea
