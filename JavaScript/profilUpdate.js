/**
 * Constant that defines the base URL of the API.
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
 * User's name or identifier.
 * @type {string}
 */
const authorName = "Sven_manneng";

/**
 * Data for creating a new post.
 * @type {Object}
 */
const newPostData = {
  title: "ttttest",
  body: "tttest",
  tags: ["gag2", "gag1"],
  media:
    "",
};

/**
 * URL for updating user media (banner and avatar).
 * @type {string}
 */
const updateMediaUrl = `${API_BASE_URL}/social/profiles/${authorName}/media`;

/**
 * Data for updating user media.
 * @type {Object}
 */
const mediaData = {
  banner: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFubmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" avatar: ""};

/**
 * Options for updating user media using the Fetch API.
 * @type {Object}
 */
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

    const bannerImg = document.getElementById("banner");
    const avatarImg = document.getElementById("avatar");

    bannerImg.src = updatedProfile.banner;
    avatarImg.src = updatedProfile.avatar;
  })
  .catch((error) => {
    console.error("Error updating profile media:", error);
  });
