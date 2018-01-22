var featureLink = document.querySelector('a.feature.link');

function featureLinkHandler(evt){
    var featureImage = document.querySelector('img.feature');
    featureImage.src = featureLink.href;
    featureImage.classList.remove('hidden');

    evt.preventDefault();
}


featureLink.addEventListener('click',featureLinkHandler);
