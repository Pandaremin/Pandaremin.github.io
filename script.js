const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
      //  console.log(data);
      const rate = data.rates[currency_two] / data.rates[currency_one];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
    });
}


// Event Listener
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});



calculate();



function myTimerfirst() {
  
  var us1 = "USD";
  var uk1 = "GBP";
  var jp1 = "JPY";
  var in1 = "INR";
  var cn1 = "CNY";
  
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
     
      const us2 = data.rates[us1];
      const uk2 = data.rates[uk1];
      const jp2 = data.rates[jp1];
      const in2 = data.rates[in1];
      const cn2 = data.rates[cn1];
      us.innerText = `${us2}`;
      uk.innerText = `${uk2}`;
      jp.innerText = `${jp2}`;
      cn.innerText = `${cn2}`;
      inr.innerText = `${in2}`;
    });
    const d = new Date();
    
    document.getElementById("caption").innerText ="Updated at   "+" " +d.toLocaleTimeString();
  
}
myTimerfirst();

setInterval(myTimer, 60000);

function myTimer() {
 
  var us1 = "USD";
  var uk1 = "GBP";
  var jp1 = "JPY";
  var in1 = "INR";
  var cn1 = "CNY";

  fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
      const us2 = data.rates[us1];
      const uk2 = data.rates[uk1];
      const jp2 = data.rates[jp1];
      const in2 = data.rates[in1];
      const cn2 = data.rates[cn1];
      us.innerText = `${us2}`;
      uk.innerText = `${uk2}`;
      jp.innerText = `${jp2}`;
      cn.innerText = `${cn2}`;
      inr.innerText= `${in2}`;
      
    });
    const d = new Date();
    
    document.getElementById("caption").innerText ="Updated at   "+" " +d.toLocaleTimeString();
}
