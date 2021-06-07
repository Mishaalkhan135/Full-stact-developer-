const currencyOne = document.getElementById('currency-one');
const amountCurrencyOne = document.getElementById('amount-one');  
const currencyTwo = document.getElementById('currency-two');
const amountCurrencyTwo = document.getElementById('amount-two'); 
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exchange rates & Update the Dom
function calculate(){
    //Get the currency code for currency 1 and 2
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;
   //Send request to Exchnage rate api for conversion rate for currency 1
    fetch(`https://v6.exchangerate-api.com/v6/622277e84d87368462b1f2bd/pair/${currencyOneCode}/${currencyTwoCode}`)
    .then(res => res.json())
    .then(data => {
        //Get the conversion rate from currency 1 to currency 2
        const conversionRate = data.conversion_rate;
        //Update the dom to display the conversion rate 
        rate.innerText = `1 ${currencyOneCode}=${conversionRate} ${currencyTwoCode}`;
        //Update the currency 2 amount
        amountCurrencyTwo.value = (amountCurrencyOne.value * conversionRate).toFixed(2);
    });
};
   
//Event listner
//REcalculate exchnage rate when currency one chnages
currencyOne.addEventListener('change',calculate);
//Recalculate exchange amount when currency 1 amount changes
amountCurrencyOne.addEventListener('input',calculate);
//REcalculate exchnage rate when currency two chnages
currencyTwo.addEventListener('change',calculate);
//Recalculate exchange amount when currency 2 amount changes
amountCurrencyTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    //Save value of currency 1 code to temp variable
    const temp = currencyOne.value;
    //Copy currency 2 code to currency 1
    currencyOne.value = currencyTwo.value;
    //Copy currency one code to temp variable to currency two
    currencyTwo.value = temp;
    //recalculate exchange rate after swap
    calculate();
})

//Excecute calculate function on pase load
calculate();
