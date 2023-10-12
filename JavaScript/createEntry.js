/**
 * Constant defining the base URL of the API.
 * @type {string}
 */
const API_BASEee_URL = "https://api.noroff.dev/api/v1";

/**
 * User's access token for API authentication.
 * @type {string}
 */
const accessTokenn =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTg4LCJuYW1lIjoiU3Zlbl9tYW5uZW5nIiwiZW1haWwiOiJiamFydGVlb2xpdmVyc2VubG9rZW5Abm9yb2ZmLm5vIiwiYXZhdGFyIjoiIiwiYmFubmVyIjoiIiwiaWF0IjoxNjk1NzQ1OTgzfQ.rax294g9uS07X3rN0sn2kl6hTi5f3toPabTsGL_gsSQ";

/**
 * Data for creating a new post.
 * @type {Object}
 * @property {string} title - The title of the post.
 * @property {string} body - The body/content of the post.
 * @property {string[]} tags - An array of tags associated with the post.
 * @property {string} media - The media (image) URL for the post.
 */
const newPostDataa = {
  title: "",
  body: "",
  tags: ["", ""],
  media: "",
};

/**
 * URL for creating a new post via the API.
 * @type {string}
 */
const createPostUrl = `${API_BASEee_URL}/social/posts`;

/**
 * Options for creating a new post using the Fetch API.
 * @type {Object}
 */
const createPostOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessTokenn}`,
  },
  body: JSON.stringify(newPostDataa),
};

fetch(createPostUrl, createPostOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error creating a new post");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Created a new post:", data);
  })
  .catch((error) => {
    console.error("Error creating a new post:", error);
  });
