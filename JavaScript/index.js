const API_BASE_URLee = "https://api.noroff.dev/api/v1";
const postsUrl = `${API_BASE_URLee}/social/posts`;

const accessTokenee =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTg4LCJuYW1lIjoiU3Zlbl9tYW5uZW5nIiwiZW1haWwiOiJiamFydGVlb2xpdmVyc2VubG9rZW5Abm9yb2ZmLm5vIiwiYXZhdGFyIjoiIiwiYmFubmVyIjoiIiwiaWF0IjoxNjk1NzQ1OTgzfQ.rax294g9uS07X3rN0sn2kl6hTi5f3toPabTsGL_gsSQ";

const maxPostsToShow = 5;

function fetchAndDisplayPosts() {
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessTokenee}`,
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
  const displayedPosts = [];

  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    if (post.media) {
      displayedPosts.push(post);
    }
  });

  const postsToDisplay = displayedPosts.slice(0, maxPostsToShow);

  postsToDisplay.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-5");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("card-title");
    titleElement.textContent = post.title;

    const bodyElement = document.createElement("p");
    bodyElement.classList.add("card-text");
    bodyElement.textContent = post.body;

    const mediaElement = document.createElement("img");
    mediaElement.classList.add("card-img-top");
    mediaElement.setAttribute("src", post.media);

    const likeButton = document.createElement("button");
    likeButton.classList.add("btn", "btn-primary", "mb-2");
    likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i> Like';

    let isLiked = false;
    likeButton.addEventListener("click", function () {
      if (isLiked) {
        likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i> Like';
        likeButton.classList.remove("btn-danger");
        isLiked = false;
      } else {
        likeButton.innerHTML = '<i class="fas fa-heart"></i> Liked';
        likeButton.classList.add("btn-danger");
        isLiked = true;
      }
    });

    cardBody.append(titleElement);
    cardBody.append(bodyElement);
    cardBody.append(likeButton);

    card.append(mediaElement);
    card.append(cardBody);
    postsContainer.append(card);
  });
}

fetchAndDisplayPosts();
