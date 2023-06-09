/* 
Dato un array di oggetti letterali con:
url dell’immagine
titolo
descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



//Milestone 0:
//Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

const imagesElement = document.querySelector('.slider > .images');
let activeImage = 0;
let activeText = 0;


//Milestone 1:
//Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
//Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
const photo = images.forEach((img, i) => {
//console.log(`${img.image}`);
const imgElement = `
<img class="img-fluid ${i === activeImage ? 'active' : ''}"  src="./assets/${img.image}" alt="">
<div class="card-body ${i === activeImage ? 'active' : ''}">
  <h3>
    ${img.title} 
  </h3>
  <p>
    ${img.text}
  </p>
</div>`
imagesElement.insertAdjacentHTML("beforeend", imgElement)
//console.log(img.title);
})



const slideImagesElements = document.querySelectorAll('.slider > .images > img')
const slideTitleInfo = document.querySelector('.card-body')
//console.log('qui3',slideTitleInfo);

const nextEl = document.querySelector('.next')


// listen for clicks on next button
nextEl.addEventListener('click', function () {
  console.log('cliccato next');


  // select the current slide
  const currentSlide = slideImagesElements[activeImage];

 
  //console.log(currentSlide, 'qui');

  // remove the active class from the active image
  currentSlide.classList.remove('active');
  
  // incremente the value of the activeImage variable
  activeImage++;
  
  // increment the value of activeImage of 1 every time we click on the next button

  //Milestone 2:
  //Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
  if (activeImage == images.length) {
      activeImage = 0;
  }


  // select the next slide
  console.log(activeImage);
  const nextImage = slideImagesElements[activeImage];


  
  // add the active class
  console.log(nextImage);
  nextImage.classList.add('active');
 

 
})


// listen for clicks on prev button
const prevEl = document.querySelector('.prev')
prevEl.addEventListener('click', function () {
    //console.log('cliccato prev');

    //console.log(slideImagesElements); //array[index]
    // select the current slide
    const currentSlide = slideImagesElements[activeImage]
    //console.log(currentSlide);
    // remove the active class from the active image
    currentSlide.classList.remove('active')
    // incremente the value of the activeImage variable
    activeImage-- // increment the value of activeImage of 1 every time we click on the next button

    //Milestone 2:
    //Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
    if (activeImage == -1) {
        activeImage = images.length - 1;
    }

    // select the next slide
    //console.log(activeImage);
    const nextImage = slideImagesElements[activeImage]
    // add the active class
    //console.log(nextImage);
    nextImage.classList.add('active')

})





