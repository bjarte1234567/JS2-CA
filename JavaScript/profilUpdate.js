const API_BASE_URL = "https://api.noroff.dev/api/v1";
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTg4LCJuYW1lIjoiU3Zlbl9tYW5uZW5nIiwiZW1haWwiOiJiamFydGVlb2xpdmVyc2VubG9rZW5Abm9yb2ZmLm5vIiwiYXZhdGFyIjoiIiwiYmFubmVyIjoiIiwiaWF0IjoxNjk1NzQ1OTgzfQ.rax294g9uS07X3rN0sn2kl6hTi5f3toPabTsGL_gsSQ";


const authorName = "Sven_manneng"; // Erstatt med ditt brukernavn
const updateMediaUrl = `${API_BASE_URL}/social/profiles/${authorName}/media`;


const mediaData = {
  banner: "https://images.unsplash.com/photo-1682687982185-531d09ec56fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  avatar: "https://images.unsplash.com/photo-1682687982185-531d09ec56fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
};

const mediaUpdateOptions = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
  body: JSON.stringify(mediaData),
};

fetch(updateMediaUrl, mediaUpdateOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Media update request was not successful");
    }
    return response.json();
  })
  .then((updatedProfile) => {
    console.log("Updated profile with new media:", updatedProfile);
    // Du kan oppdatere brukerens profilvisning med de nye bildene her hvis det er nødvendig
  })
  .catch((error) => {
    console.error("Error updating profile media:", error);
  });
