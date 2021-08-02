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
//function to Double the money of All usres
function doubleMoney(){
    console.log('old user data',data);
    //loop trough all users in the user data array
    //for each user , return the user data 
    // Overwrite the data aray with the new data array created by map
    data = data.map(user => {
        return { ...user,balance: user.balance * 2 }
    }); 
    console.log('new data',data);
    //Update the DOM using the new user data array
    updateDom();
}
//function to filter only millioanres
function filterUsers(){
    //filter out all users whose balance is less then million
    data  = data.filter(user => user.balance > 1000000);
    //Update with new user data
    updateDom();
}
//Functio to sort users by values
function sortByBalance(){
    //sort data user values using a compare function inside sort
    data = data.sort((a,b) => a.balance - b.balance)
    //Update with new user data
    updateDom();
}
//funtion to add all values of user balance
function totalBalance(){
    //Update with new user data
    updateDom();
    // Add up alla balance from all users 
    //Accumalator starts at 0 and add the current users balance for each iteration
    const balance = data.reduce((acc,user) => (acc += user.balance), 0);
    //Create a div for the balance
    const balanceElement = document.createElement('div');
    //set inner html for new div
    balanceElement.innerHTML = `<h3>Total Balance: ${formatNumberToDollar(balance)}</h3>`;
    //Append balance in main elemnet
    main.appendChild(balanceElement);
}
//Functions to format randon numbers as money
function formatNumberToDollar(number){
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

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
        userDiv.innerHTML = `<strong>${user.name}</strong>
                            ${formatNumberToDollar(user.balance)}` 
        //Add the new element to dom
        main.appendChild(userDiv);
    });
}
//1.Event listner for click on add user Button
addUserBtn.addEventListener('click', getRandomUser);
//2.Event listner for click on Double money Button
doubleBtn.addEventListener('click',doubleMoney)
//3.Event listner for click on filter  Button
filterBtn.addEventListener('click',filterUsers);
//Listner for click on Sort Button 
sortBtn.addEventListener('click',sortByBalance);
//Listner for click on Sum Button 
sumBtn.addEventListener('click',totalBalance);
// Creae a random User
 getRandomUser();
 getRandomUser();
 getRandomUser();
 getRandomUser();
 getRandomUser();