### It’s Time to Handle Errors Properly

The typical code flow of async/await looks like the following

```js
const doAsyncJobs = async () => {
  try {
    const result1 = await job1();
    const result2 = await job2(result1);
    const result3 = await job3(result2);
    return await job4(result3);
  } catch (error) {
    console.error(error);
  } finally {
    await anywayDoThisJob();
  }
};
```

Using Node.js built-in Error object is a good practice because it includes intuitive and clear information about errors like StackTrace, which most developers depend on to keep track of the root of an error. And additional meaningful properties like HTTP status code and a description by extending the Error class will make it more informative.

```ts
class BaseError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpStatusCode;
  public readonly isOperational: boolean;

  constructor(
    name: string,
    httpCode: HttpStatusCode,
    description: string,
    isOperational: boolean
  ) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

//free to extend the BaseError
class APIError extends BaseError {
  constructor(
    name,
    httpCode = HttpStatusCode.INTERNAL_SERVER,
    isOperational = true,
    description = "internal server error"
  ) {
    super(name, httpCode, isOperational, description);
  }
}

// sample status code
export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
}
```

So how do you use it? Just throw this in:

```ts
...
const user = await User.getUserById(1);
if (user === null)
 throw new APIError(
   'NOT FOUND',
   HttpStatusCode.NOT_FOUND,
   true,
   'detailed explanation'
 );
```
