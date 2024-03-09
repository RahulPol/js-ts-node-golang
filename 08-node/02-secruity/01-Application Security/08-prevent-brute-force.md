### Take precautions against brute forcing

Attackers can use brute-forcing as a password guessing attack to obtain account passwords. Therefore, application developers should take precautions against brute-force attacks especially in login pages. Node.js has several modules available for this purpose. Express-bouncer, express-brute and rate-limiter are just some examples.

Example:

```js
const bouncer = require("express-bouncer");
bouncer.whitelist.push("127.0.0.1"); // allow an IP address
// give a custom error message
bouncer.blocked = function (req, res, next, remaining) {
  res
    .status(429)
    .send(
      "Too many requests have been made. Please wait " +
        remaining / 1000 +
        " seconds."
    );
};
// route to protect
app.post("/login", bouncer.block, function (req, res) {
  if (LoginFailed) {
  } else {
    bouncer.reset(req);
  }
});
```
