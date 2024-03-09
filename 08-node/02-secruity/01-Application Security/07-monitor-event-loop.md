### Monitor the event loop

When your application server is under heavy network traffic, it may not be able to serve its users. This is essentially a type of Denial of Service (DoS) attack. The toobusy-js module allows you to monitor the event loop. It keeps track of the response time, and when it goes beyond a certain threshold, this module can indicate your server is too busy. In that case, you can stop processing incoming requests and send them 503 Server Too Busy message so that your application stay responsive.

Example:

```js
const toobusy = require("toobusy-js");
const express = require("express");
const app = express();
app.use(function (req, res, next) {
  if (toobusy()) {
    // log if you see necessary
    res.status(503).send("Server Too Busy");
  } else {
    next();
  }
});
```
