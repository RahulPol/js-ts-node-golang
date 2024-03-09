## What is REST

REST is an acronym for **RE**presentational **S**tate **T**ransfer and an architectural style for **distributed hypermedia systems**. Roy Fielding first presented it in 2000 in his famous dissertation. Since then it has become one of the most widely used approaches for building web-based APIs (Application Programming Interfaces).

REST is not a protocol or a standard, it is an architectural style. Like the other architectural styles, REST also has its guiding principles and constraints. These principles must be satisfied if a service interface has to be referred to as RESTful.

### What is Resource?

The key abstraction of information in REST is a resource. Any information that we can name can be a resource. For example, a REST resource can be a document or image, a temporal service, a collection of other resources, or a non-virtual object (e.g., a person).
The state of the resource, at any particular time, is known as the resource representation. The resource representations consist of:

- the data
- the metadata describing the data
- and the hypermedia links that can help the clients transition to the next desired state.

### Resource Methods

Another important thing associated with REST is resource methods. A large number of people wrongly relate resource methods to HTTP methods (i.e., GET/PUT/POST/DELETE). Roy Fielding has never mentioned any recommendation around which method to use in which condition. All he emphasizes is that it should be a **uniform interface**.
For example, if we decide that the application APIs will use HTTP POST for updating a resource – rather than most people recommend HTTP PUT – it’s all right. Still, the application interface will be RESTful.

### The Six Guiding Principles of REST

![six principles](./six-principles.png)

### Uniform Interface

REST defines a consistent and uniform interface for interactions between clients and servers. For example, the HTTP-based REST APIs make use of the standard HTTP methods (GET, POST, PUT, DELETE, etc.) and the URIs (Uniform Resource Identifiers) to identify resources.

The following few constraints can achieve a uniform REST interface:

- **Identification of resources** – The interface must uniquely identify each resource involved in the interaction between the client and the server.
- **Self-descriptive messages** – Each resource representation should carry enough information to describe how to process the message.
- **Hypermedia as the engine of application state** – The client should have only the initial URI of the application. The client application should dynamically drive all other resources and interactions with the use of hyperlinks. For eg, if client demands a resource(GET request) the server should provide the resource as well as all the possible actions(PUT/POST/PATCH/DELETE/etc) for the resource in html(hypermedia enabled) response. When you visit wiki you get the page as well as possible actions that can be performed on the page.

### Client-Server

The client-server design pattern enforces the **separation of concerns**, which helps the client and the server components evolve independently.

While the client and the server evolve, we have to make sure that the interface/contract between the client and the server does not break.

### Stateless

Statelessness mandates that each request from the client to the server must contain all of the information necessary to understand and complete the request.

The server cannot take advantage of any previously stored context information on the server.

For this reason, the client application must entirely keep the session state.

### Cacheable

The cacheable constraint requires that a response should implicitly or explicitly label itself as cacheable or non-cacheable.

If the response is cacheable, the client application gets the right to reuse the response data later for equivalent requests and a specified period.

### Layered System

A layman’s example of a layered system is the MVC pattern. The MVC pattern allows for a clear separation of concerns, making it easier to develop, maintain, and scale the application.

### Code on Demand (Optional)

REST also allows client functionality to extend by downloading and executing code in the form of applets or scripts.

The downloaded code simplifies clients by reducing the number of features required to be pre-implemented. Servers can provide part of features delivered to the client in the form of code, and the client only needs to execute the code.

Source: https://restfulapi.net/
