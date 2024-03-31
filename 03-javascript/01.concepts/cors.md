### How does CORS work?

CORS (Cross-Origin Resource Sharing) is a mechanism that allows web servers to specify which origins are permitted to access the resources on a web page. It's a security feature implemented by web browsers to prevent unauthorized cross-origin requests.

Here's how CORS works:

1. **Origin**: An origin is the combination of protocol, domain, and port from which a resource is served. For example, `http://example.com:80` and `https://example.com:443` are different origins.

2. **Cross-Origin Requests**: When a web page hosted on one origin (the requesting origin) tries to request a resource from a different origin (the target origin), it's considered a cross-origin request.

3. **Same-Origin Policy (SOP)**: By default, web browsers enforce the Same-Origin Policy, which restricts cross-origin requests for security reasons. Under SOP, scripts running on a web page can only make requests to the same origin as the web page itself. Cross-origin requests are blocked to prevent potential security vulnerabilities, such as Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).

4. **Preflight Request**: Certain types of cross-origin requests, such as those with non-simple methods (e.g., `PUT`, `DELETE`) or custom headers, trigger a preflight request. The browser sends an HTTP OPTIONS request to the target server to determine if the actual request (e.g., `POST`, `GET`) is safe to send. The server responds with appropriate CORS headers indicating whether the request is allowed.

5. **CORS Headers**: Servers can specify CORS policies using HTTP headers in their responses to indicate which origins are allowed to access their resources. The primary CORS headers include:
   - `Access-Control-Allow-Origin`: Specifies which origins are allowed to access the resource. This header can contain a single origin or `*` to allow access from any origin.
   - `Access-Control-Allow-Methods`: Specifies which HTTP methods are allowed when accessing the resource.
   - `Access-Control-Allow-Headers`: Specifies which HTTP headers are allowed in a request.
   - `Access-Control-Allow-Credentials`: Indicates whether the request can include credentials (such as cookies or HTTP authentication) when making cross-origin requests.
   - `Access-Control-Max-Age`: Specifies how long the results of a preflight request can be cached, in seconds.

By allowing servers to specify CORS policies through these headers, web developers can control access to their resources from different origins while still enabling cross-origin requests when necessary for legitimate use cases like APIs and web services.
