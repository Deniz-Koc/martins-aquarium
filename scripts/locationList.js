import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML = `<article class="locations">`

    for (const location of database.locations) {
        locationHTML += `
            <section class="location">
                <h2 class="location__name">${location.name}</h2>
                <p class="location__country">${location.country}</p>
                <p class="location__description">${location.description}</p>
            </section>
        `
    }

    locationHTML += `</article>`
    return locationHTML
}