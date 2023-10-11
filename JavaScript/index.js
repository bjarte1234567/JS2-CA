const API_BASE_URL = "https://api.noroff.dev/api/v1";
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTg4LCJuYW1lIjoiU3Zlbl9tYW5uZW5nIiwiZW1haWwiOiJiamFydGVlb2xpdmVyc2VubG9rZW5Abm9yb2ZmLm5vIiwiYXZhdGFyIjoiIiwiYmFubmVyIjoiIiwiaWF0IjoxNjk1NzQ1OTgzfQ.rax294g9uS07X3rN0sn2kl6hTi5f3toPabTsGL_gsSQ";
const authorId = "3925"; // ID-en til den brukeren du vil hente innlegg for
const postsUrl = `${API_BASE_URL}/social/posts?_author=${authorId}`;

const fetchOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
};

fetch(postsUrl, fetchOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    console.log("Posts for user:", posts);

    const userPostsContainer = document.getElementById("user-posts");

    // Filtrer innlegg som har en media URL (bilde)
    const postsWithMedia = posts.filter((post) => post.media);

    // Begrense visningen til de første fem innleggene med bilder
    for (let i = 0; i < 5 && i < postsWithMedia.length; i++) {
      const post = postsWithMedia[i];
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      // Legg til bilde (media) hvis det er tilgjengelig i posten
      const mediaElement = document.createElement("img");
      mediaElement.src = post.media; // Bruk URL-en til postens media
      postElement.appendChild(mediaElement);

      if (post.title) {
        const titleElement = document.createElement("h2");
        titleElement.textContent = post.title;
        postElement.appendChild(titleElement);
      }

      if (post.body) {
        const bodyElement = document.createElement("p");
        bodyElement.textContent = post.body;
        postElement.appendChild(bodyElement);
      }

      userPostsContainer.appendChild(postElement);
    }
  })
  .catch((error) => {
    console.error("Error fetching user posts:", error);
  });

// const API_BASE_URL = "https://api.noroff.dev/api/v1";
// const accessToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTg4LCJuYW1lIjoiU3Zlbl9tYW5uZW5nIiwiZW1haWwiOiJiamFydGVlb2xpdmVyc2VubG9rZW5Abm9yb2ZmLm5vIiwiYXZhdGFyIjoiIiwiYmFubmVyIjoiIiwiaWF0IjoxNjk1NzQ1OTgzfQ.rax294g9uS07X3rN0sn2kl6hTi5f3toPabTsGL_gsSQ";

// const authorId = "3925";

// const postsUrl = `${API_BASE_URL}/social/posts?_author=${authorId}`;

// const fetchOptions = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${accessToken}`,
//   },
// };

// fetch(postsUrl, fetchOptions)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((posts) => {
//     console.log("Posts for user:", posts);

//     const userPostsContainer = document.getElementById("user-posts");

//     posts.forEach((post) => {
//       if (post.title || post.body) {
//         // Sjekk om posten har både tittel og kropp
//         const postElement = document.createElement("div");
//         postElement.classList.add("post");

//         if (post.media) {
//           // Legg til bilde (media) hvis det er tilgjengelig i posten
//           const mediaElement = document.createElement("img");
//           mediaElement.src = post.media; // Bruk URL-en til postens media
//           postElement.appendChild(mediaElement);
//         }

//         if (post.title) {
//           const titleElement = document.createElement("h2");
//           titleElement.textContent = post.title;
//           postElement.appendChild(titleElement);
//         }

//         if (post.body) {
//           const bodyElement = document.createElement("p");
//           bodyElement.textContent = post.body;
//           postElement.appendChild(bodyElement);
//         }

//         userPostsContainer.appendChild(postElement);
//       }
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching user posts:", error);
//   });
