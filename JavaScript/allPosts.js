/**
 * Constant defining the base URL of the API.
 * @type {string}
 */
const API_BASE_URL = "https://api.noroff.dev/api/v1";

/**
 * User's access token for API authentication.
 * @type {string}
 */
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTg4LCJuYW1lIjoiU3Zlbl9tYW5uZW5nIiwiZW1haWwiOiJiamFydGVlb2xpdmVyc2VubG9rZW5Abm9yb2ZmLm5vIiwiYXZhdGFyIjoiIiwiYmFubmVyIjoiIiwiaWF0IjoxNjk1NzQ1OTgzfQ.rax294g9uS07X3rN0sn2kl6hTi5f3toPabTsGL_gsSQ";

/**
 * User's ID.
 * @type {string}
 */
const authorId = "3925";

/**
 * URL to fetch the user's posts from the API.
 * @type {string}
 */
const postsUrl = `${API_BASE_URL}/social/posts?_author=3925`;

/**
 * Fetch API options to get the user's posts.
 * @type {Object}
 */

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

    posts.forEach((post) => {
      if (post.title || post.body) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        if (post.media) {
          const mediaElement = document.createElement("img");
          mediaElement.src = post.media;
          postElement.appendChild(mediaElement);
        }

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
    });
  })
  .catch((error) => {
    console.error("Error fetching user posts:", error);
  });
