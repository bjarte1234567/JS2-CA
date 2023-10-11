const API_BASEe_URL = "https://api.noroff.dev/api/v1";
const accessTokenn =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTg4LCJuYW1lIjoiU3Zlbl9tYW5uZW5nIiwiZW1haWwiOiJiamFydGVlb2xpdmVyc2VubG9rZW5Abm9yb2ZmLm5vIiwiYXZhdGFyIjoiIiwiYmFubmVyIjoiIiwiaWF0IjoxNjk1NzQ1OTgzfQ.rax294g9uS07X3rN0sn2kl6hTi5f3toPabTsGL_gsSQ";

const createPostUrl = `${API_BASE_URL}/social/posts`;

//CREATE POST HERE BY FILLING OUT.

// const newPostData = {
//   title: "oink",
//   body: "oink",
//   tags: ["tag1", "tag1"], // Optional, you can specify tags
//   media: "https://unsplash.com/photos/Wpg3Qm0zaGk", // Optional, if your post includes an image
// };

const createPostOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
  body: JSON.stringify(newPostData),
};

fetch(createPostUrl, createPostOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Feil ved oppretting av innlegg");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Opprettet nytt innlegg:", data);
  })
  .catch((error) => {
    console.error("Feil ved oppretting av innlegg:", error);
  });
