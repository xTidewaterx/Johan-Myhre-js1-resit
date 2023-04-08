import { baseUrl } from "./index.js";

const detailsContainer = document.querySelector(".details__container");
const punchline = document.querySelector(".punchline");
punchline.style.display = "none";




function getQueryParam() {
  const currentURL = document.location.href;


  let params = new URL(currentURL).searchParams;

  const getQueryParam = "/" + params.get("id");

  console.log(getQueryParam);

  detailsContainer.innerHTML = `<div class="detail__container loading">Loading...</div>`;

  async function fetchById() {
    const response = await fetch(baseUrl + getQueryParam);

    const jsonData = await response.json();

    detailsContainer.innerHTML = ``;

    detailsContainer.innerHTML += `
    <div class="detail__container">
    <div>type: ${jsonData.type}
     <div>setup: ${jsonData.setup}
     </div>
     <div>Punchline:</div>
     <button class="revealPunchline">Reveal</button>

    <div>`;

    punchline.innerHTML = `  
 <div class="detail__container">${jsonData.punchline}
 </div>
     `;

    console.log(jsonData.punchline);

    const revealButton = document.querySelector(".revealPunchline");
    revealButton.style.width = "100px"
    function revealPunchline() {
      const currentDisplayValue = punchline.style.display;
      console.log(currentDisplayValue);

      if (punchline) {
        punchline.style.display = "block";
        console.log(punchline.style);
        revealButton.textContent="Hide";
       
      }
      if (currentDisplayValue == "block") {
        punchline.style.display = "none";
        revealButton.textContent = "Reveal"
        
      }
    }

    revealButton.addEventListener("click", revealPunchline);
  }

  fetchById();
}

getQueryParam();
