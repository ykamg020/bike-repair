var time = 3000;
var images = [
    "sampleY/Velo1.jpg",
    "sampleY/Velo2.jpg",
    "sampleY/Velo3.jpg"
];
var currentImageIndex = 0;
var slideImages = document.getElementsByClassName('slide');

function changeImg() {
    // Hide all images
    for (var i = 0; i < slideImages.length; i++) {
        slideImages[i].style.opacity = 0;
    }

    // Show the current image
    slideImages[currentImageIndex].style.opacity = 1;

    // Move to the next image index
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Schedule the next image change
    setTimeout(changeImg, time);
}

// Start the slideshow when the window loads
window.onload = function() {
    changeImg();
};


// we wait for the DOM content to be fully loaded 

document.addEventListener("DOMContentLoaded", function() {
    // we get all clickable images 
    const images = document.querySelectorAll('.product-item img');

    // create a function to handle image click
    function imageClick(event) {
        const clickedImageSrc = event.target.src; // we get the source of the clicked image

        // we create a new image element for displaying the enlarged image
        const enlargedImage = document.createElement('img');
        enlargedImage.src = clickedImageSrc; // we set the source to the clicked image source
        enlargedImage.style.maxWidth = '40%'; // set the width of the enlarged image


        // clear any previous displayed enlarged image
        const enlargedContainer = document.getElementById('enlargedContainer');
        enlargedContainer.innerHTML = ''; // we clear the container


        //Append the enlarged image to the container
        enlargedContainer.appendChild(enlargedImage);

        // scroll to the enlarged image container
        enlargedContainer.scrollIntoView({behavior: 'smooth', block: 'end'})

        // set a timeout sothat after a certain amount of time the enlarge image disappear
        setTimeout(function(){
            enlargedContainer.innerHTML = '';
        }, 60000);
    }

    // I loop through each image to add the click event listener 
    images.forEach(function(image){
        image.addEventListener('click', imageClick);
    });
     
});

document.addEventListener('DOMContentLoaded', function(){
    const information1 = document.querySelector('.Information1');
    const caret = information1.querySelector('.fas.fa-caret-down');

    information1.addEventListener('click', function(){
        const hoursList = information1.querySelector('.hours-list');
        caret.classList.toggle('fa-caret-down');  // toggle caret direction (the small arrow points down)

        information1.classList.toggle('active'); // toggle active class to show/hide hours list 
    })
})

document.addEventListener('DOMContentLoaded',function(){
    const contentProduct = document.querySelector('content');
    const contentP = contentProduct.querySelector('.button[href="#products-section"]');

    contentP.addEventListener('click', function(){
       event.preventDefault();
        const productSection = document.querySelector('#products-section');
        const offseTop = productSection.offseTop;

        window.scrollTo({
            top:offseTop,
            behavior:'smooth'
        })
    })
})

document.addEventListener('DOMContentLoaded', function(){
    const pros = document.querySelector('#logo-container');
    const pross = pros.querySelector('#products-section')

    pross.addEventListener('click',function(){
        event.preventDefault();
        const prosss = document.querySelector('#products-section');
        const offseTop = prosss.offseTop;

        window.scrollTo({
            top:offseTop,
            behavior:'smooth'
        })
    })
})

document.addEventListener('DOMContentLoaded', function(){
    const cons = document.querySelector('#logo-container');
    const conss = cons.querySelector('#about-section')

    conss.addEventListener('click',function(){
        event.preventDefault();
        const consss = document.querySelector('#about-section');
        const offseTop = consss.offseTop;

        window.scrollTo({
            top:offseTop,
            behavior:'smooth'
        })
    })
})


document.addEventListener('DOMContentLoaded', function(){
    const tons = document.querySelector('#logo-container');
    const tonss = tons.querySelector('#contact-section')

    tonss.addEventListener('click',function(){
        event.preventDefault();
        const tonsss = document.querySelector('#contact-section');
        const offseTop = tonsss.offseTop;

        window.scrollTo({
            top:offseTop,
            behavior:'smooth'
        })
    })
})
