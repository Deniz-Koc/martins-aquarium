import { database } from './aquariumData.js';

export const tipList = () => {
    let tipHTML = "";
    for (const fish of database.tips) {
        tipHTML += `
        <article class = "tip__article">
            <ul class = "tips">
            <li class = "tip"></li></ul>
        </article>`
    }
    return tipHTML
}