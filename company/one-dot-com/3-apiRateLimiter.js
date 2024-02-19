/**
 * An API rate limiter is a mechanism used to control the number of requests that a client (such as a user, application, or service) can make to an API within a specified time period. This control helps prevent abuse, overload, and potential denial-of-service attacks on the API server. Rate limiting is commonly implemented by API providers to ensure fair usage and maintain service availability for all users.

Here's how API rate limiting typically works:

Request Count Limitation: The rate limiter sets a maximum number of requests that a client can make to the API within a given time window (e.g., 100 requests per minute).

Time Windows: Rate limiting can be enforced over different time intervals, such as per second, per minute, per hour, etc.

Token Bucket Algorithm or Leaky Bucket Algorithm: These are common algorithms used for implementing rate limiting. The Token Bucket Algorithm grants tokens at a fixed rate, and each request consumes a token. Once the bucket is empty, additional requests are delayed or rejected. The Leaky Bucket Algorithm allows requests at a constant rate, leaking excess requests.

Response Handling: When a client exceeds the rate limit, the API server may respond with a specific HTTP status code (such as 429 Too Many Requests) along with a message indicating that the rate limit has been exceeded. Some APIs may also provide headers containing information about the client's current rate limit status.

Exponential Backoff: In some cases, clients may implement exponential backoff strategies, where they gradually increase the time between retries for failed requests. This helps alleviate congestion when rate limits are exceeded and reduces the load on the API server.
 */

//Write code for API rate limiter

// Lets say the time window is 10 secs and rate is 5 request / 10 secs
// implement a logic for time window that will reset request count after 10 secs to 0
// check if the request count is less than max requests in a given window
// if yes, allow
// if no, reject

const setRateLimiter = (maxRequests, windowSizeInSecs) => {
  let requestCount = 0;
  let resetTimeAt = new Date(Date.now() + windowSizeInSecs * 1000);

  return (url) => {
    let currentTime = Date.now();

    if (currentTime < resetTimeAt) {
      requestCount++;
      if (requestCount > maxRequests) {
        console.log(`rate limit exceeded..`);
      } else {
        console.log(`ok to call ${url} as request count is ${requestCount}`);
      }
    } else {
      console.log(`reset time limit`);
      resetTimeAt = new Date(currentTime + windowSizeInSecs * 1000);
      requestCount = 0;
    }
  };
};

const rateLimiter = setRateLimiter(5, 10);

// setInterval(() => {
//   rateLimiter("http://fake.url");
//   rateLimiter("http://fake.url");
//   rateLimiter("http://fake.url");
// }, 1 * 1000);

let requestCount = 0;
let windowSizeInSecs = 10;
let maxTime = new Date(Date.now() + windowSizeInSecs * 1000);
const rateLimiterFn = (url) => {
  let currentTime = Date.now();
  let maxRequest = 5;

  if (currentTime < maxTime) {
    if (requestCount < maxRequest) {
      console.log(
        `allow to call ${url} as the current count is ${requestCount + 1}`
      );
      requestCount++;
    } else {
      console.log(`rate limit exceeded`);
    }
  } else {
    maxTime = new Date(currentTime + windowSizeInSecs * 1000);
    requestCount = 0;
    console.log(`timer reset`);
  }
};

setInterval(() => {
  rateLimiterFn("http://fake.url");
}, 1 * 1000);
