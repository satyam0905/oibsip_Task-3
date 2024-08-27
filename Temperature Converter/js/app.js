//scripts

const celsiusField= document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

//window loading request
window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
})

//add loading 

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();

  //add loading feature
  convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>Converting..</span>";
  setTimeout(() => {
    convertBtn.innerHTML = "<span>Convert</span>";
  }, 1000)
})

function convertToCelsius() {
  let inputValue = degree.value;

  setTimeout(() => {
    if(tempType.value === "fahrenheit"){
      const fahrenheitToCelsius = (inputValue - 32)*(5/9);
      celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} °C`;
    }
    else if(tempType.value === "kelvin"){
        const kelvinToCelsius = inputValue - 273.15;
        celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} °C`;
    } 
  }, 1100)
}