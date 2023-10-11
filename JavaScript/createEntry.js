const API_BASEee_URL = "https://api.noroff.dev/api/v1";
const accessTokenn =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTg4LCJuYW1lIjoiU3Zlbl9tYW5uZW5nIiwiZW1haWwiOiJiamFydGVlb2xpdmVyc2VubG9rZW5Abm9yb2ZmLm5vIiwiYXZhdGFyIjoiIiwiYmFubmVyIjoiIiwiaWF0IjoxNjk1NzQ1OTgzfQ.rax294g9uS07X3rN0sn2kl6hTi5f3toPabTsGL_gsSQ";

const newPostDataa = {
  title: "",
  body: "",
  tags: ["", ""],
  media: "",
};

const createPostUrl = `${API_BASEee_URL}/social/posts`;

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
      throw new Error("Feil ved oppretting av innlegg");
    }
    return response.json();
  })
  .then((data) => {
    console.log("made a new post:", data);
  })
  .catch((error) => {
    console.error("Feil ved oppretting av innlegg:", error);
  });
