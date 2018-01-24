var featureLink = document.querySelector('a.feature.link');

function featureLinkHandler(evt){
    var featureImage = document.querySelector('img.feature');
    featureImage.src = featureLink.href;
    featureImage.classList.remove('hidden');

    featureImage.alt = featureLink.title;

    var captionParagraph = document.querySelector('p.feature.title');
    captionParagraph.innerHTML = featureLink.title;

    evt.preventDefault();
}


featureLink.addEventListener('click',featureLinkHandler);
