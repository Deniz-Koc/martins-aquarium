import { database } from './aquariumData.js';

export const fishList = () => {
   let fishHTML = "";
   for (const fish of database.fish) {
    fishHTML += `
    <article class = "fish">
        <img src = "${fish.image}" alt = "${fish.name} name" class = "fish__image">
        <div class = "fish__details">
            <h2 class = "fish__name">${fish.name}</h2>
            <p class = "fish__species">${fish.species}</p>
            <p class = "fish__length">${fish.length}</p>
        </div>
    </article>`
   }
   return fishHTML
}