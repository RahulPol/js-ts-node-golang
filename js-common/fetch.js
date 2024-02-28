fetch(
  "https://api.github.com/repos/javascript-tutorial/en.javascript.ifo/commits"
)
  .then((response) => {
    console.log(response.ok, response.status);
    return response.ok ? response.json() : new Error("incorrect response");
    // if (response.ok) {
    //   return response.json();
    // } else {
    //   throw new Error("incorrect response");
    // }
  })
  .then((commits) => console.log(commits[0].author.login))
  .catch((err) => console.log(err));
