const API_BASE_URL = "https://api.noroff.dev/api/v1";

// REGISTER
async function registerUser(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("Error during registration:", error);
  }
}

const userToRegister = {
  name: "Sven_manneng",
  email: "bjarteeoliversenloken@noroff.no",
  password: "oWiiHoo17h543gggg",
  avatar: "",
  banner: "",
};

const registerUrl = `${API_BASE_URL}/social/auth/register`;

registerUser(registerUrl, userToRegister);

// LOGIN
async function loginUser(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("Error during login:", error); 
  }
}
const userToLogin = {
  email: "bjarteeoliversenloken@noroff.no",
  password: "oWiiHoo17h543gggg",
};
const loginUrl = `${API_BASE_URL}/social/auth/login`;
loginUser(loginUrl, userToLogin);

// GET TOKEN
async function getAccessToken(url) {
  try {
    const token = localStorage.getItem("accessToken");
    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Could not get access token:", error); 
    throw error;
  }
}

const postsUrl = `${API_BASE_URL}/social/posts`;

getAccessToken(postsUrl)
  .then((data) => {
    console.log("Data fetched:", data); 
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });

