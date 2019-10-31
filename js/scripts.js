let mapCloseButton = document.querySelector('#map-close-button');
let modalMap = document.querySelector('#modal-map');
let mapLink = document.querySelector('#map-link');
let contactButton = document.querySelector('#contact-button');
let communicationModal = document.querySelector('#communication-modal');
let communicationCloseButton = document.querySelector('#communication-close-button');

mapLink.addEventListener('click', function (event) {
    event.preventDefault(event);
    modalMap.classList.add('modal-show');
});

mapCloseButton.addEventListener('click', function (event) {
    event.preventDefault(event);
    modalMap.classList.remove('modal-show');
});

contactButton.addEventListener('click', function (event) {
    event.preventDefault(event);
    communicationModal.classList.add('modal-show');
});

communicationCloseButton.addEventListener('click', function (event) {
    event.preventDefault(event);
    communicationModal.classList.remove('modal-show');
});