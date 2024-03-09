### Perform application activity logging

Logging makes it easier to debug any errors encountered during application runtime. In addition, these logs can be used to feed Intrusion Detection/Prevention Systems (IDS/IPS). In Node.js, there are modules such as Winston, Bunyan, or Pino to perform application activity logging. These modules enable streaming and querying logs, and they provide a way to handle uncaught exceptions.

Example

```js
const logger = new Winston.Logger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "application.log" }),
  ],
  level: "verbose",
});
```
