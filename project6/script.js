// Get DOM elements 
 const main = document.getElementById('main');
 const addUserBtn = document.getElementById('add-user');
 const doubleBtn = document.getElementById('double');
 const filterBtn = document.getElementById('filter');
 const sortBtn = document.getElementById('sort');
 const sumBtn = document.getElementById('sum');

 // iniatialize data array 
 let data = [];

 //Fetch random user from randomuser.me API
 async function getRandomUser(){
     // wait for the results from API
    const res = await fetch('https://randomuser.me/api/')
    // wait for response to convert into JSON
    const data = await res.json();
    // Get the User Data
    const user = data.results[0];
    // Create the new user
    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        balance: Math.floor(Math.random()*100000)

    }
    //Add the new user into data aray
    addData(newUser);

 };
// Function to add user data into function aray
function addData(newUser){
    //Add the new User into data array
    data.push(newUser);
    //Update the dom to display users in the data array
    updateDom();
}
//Functions to format randon numbers as money
/*function formatNumberToDollar(){
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

}*/
//Update the UI with data from the user data array
function updateDom(userData = data){
    //Clear previous UI
    main.innerHTML = '<h2><strong>User</strong>Wealth</h2>'
    //Loop thorugh userData and render in the UI
    userData.forEach(user => {
        //Create a new div for the user
        const userDiv = document.createElement('div');
        //Apply the user class to new div
        userDiv.classList.add('user');
        //Add inner HTML to the user div
        userDiv.innerHTML = `<strong>${user.name}</strong>${user.balance}` 
        //Add the new element to dom
        main.appendChild(userDiv);
    });
}

// Creae a random User
 getRandomUser();
 getRandomUser();
 getRandomUser();
 getRandomUser();
 getRandomUser();