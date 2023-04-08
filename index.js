

export const baseUrl = "https://api.noroff.dev/api/v1/jokes";
const container = document.querySelector(".container");
const jokeType = document.querySelector("#jokeType");

async function fetchAllData() {


const currentJokeType = jokeType.options[jokeType.selectedIndex].text;
const jokeTypeContainer = document.querySelectorAll(".jokeType__select");

for(let i=0; i < 3; i++) {



jokeTypeContainer[i].addEventListener("click", function() {



location.reload();

})};

  try {
    const response = await fetch(baseUrl);
    const json = await response.json();





    json.sort((a, b) => a.setup.localeCompare(b.setup)) //filter by programming or general
 




var dataValue = json;



  if(currentJokeType=="Programmer") {

  


  var dataValue = json.filter(element => element.type=="programming")
  console.log(dataValue)

  } else if(currentJokeType == "General") {
    var dataValue = json.filter(element => element.type=="general")

  }
    dataValue.forEach((item) => 
  {

    

      container.innerHTML += `
      <li>
      <a href= "details.html?id=${item.id}"> 
 
        <p>type:    ${item.type}</p>
        <p>setup:   ${item.setup}</p>
   
   

      </a>     </li>
      `;
  });
  } catch (e) {
    console.error(e);
  } finally {
    console.log("cleanup");
  }
}

fetchAllData();

