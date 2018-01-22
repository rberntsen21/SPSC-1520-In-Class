// 1. select the target element
var featureImage = document.querySelector('img.feature');
// 2. create the event listener function
function handleFeatureClick() {
    console.log('img.feature was clicked...');
    // Grab the HTML element with a .feature and a .description class
    var desc = document.querySelector('.feature.description');
    // All HTML elemnt objects have a .class list property that is a colection of class names.
    desc.classList.remove('hidden');
}    
// 3. add event listener
featureImage.addEventListener('click',handleFeatureClick);