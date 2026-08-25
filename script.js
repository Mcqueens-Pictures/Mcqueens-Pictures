const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeButton = document.getElementById("lightboxClose");

const previousButton = document.getElementById("lightboxPrev");

const nextButton = document.getElementById("lightboxNext");


let currentIndex = 0;


/* =========================
   OUVRIR UNE PHOTO
========================= */

galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.classList.add("active");

    });

});


/* =========================
   AFFICHER LA PHOTO
========================= */

function showImage() {

    lightboxImage.src = galleryImages[currentIndex].src;

}


/* =========================
   FERMER
========================= */

closeButton.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


/* =========================
   PHOTO SUIVANTE
========================= */

nextButton.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {

        currentIndex = 0;

    }

    showImage();

});


/* =========================
   PHOTO PRÉCÉDENTE
========================= */

previousButton.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = galleryImages.length - 1;

    }

    showImage();

});


/* =========================
   CLIQUER EN DEHORS
========================= */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


/* =========================
   CLAVIER
========================= */

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

    if (event.key === "ArrowRight") {

        currentIndex++;

        if (currentIndex >= galleryImages.length) {
            currentIndex = 0;
        }

        showImage();

    }

    if (event.key === "ArrowLeft") {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = galleryImages.length - 1;
        }

        showImage();

    }

    

});
