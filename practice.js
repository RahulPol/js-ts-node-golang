const userURL = "http://localhost:5000";

async function fetchUser(id) {
  try {
    const response = await fetch(url + `?id=${id}`);
    if (!response.ok) {
      return Promise.reject("error while fetching user");
    }
    return response.json();
  } catch (e) {
    return Promise.reject("error while fetching user");
  }
}
