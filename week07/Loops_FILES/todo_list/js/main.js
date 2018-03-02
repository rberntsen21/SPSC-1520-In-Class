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

document.querySelector('')