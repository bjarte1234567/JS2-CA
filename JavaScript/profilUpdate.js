const API_BASE_URL = "https://api.noroff.dev/api/v1";
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTg4LCJuYW1lIjoiU3Zlbl9tYW5uZW5nIiwiZW1haWwiOiJiamFydGVlb2xpdmVyc2VubG9rZW5Abm9yb2ZmLm5vIiwiYXZhdGFyIjoiIiwiYmFubmVyIjoiIiwiaWF0IjoxNjk1NzQ1OTgzfQ.rax294g9uS07X3rN0sn2kl6hTi5f3toPabTsGL_gsSQ";

const authorName = "Sven_manneng";

const newPostData = {
  title: "ttttest",
  body: "tttest",
  tags: ["gag2", "gag1"],
  media: "https://unsplash.com/photos/a-man-holding-a-baby-in-front-of-a-garage-door-1RqdfT0Oyqk",
};

// Oppdatering av medieinformasjon
const updateMediaUrl = `${API_BASE_URL}/social/profiles/${authorName}/media`;

const mediaData = {
  banner: "https://unsplash.com/photos/V7SKRhXskv8",
  avatar: "https://unsplash.com/photos/V7SKRhXskv8",
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
    const bannerImg = document.getElementById("banner");
    const avatarImg = document.getElementById("avatar");

    bannerImg.src = updatedProfile.banner;
    avatarImg.src = updatedProfile.avatar;
  })
  .catch((error) => {
    console.error("Error updating profile media:", error);
  });

