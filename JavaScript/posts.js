
const API_BASE_URL = "https://api.noroff.dev/api/v1";
const postsUrl = `${API_BASE_URL}/social/posts`;

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTg4LCJuYW1lIjoiU3Zlbl9tYW5uZW5nIiwiZW1haWwiOiJiamFydGVlb2xpdmVyc2VubG9rZW5Abm9yb2ZmLm5vIiwiYXZhdGFyIjoiIiwiYmFubmVyIjoiIiwiaWF0IjoxNjk1NzQ1OTgzfQ.rax294g9uS07X3rN0sn2kl6hTi5f3toPabTsGL_gsSQ";



function fetchAndDisplayPosts() {
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
      console.log("Posts:", posts);

      displayPosts(posts);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
}

function displayPosts(posts) {
  const postsContainer = document.getElementById("posts-container");

  posts.forEach((post) => {
    if (post.media) {
      const postElement = document.createElement("div");
      const cardBody = document.createElement("div");
      
      const titleElement = document.createElement("h2");
      
      titleElement.textContent = post.title;
      postElement.classList.add("post");

      const bodyElement = document.createElement("p");

      bodyElement.textContent = post.body;

      const mediaElement = document.createElement("img");

      mediaElement.setAttribute("src", post.media);

      postElement.append(mediaElement);
      cardBody.append(titleElement);
      cardBody.append(bodyElement);

      postElement.append(cardBody);
      postsContainer.append(postElement);
    }
  });
}

fetchAndDisplayPosts();

