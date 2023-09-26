// Hent elementet der vi skal vise API-responsen
const apiResponseElement = document.getElementById("apiResponse");

// URL til API-en
const apiUrl = "https://api.noroff.dev/api/v1/social/posts";

// Gjør en GET-request til API-en
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Behandle responsen her
        const posts = data; // Dette antar at responsen er en liste av innlegg

        // Opprett HTML-markup for å vise innleggene (tilpass dette etter dine behov)
        const postsHtml = posts.map(post => `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <img src="${post.media}" alt="Post Image">
            </div>
        `).join("");

        // Sett HTML-markupen inn i elementet
        apiResponseElement.innerHTML = postsHtml;
    })
    .catch(error => {
        // Håndter feil her hvis det oppstår en feil med GET-requesten
        console.error("Error fetching data:", error);
        apiResponseElement.innerHTML = "Det oppstod en feil ved henting av data.";
    });
