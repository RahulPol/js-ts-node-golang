### Four Principles for Designing Effective APIs

An API (Application Programming Interface) outlines the set of rules that the application will use to communicate with its internal components as well as with other applications. While there are no formal guidelines or standards that govern how you have to build your APIs, there are certain principles that can help you develop APIs in the most commonly accepted ways.

Most ideas can be grouped under the following four principles of API design:

1. Build APIs using common and widely accepted standards
2. Keep your responses easily understandable and consumable
3. Secure your APIs
4. Support with good documentation

Let's check one by one

1.  Build APIs using common and widely accepted standards
    Most cloud applications have adopted REST as the preferred approach to transfer data over API requests. REST has been around for quite some time. Let's look at some of the commonly accepted standards in REST API design.

    - **Follow basic conventions for request paths**

      Request paths should specify the request being made and should be defined in a manner that's easy to understand, without leaving any room for confusion.

      **Use resource names**

      ```
          Bad: /api/create-products
          Good:/api/products
      ```

      **Use plural forms**

      ```
          Bad: /api/product
          Good:/api/products
      ```

      **Use nested hierarchy**

      ```
          Bad:
          GET /products/
          GET /product-reviews
          Good:
          GET /products/:product_id/reviews
          PUT /products/:product_id/reviews/:review_i
      ```

    - **Use JSON as an exchange format**

      Go with JSON. It's lightweight and flexible. It is easily consumed by various channels and is a widely used format. Set "Content-type": "application/json" in the header for your request and response.

    - **Version APIs**

      When releasing new features, changes, or bug fixes, make sure you version your APIs, and list down breaking changes clearly. Also, for all the versions, use version numbers after the base URL.

      `Example: http://api.domain.com/v1/products`

    - **Offer ways to filter, paginate, sort, and search data**
      Databases can get really big. Your APIs should provide ways that allow users to narrow down to exactly what they want, instead of returning all at once, else it may soon exhaust their bandwidth or even bring down your system.

      `Example: Allow users to fetch products by categories: /v1/products?query={categories: ["category1", "category2"]}`

      `Example: Allow user to paginate response: /v1/products?skip={skip_value}&limit={limit_value}`

2.  Keep your responses easily understandable and consumable

    - **Use standard HTTP response codes**

      You can use the ranges of codes for common responses:

      Information: 100–199

      Successful: 200–299

      Redirect: 300–399

      Client errors: 400–499

      Server errors: 500–599

      Most common status codes

      - **200 OK**
      - **301 Moved Permanently**
      - **302 Found (Moved Temporarily)**
      - **304 Not Modified**
      - **400 Bad Request**
      - **401 Unauthorized**
      - **403 Forbidden**
      - **404 Not Found**
      - **429 Too many requests**
      - **500 Internal Server Error**

    - **Define a proper response body**

      Resources in the body should have proper metadata, and should be wrapped according to the path. For JSON keys having multiple words, use either hyphens (-), underscores (\_) or camelCase. Use any one and use it consistently in all the responses.

    - **Have clear response headers**
      If you are going to expose your APIs externally, it is important to support CORS (cross-origin resource sharing) header. Cache headers help the user determine if the data was served from the origin or cache server. You can also use the "X-Request-Id: {{TRACE_ID}}" header in the response. It helps trace the entire lifecycle of the request while debugging.

    - **Remove unnecessary response headers**
      Not all headers are required. You can remove unnecessary response headers, such as "Server", "X-Served-By", or "X-Powered-By", and save a small amount of bandwidth for your users.

3.  Secure your APIs
    Use SSL/TLS for securing all your endpoints and resources. No exceptions. To prevent your APIs from unwanted abuse and attacks, have certain limits in place and mention it in header using "X-RateLimit", "X-RateLimit-Remaining", and "X-RateLimit-Reset".

4.  Support with good documentation

source: https://www.mulesoft.com/api-university/four-principles-designing-effective-apis
