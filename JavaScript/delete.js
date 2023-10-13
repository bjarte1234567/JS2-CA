/**
 * this script deletes post, by sending a request to the API.
 * If error DELETE https://api.noroff.dev/api/v1/social/posts/number or failed to delete the post
 * comes up, change to a valid number of my posts posted
 * @param {string} deleteUrl - URL for deleting request .
 * @param {string} accessTokenee - accesstoken to access API
 */


const API_BASE_URLee = "https://api.noroff.dev/api/v1";
const postIdToDelete = 5778;
const deleteUrl = `${API_BASE_URLee}/social/posts/${postIdToDelete}`;
const accessTokenee =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTg4LCJuYW1lIjoiU3Zlbl9tYW5uZW5nIiwiZW1haWwiOiJiamFydGVlb2xpdmVyc2VubG9rZW5Abm9yb2ZmLm5vIiwiYXZhdGFyIjoiIiwiYmFubmVyIjoiIiwiaWF0IjoxNjk1NzQ1OTgzfQ.rax294g9uS07X3rN0sn2kl6hTi5f3toPabTsGL_gsSQ";

fetch(deleteUrl, {
  method: "DELETE",
  headers: {
    Authorization: `Bearer ${accessTokenee}`,
  },
})
  .then((response) => {
    if (response.ok) {
      console.log(`Post with ID ${postIdToDelete} has been deleted.`);
    } else {
      console.error("Failed to delete the post.");
    }
  })
  .catch((error) => {
    console.error("Network error:", error);
  });

