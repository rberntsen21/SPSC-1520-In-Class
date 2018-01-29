// When a gallery thumbnail size button is clicked, the corresponding size class
// should be added to the div.thumbnails element. This will apply the corresponding
// CSS rule to  modify the display the of the thumbnail images. In addition to this, the clicked button should be made active (i.e. add the active class).

//  var liSm = document.querySelector('.thumbnails-sm');
//  var liMd = document.querySelector('.thumbnails-md');
//  var liLg = document.querySelector('.thumbnails-lg');
var ulContainer = document.querySelector('ul.thumbnail-sizes');

 function thumbnailSizeHandler(evt) {
     var target = evt.target; //evt.target is the object the event happend on.
     var thumbnails = document.querySelector('div.thumbnails');

    if(target.classlist.contains('active') != true) {

        document.querySelector('li.active').classList.remove('active');
        target.classlist.add('active');

        // determine which button was clicked
        if(target.classlist.contains('thumbnails-sm')) {
            thumbnails.classlist.remove('md');
            thumbnails.classlist.remove('lg');
            thumbnails.classlist.add('sm');

        } else if(target.classlist.contains('thumbnails-md')) {
            thumbnails.classlist.remove('sm');
            thumbnails.classlist.remove('lg');
            thumbnails.classlist.add('md');
        } else{
            thumbnails.classlist.remove('sm');
            thumbnails.classlist.remove('md');
            thumbnails.classlist.add('lg');
        }
    }
 }


 //liSm.addEventListener('click',thumbnailSizeHandler);
 //liMd.addEventListener('click',thumbnailSizeHandler);
 //liLg.addEventListener('click',thumbnailSizeHandler);

 ulContainer.addEventListener('click',thumbnailSizeHandler);