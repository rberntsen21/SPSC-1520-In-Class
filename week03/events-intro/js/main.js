// 1. select the target element
var featureImage = document.querySelector('img.feature');
var featureLink = document.querySelector('a.feature.link');
// 2. create the event listener function
function handleFeatureClick() {
    console.log('img.feature was clicked...');
    // Grab the HTML element with a .feature and a .description class
    var desc = document.querySelector('.feature.description');
    // All HTML elemnt objects have a .class list property that is a colection of class names.
    desc.classList.remove('hidden');
}    

function handleFeatureLinkClick(evt) {
    console.log('a.feature.link was clicked')
    // set the image src to the anchors href value.
    featureImage.src = featureLink.href;

    //make the image visible
    featureImage.classList.remove('hidden');

    // do not want to load the image in the page.
    evt.preventDefault();
    
}
// 3. add event listener
featureImage.addEventListener('click',handleFeatureClick);
featureLink.addEventListener('click',handleFeatureLinkClick);
