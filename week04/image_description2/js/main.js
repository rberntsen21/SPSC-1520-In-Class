var featureLink = document.querySelector('a.feature');

function featureLinkHandler(evt) {
    var featureImage = document.querySelector('img.feature');
    if(featureImage.classList.contains('hidden')=== true){
        featureImage.src = featureLink.href;
        featureImage.classList.remove('hidden');
    } else{
        featureImage.src = featureLink.href;
        featureImage.classList.add('hiden');
    }

    evt.preventDefault();
}

featureLink.addEventListener('click', featureLinkHandler);