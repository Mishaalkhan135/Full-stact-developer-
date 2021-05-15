//Get Dom Elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;
//Function for count of seats
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    console.log(seatsIndex);
    //length of seats
    const selectedSeatsCount = selectedSeats.length;
    //spam value
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
}
//Save the movie data to local storage
function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
}
//Get data from localstorage and populate UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats != null){
        movieSelect.selectedIndex = selectedMovieIndex;    
    }
}
//Get data from local storage and populate UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach((seat,index) => {
            if(selectedSeats.indexOf(index) >- 1){
                seat.classList.add('selected')
            }
        })
    };
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
}

//Event listner for click
//1. Event Listner for contianer to check for click on seats
container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')){
        //select and deselect seats
        e.target.classList.toggle('selected')
        updateSelectedCount();
    }
})
//2. Event Listner for movie select(Select moives)
movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.seatsIndex, e.target.value);
    updateSelectedCount();
})

//Intial count and total price
updateSelectedCount();