### Set Request Size Limit

Buffering and parsing of request bodies can be a resource intensive task. If there is no limit on the size of requests, attackers can send requests with large request bodies that can exhaust server memory and/or fill disk space. You can limit the request body size for all requests using raw-body.

You should set request size limits for different content types. You can accomplish this very easily with express middleware as follows:

```js
const contentType = require("content-type");
const express = require("express");
const getRawBody = require("raw-body");

const app = express();

app.use(express.urlencoded({ extended: true, limit: "1kb" }));
app.use(express.json({ limit: "1kb" }));

app.use(function (req, res, next) {
  if (!["POST", "PUT", "DELETE"].includes(req.method)) {
    next();
    return;
  }

  getRawBody(
    req,
    {
      length: req.headers["content-length"],
      limit: "1kb",
      encoding: contentType.parse(req).parameters.charset,
    },
    function (err, string) {
      if (err) return next(err);
      req.text = string;
      next();
    }
  );
});
```

It should be noted that attackers can change the `Content-Type` header of the request and bypass request size limits. Therefore, before processing the request, data contained in the request should be validated against the content type stated in the request headers. If content type validation for each request affects the performance severely, you can only validate specific content types or request larger than a predetermined size.
