let searchBtn= document.getElementById("search-btn");
let countryInp=document.getElementById("country-input");
const result= document.querySelector(".result")
searchBtn.addEventListener("click", async ()=> {
   
    let countryName=countryInp.value;
    let finalURL=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(finalURL);
    const response= await fetch(finalURL);
    const data= await response.json(); 
    
/* 
    console.log(data[0]);
    console.log(data[0].capital[0]);
    console.log(data[0].flags.svg);
    console.log(data[0].name.common);
    console.log(data[0].continents[0]);
    console.log(Object.keys(data[0].currencies)[0])
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
    console.log(Object.values(data[0].languages).join(","));
 */ 
    if (countryName===" "||    response.status==404){
      result.innerHTML=`<h3>Enter a valid country name</h3>`
    }
    else{
      result.innerHTML=`<img src="${data[0].flags.svg}">
      <h2>${data[0].name.common}</h2>
      <div class="wrapper">
      <div class="data-wrapper">
        <h4>Capital:<h4>
        <span>${data[0].capital[0]}</span>
      </div>
      <div class="data-wrapper">
        <h4>Continent:<h4>
        <span>${data[0].continents[0]}</span>
      </div>
      <div class="data-wrapper">
        <h4>Currency:<h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
      </div>
      <div class="data-wrapper">
        <h4>Currency:<h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name}-${Object.keys(data[0].currencies)[0]} </span>
      </div>
      <div class="data-wrapper">
        <h4>Common Languages:<h4>
        <span>${Object.values(data[0].languages).join(",")} </span>
      </div>
    </div> ` 
}})
